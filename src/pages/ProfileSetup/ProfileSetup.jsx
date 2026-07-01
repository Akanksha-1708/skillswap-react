// Everyone gets the user from one place auth context, That's why React has Context API.
// firebase->authcontext->navbar,name,dashboard->profile
// authentication can not user full data , it only store identification data that's why firebase give us firestore database , it store complete info
// SIGNUP->FIREBASE AUTHENTICATION->PROFILE SETUP->FIRESTORE->DASHBOARD

// doc=> tells which document to update, 
// setDoc=>updates the document, 
// serverTimestamp=>gives current time

// react form->handlesaavefrofile()->setdoc()->internet->firebase server->firestore database->users collection->uid document->data saved !
// Authentication stores only identity (uid, email).
// Firestore stores the complete user profile.

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/firebase";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

function ProfileSetup() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [profile, setProfile] = useState({
    fullName: "",
    bio: "",
    teachingSkills: "",
    learningSkills: "",
    experience: "",
    availability: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = async () => {
    if (!currentUser) return;

    try {
      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          uid: currentUser.uid,

          fullName: profile.fullName,

          email: currentUser.email,

          bio: profile.bio,

          teachingSkills: profile.teachingSkills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),

          learningSkills: profile.learningSkills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),

          experience: profile.experience,

          availability: profile.availability,

          createdAt: serverTimestamp(),
        }
      );

      alert("Profile Saved!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793] px-6 py-12">

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-4xl font-bold text-white">
          Complete Your Profile
        </h1>

        <p className="mt-3 text-slate-300">
          Help us recommend the best skill partners for you.
        </p>

        <div className="mt-8 space-y-6">

          {/* Full Name */}

          <div>
            <label className="mb-2 block text-slate-200">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          {/* Bio */}

          <div>
            <label className="mb-2 block text-slate-200">
              Bio
            </label>

            <textarea
              rows="4"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          {/* Teaching Skills */}

          <div>
            <label className="mb-2 block text-slate-200">
              Skills You Teach
            </label>

            <input
              type="text"
              name="teachingSkills"
              value={profile.teachingSkills}
              onChange={handleChange}
              placeholder="React, C++, Python"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          {/* Learning Skills */}

          <div>
            <label className="mb-2 block text-slate-200">
              Skills You Want to Learn
            </label>

            <input
              type="text"
              name="learningSkills"
              value={profile.learningSkills}
              onChange={handleChange}
              placeholder="Machine Learning, UI Design"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Experience */}

            <div>
              <label className="mb-2 block text-slate-200">
                Experience
              </label>

              <select
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none"
              >
                <option value="">Select</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Availability */}

            <div>
              <label className="mb-2 block text-slate-200">
                Availability
              </label>

              <select
                name="availability"
                value={profile.availability}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none"
              >
                <option value="">Select</option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Flexible</option>
              </select>
            </div>

          </div>

          <Button
            onClick={handleSaveProfile}
            className="h-12 w-full bg-blue-500 hover:bg-blue-600"
          >
            Save Profile
          </Button>

        </div>

      </div>

    </div>
  );
}

export default ProfileSetup;