import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);

            toast.success("Logged in successfully!");

            navigate("/profile");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (

        <div className="min-h-screen bg-[#050816] flex justify-center items-center">

            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl w-[400px] border border-white/10">

                <h1 className="text-white text-4xl font-bold mb-8">
                    Login
                </h1>

                <input
                    className="w-full p-3 rounded-xl mb-5 bg-black/20 text-white outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full p-3 rounded-xl mb-6 bg-black/20 text-white outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin} className="w-full bg-blue-500 p-3 rounded-xl text-white font-bold hover:bg-blue-600 transition"
                >
                    Login
                </button>

                <p className="text-center text-gray-400 mt-6">

                    Don't have an account?{" "}

                    <Link
                        to="/signup"
                        className="text-[#4285F4] hover:underline font-semibold"
                    >
                        Create Account
                    </Link>

                </p>


            </div>

        </div>

    )

}

export default Login;