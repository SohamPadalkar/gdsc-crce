import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative mt-40 border-t border-white/10 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#4285F4]/5 blur-[180px]"></div>

            <div className="relative max-w-7xl mx-auto px-8 py-20">

                <div className="text-center">

                    <h1 className="f1 text-6xl tracking-wider text-white">

                        GDSC CRCE

                    </h1>

                    <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-8">

                        Building the next generation of developers through
                        innovation, collaboration and impactful technology.

                    </p>

                </div>

                {/* Quick Links */}

                <div className="flex flex-wrap justify-center gap-10 mt-16 text-gray-400 uppercase tracking-[4px] text-sm">

                    <a href="#">Home</a>

                    <a href="#events">Events</a>

                    <a href="#team">Team</a>

                    <a href="/login">Login</a>

                </div>

                {/* Social Icons */}

                <div className="flex justify-center gap-8 mt-12 text-2xl">

                    <a
                        href="#"
                        className="hover:text-[#4285F4] transition duration-300"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="#"
                        className="hover:text-[#EA4335] transition duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="#"
                        className="hover:text-[#34A853] transition duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="#"
                        className="hover:text-[#FBBC05] transition duration-300"
                    >
                        <FaEnvelope />
                    </a>

                </div>

                {/* Bottom */}

                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

                    <p>
                        © 2025 Google Developer Student Clubs CRCE
                    </p>

                    <p className="tracking-[3px] uppercase mt-4 md:mt-0">

                        Learn • Build • Innovate

                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;