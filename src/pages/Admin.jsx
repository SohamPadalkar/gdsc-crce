
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import {
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";

const Admin = () => {
  const [registrations, setRegistrations] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch registrations
      const regSnapshot = await getDocs(
        collection(db, "registrations")
      );

      const regData = regSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRegistrations(regData);

      // Fetch users
      const userSnapshot = await getDocs(
        collection(db, "users")
      );

      setUserCount(userSnapshot.size);
    };

    fetchData();
  }, []);

  return (
    <>
      <Background />
      <Navbar />

      <main className="min-h-screen text-white pt-28">

        <section className="max-w-7xl mx-auto px-8 py-16">

          <p className="uppercase tracking-[8px] text-gray-500 mb-4">
            Admin Panel
          </p>

          <h1 className="f1 text-7xl">
            CONTROL
            <br />
            CENTER
          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl">
            Manage registrations and monitor GDSC events.
          </p>

        </section>

        <section className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaUsers className="text-[#4285F4] text-3xl mb-5" />

              <p className="text-gray-400">
                Total Users
              </p>

              <h1 className="text-5xl font-bold mt-3">
                {userCount}
              </h1>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaCalendarAlt className="text-[#34A853] text-3xl mb-5" />

              <p className="text-gray-400">
                Events
              </p>

              <h1 className="text-5xl font-bold mt-3">
                {new Set(
                  registrations.map((r) => r.eventName)
                ).size}
              </h1>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaClipboardList className="text-[#FBBC05] text-3xl mb-5" />

              <p className="text-gray-400">
                Registrations
              </p>

              <h1 className="text-5xl font-bold mt-3">
                {registrations.length}
              </h1>

            </div>

          </div>

        </section>

        <section className="max-w-7xl mx-auto px-8 pb-32">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

            <div className="px-8 py-6 border-b border-white/10">

              <h2 className="text-3xl font-bold">
                Event Registrations
              </h2>

            </div>

            <table className="w-full">

              <thead>

                <tr className="border-b border-white/10">

                  <th className="text-left px-8 py-5">
                    Email
                  </th>

                  <th className="text-left px-8 py-5">
                    Event
                  </th>

                </tr>

              </thead>

              <tbody>

                {registrations.map((user) => (

                  <tr
                    key={user.id}
                    className="border-b border-white/5 hover:bg-white/5"
                  >

                    <td className="px-8 py-5">
                      {user.email}
                    </td>

                    <td className="px-8 py-5">
                      {user.eventName}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        <Footer />

      </main>
    </>
  );
};

export default Admin;

