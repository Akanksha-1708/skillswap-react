// it display a single review left by another user

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

function ReviewCard({ review }) {
    const [reviewer, setReviewer] = useState(null);
    useEffect(() => {
    const fetchReviewer = async () => {
        const docRef = doc(
            db,
            "users",
            review.fromUser
        );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setReviewer(docSnap.data());
        }
    };
    fetchReviewer();
    }, [review]);

    if (!reviewer) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
            Loading...
        </div>
    );
    }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h3 className="text-xl font-bold text-white">
        {reviewer.fullName}
      </h3>

      <p className="mt-2 text-yellow-400">
        {"⭐".repeat(review.rating)}
      </p>

      <p className="mt-4 text-slate-300">
        {review.comment}
      </p>

    </div>
  );
}

export default ReviewCard;