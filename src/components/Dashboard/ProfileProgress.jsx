// Instead of building a progress bar from scratch with <div>s and CSS, we're reusing a tested UI component.
// This lets you focus on the application logic. Later, when the user uploads a profile picture, adds skills, or writes a bio, we'll calculate the percentage dynamically and simply change the value prop

// React computes the value from existing data instead of storing another piece of state( for calc profile progress val)
// with the use of useAth()->Instead of fetching from Firestore again, you reused the data already stored in AuthContext
// for other cards, instead of calculating things again, we will reuse the same logic, which is react principle called DRY(Don't Repeat Yourself). This is a good practice to avoid code duplication and make the code more maintainable

import { Progress } from "@/components/ui/progress";
import {useAuth} from "@/context/AuthContext";

function ProfileProgress() {
  const {userProfile}=useAuth();
  const fields=[
    userProfile?.fullName,
    userProfile?.bio,
    userProfile?.teachingSkills?.length,
    userProfile?.learningSkills?.length,
    userProfile?.experience,
    userProfile?.availability,
  ]
  const completedFields=fields.filter(Boolean).length;
  const progress=Math.round((completedFields/fields.length)*100);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Profile Completion
          </h2>

          <p className="mt-2 text-slate-300">
            Complete your profile to get better skill matches.
          </p>
        </div>

        <span className="text-3xl font-bold text-blue-400">
          {progress}%
        </span>
      </div>

      <Progress
        value={progress}
        className="mt-6 h-3"
      />
    </div>
  );
}

export default ProfileProgress;