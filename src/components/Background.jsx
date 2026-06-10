const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

            {/* Google Glow */}

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4285F4]/10 blur-[180px]" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#34A853]/10 blur-[180px]" />

            {/* Grid */}

            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            {/* Radar Circles */}

            <div className="absolute top-20 left-20 w-80 h-80 border border-[#4285F4]/20 rounded-full"></div>

            <div className="absolute top-16 left-16 w-96 h-96 border border-[#4285F4]/10 rounded-full"></div>

            <div className="absolute bottom-32 right-32 w-72 h-72 border border-[#34A853]/20 rounded-full"></div>

        </div>
    );
};

export default Background;