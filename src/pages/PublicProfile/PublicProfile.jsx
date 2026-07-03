// PublicProfile displays the complete information of a selected user.
//
// The page uses a dynamic route (/profile/:userId), where userId is the
// Firestore document ID.
//
// Flow:
//
// BrowseSkills
//       ↓
// Click "View Profile"
//       ↓
// React Router (useParams)
//       ↓
// Extract userId from URL
//       ↓
// Fetch ONE document using getDoc()
//       ↓
// Store user in React state
//       ↓
// Display the user's profile
//
// Unlike BrowseSkills, which fetches every user using getDocs(),
// this page fetches only one specific user using getDoc().
// useparams() extracts the userId from the URL, which is then used to fetch the user's data from Firestore.

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useParams } from "react-router-dom";

function PublicProfile() {

    const { userId } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser=async()=>{
            const docRef=doc(db,"users",userId);
            const docSnap=await getDoc(docRef);
            if(docSnap.exists()){
                setUser(docSnap.data());
            }
        };
        fetchUser();
    }, [userId]);

    if (!user) {
    return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793]">
      <h1 className="text-3xl text-white">
        Loading...
      </h1>
    </div>
    );
    }

return (
  <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793] px-6 py-10">

    <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

      <h1 className="text-5xl font-bold text-white">
        {user.fullName}
      </h1>

      <p className="mt-4 text-lg text-slate-300">
        {user.bio}
      </p>

      <div className="mt-8">

        <h2 className="text-xl font-semibold text-blue-400">
          Teaching Skills
        </h2>

        <p className="mt-2 text-white">
          {user.teachingSkills.join(", ")}
        </p>

      </div>

      <div className="mt-8">

        <h2 className="text-xl font-semibold text-green-400">
          Learning Skills
        </h2>

        <p className="mt-2 text-white">
          {user.learningSkills.join(", ")}
        </p>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <div>

          <h2 className="font-semibold text-blue-400">
            Experience
          </h2>

          <p className="mt-2 text-white">
            {user.experience}
          </p>

        </div>

        <div>

          <h2 className="font-semibold text-blue-400">
            Availability
          </h2>

          <p className="mt-2 text-white">
            {user.availability}
          </p>

        </div>

      </div>

    </div>

  </div>
);
}

export default PublicProfile;