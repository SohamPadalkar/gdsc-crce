const seniorCouncil = [
    { name: "Angela Dsouza", role: "Chairperson", color: "#4285F4" },
    { name: "Sarah Dayal", role: "GDSC Lead", color: "#EA4335" },
    { name: "Mayank Mehta", role: "Head of Operations", color: "#FBBC05" },
    { name: "Chris Lopes", role: "Technical Lead", color: "#34A853" },
    { name: "Yash Solanki", role: "Treasurer", color: "#4285F4" },
    { name: "Celene Ciby", role: "Marketing Lead", color: "#EA4335" },
    { name: "Vadim Rodricks", role: "PR Lead", color: "#34A853" },
    { name: "Jaden Vaz", role: "Outreach & Partnerships Lead", color: "#FBBC05" },
    { name: "Mehek Gupta", role: "Design & Creatives Lead", color: "#4285F4" },
];

const juniorCouncil = [
    { name: "Varad Joshi", role: "Technical Associate", color: "#4285F4" },
    { name: "Abhishek Jose", role: "Technical Associate", color: "#EA4335" },
    { name: "Shreysh Nair", role: "Jr Events Coordinator", color: "#FBBC05" },
    { name: "Rohita Bhayamkaram", role: "Jr Events Coordinator", color: "#34A853" },
    { name: "Nevan Nunes", role: "CE Representative", color: "#4285F4" },
    { name: "Shalom Mendes", role: "CSE Representative", color: "#EA4335" },
    { name: "Jostal Fernandes", role: "ECS Representative", color: "#FBBC05" },
    { name: "Laksh Shivalkar", role: "Mechanical Representative", color: "#34A853" },
    { name: "Saanvi Desai", role: "Design & Creatives Associate", color: "#4285F4" },
    { name: "Meet Mangaonkar", role: "Social Media Associate", color: "#EA4335" },
    { name: "Sanika Lobo", role: "Social Media Associate", color: "#FBBC05" },
    { name: "Ashley Bothello", role: "Marketing Associate", color: "#34A853" },
    { name: "Tanish Ingole", role: "Marketing Associate", color: "#4285F4" },
    { name: "Aisha Mendonsa", role: "PR Associate", color: "#EA4335" },
];

const Card = ({ member }) => {

    const initials = member.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2);

    return (
        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-white/20 transition-all duration-500">

            <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6"
                style={{
                    backgroundColor: `${member.color}20`,
                    color: member.color,
                }}
            >
                {initials}
            </div>

            <h2 className="text-white text-xl font-bold">
                {member.name}
            </h2>

            <p className="text-gray-400 mt-2 min-h-[48px]">
                {member.role}
            </p>

            <div
                className="w-12 h-1 rounded-full mt-5"
                style={{
                    backgroundColor: member.color,
                }}
            ></div>

        </div>
    );
};

const Team = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-32 text-white">

            <div className="text-center mb-24">

                <p className="uppercase tracking-[8px] text-gray-500 mb-4">
                    Leadership
                </p>

                <h1 className="text-6xl font-bold">
                    The People Behind GDSC
                </h1>

                <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-xl leading-9">
                    Meet the passionate students driving innovation,
                    collaboration and technology at GDSC CRCE.
                </p>

            </div>

            <h2 className="text-4xl font-bold mb-10">
                Senior Council
            </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24">

                {seniorCouncil.map((member) => (
                    <Card key={member.name} member={member} />
                ))}

            </div>

            <h2 className="text-4xl font-bold mb-10">
                Junior Council
            </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                {juniorCouncil.map((member) => (
                    <Card key={member.name} member={member} />
                ))}

            </div>

        </section>
    );
};

export default Team;