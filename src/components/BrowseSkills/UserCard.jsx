
import { Link } from "react-router-dom";
function UserCard({user}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-white">
        {user.fullName}
      </h2>

      <p className="mt-3 text-slate-300">
        {user.bio}
      </p>

      <div className="mt-6">

        <p className="text-blue-400 font-semibold">
          Teaching
        </p>

        <p className="text-white">
          {user.teachingSkills?.join(", ")}
        </p>

      </div>

      <div className="mt-5">

        <p className="text-green-400 font-semibold">
          Learning
        </p>

        <p className="text-white">
          {user.learningSkills?.join(", ")}
        </p>

      </div>

      <div className="mt-8">
        <Link 
        to={`/profile/${user.id}`} 
        className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-500 font-semibold text-white transition hover:bg-blue-600">
        View Profile
        </Link>
      </div>

    </div>
  );
}

export default UserCard;