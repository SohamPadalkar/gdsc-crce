import { useState } from "react";
import Navbar from "../components/Navbar";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";

const Feedback = () => {

    const [rating, setRating] = useState(5);
    const [feedback, setFeedback] = useState("");

    const submitFeedback = async () => {

        if (!feedback) {
            toast.error("Write some feedback");
            return;
        }

        await addDoc(collection(db, "feedback"), {

            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            eventName: "Hackathon 2025",
            rating,
            feedback,
            createdAt: serverTimestamp()

        })

        toast.success("Feedback submitted");

        setFeedback("");

    }

    return (

        <>
            <Navbar />

            <div className="min-h-screen bg-[#0B1220] text-white flex justify-center items-center">

                <div className="w-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

                    <h1 className="text-4xl font-bold mb-8">
                        Event Feedback
                    </h1>

                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full mb-5 p-4 rounded-xl bg-[#1E293B]"
                    >

                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>

                    </select>

                    <textarea

                        rows={6}

                        value={feedback}

                        onChange={(e) => setFeedback(e.target.value)}

                        placeholder="Share your experience..."

                        className="w-full p-4 rounded-xl bg-[#1E293B] resize-none"

                    />

                    <button

                        onClick={submitFeedback}

                        className="mt-6 w-full bg-[#4285F4] py-4 rounded-xl font-bold"

                    >

                        Submit Feedback

                    </button>

                </div>

            </div>

        </>

    )

}

export default Feedback