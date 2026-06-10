import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-500">
          GDSC CRCE
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;