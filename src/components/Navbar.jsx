
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { auth, db } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import logo from "../assets/logo.png";



const Navbar = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };



  const [role, setRole] = useState(null);

  useEffect(() => {

    const fetchRole = async () => {

      if (!auth.currentUser) return;

      const snap = await getDoc(
        doc(db, "users", auth.currentUser.uid)
      );

      if (snap.exists()) {
        setRole(snap.data().role);
      }
    };

    fetchRole();

  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-4 group"
        >

          <img
            src={logo}
            alt="GDSC CRCE"
            className="w-14 h-14 transition duration-500 group-hover:rotate-6"
          />

          <h1 className="f1 text-2xl text-white tracking-wider">

            GDSC CRCE

          </h1>

        </Link>

        {/* Center Nav */}

        <div className="hidden md:flex items-center gap-10 uppercase tracking-[3px] text-sm">

          <Link to="/" className="relative text-white/80 hover:text-white transition after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-[#4285F4] after:transition-all hover:after:w-full">
            Home
          </Link>


          <Link
            to="/events"
            className="relative text-white/80 hover:text-white transition after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-[#34A853] after:transition-all hover:after:w-full"
          >
            Events
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {user && (
            <Link to="/profile">
              <FaUserCircle
                size={30}
                className="text-white/80 hover:text-[#4285F4] transition"
              />
            </Link>
          )}

          {
            role === "admin" && (
              <Link to="/admin" className="hidden md:block text-white/80 hover:text-white uppercase tracking-[3px] text-sm transition">
                Dashboard
              </Link>
            )
          }

          {!user ? (
            <Link
              to="/login"
              className="border border-white/20 px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition duration-300"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="border border-red-500 text-red-400 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;