// SentRequestCard displays the receiver's profile along with
// the current status of the request.
//
// The request document stores only the receiver's UID (toUser).
// Therefore we manually fetch the receiver's profile from the
// users collection using getDoc().
//
// Flow:
//
// Request
//      ↓
// toUser
//      ↓
// users collection
//      ↓
// getDoc()
//      ↓
// Receiver Profile
//      ↓
// Display profile + request status

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

function SentRequestCard({ request }) {

  const [receiver, setReceiver] = useState(null);

  useEffect(() => {

    const fetchReceiver = async () => {

      const docRef = doc(
        db,
        "users",
        request.toUser
      );

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setReceiver(docSnap.data());
      }

    };

    fetchReceiver();

  }, [request]);

  if (!receiver) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="text-2xl font-bold text-white">
        {receiver.fullName}
      </h2>

      <p className="mt-3 text-slate-300">
        {receiver.bio}
      </p>

      <p className="mt-5 text-blue-400 font-semibold">
        Teaching Skills
      </p>

      <p className="text-white">
        {receiver.teachingSkills.join(", ")}
      </p>

      <div
        className={`mt-8 inline-block rounded-full px-5 py-2 font-semibold text-white
        ${
          request.status === "pending"
            ? "bg-yellow-500"
            : request.status === "accepted"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
      </div>

    </div>
  );
}

export default SentRequestCard;