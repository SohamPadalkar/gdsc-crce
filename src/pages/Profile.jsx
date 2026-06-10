import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {

    const user = auth.currentUser;
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-[#050816] text-white flex justify-center items-center">

                <div className="bg-white/5 p-10 rounded-3xl w-[500px]">

                    <h1 className="text-4xl font-bold mb-8">
                        Profile
                    </h1>

                    <h2 className="text-xl mb-3">
                        Email: {user?.email}
                    </h2>

                    <h2 className="text-xl mb-6">
                        UID: {user?.uid}
                    </h2>

                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold"
                    >
                        Logout
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Profile;