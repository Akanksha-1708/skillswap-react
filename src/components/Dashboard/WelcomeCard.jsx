// Using Context to access the logged-in user anywhere in your app.
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

function WelcomeCard() {
  const { currentUser,userProfile } = useAuth();
  console.log("Current User:", currentUser);
  console.log("User Profile:", userProfile);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h1 className="text-4xl font-bold text-white">
        Welcome,
        <span className="text-blue-400">
          {" "}
          {userProfile?.fullName||currentUser?.displayName || "Learner"} 👋
        </span>
      </h1>

      <p className="mt-4 text-lg text-slate-300">
        {currentUser?.email}
      </p>

      <p className="mt-6 max-w-2xl text-slate-400">
        {userProfile?.bio||
        "Continue your learning journey, connect with new mentors,and exchange skills with the SkillSwap community."}
      </p>
    </motion.div>
  );
}

export default WelcomeCard;