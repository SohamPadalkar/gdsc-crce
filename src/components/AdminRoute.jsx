import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const AdminRoute = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {

        const checkAdmin = async () => {

            if (!auth.currentUser) {
                setLoading(false);
                return;
            }

            const snap = await getDoc(
                doc(db, "users", auth.currentUser.uid)
            );

            if (snap.exists()) {
                setAdmin(snap.data().role === "admin");
            }

            setLoading(false);
        };

        checkAdmin();

    }, []);

    if (loading) return <h1 className="text-white">Loading...</h1>;

    return admin ? children : <Navigate to="/" />;

};

export default AdminRoute;