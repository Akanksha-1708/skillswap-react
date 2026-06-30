import { Button } from "@/components/ui/button";

const matches = [
  {
    id: 1,
    name: "Rahul Sharma",
    teaches: "React",
    wants: "Python",
  },
  {
    id: 2,
    name: "Priya Singh",
    teaches: "UI/UX",
    wants: "JavaScript",
  },
  {
    id: 3,
    name: "Arjun Patel",
    teaches: "Machine Learning",
    wants: "C++",
  },
];

function RecommendedMatches() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-white">
        Recommended Matches
      </h2>

      <p className="mt-2 text-slate-300">
        People you can connect with based on your interests.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {matches.map((user) => (
          <div
            key={user.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                {user.name.charAt(0)}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {user.name}
                </h3>

                <p className="text-slate-400">
                  Teaches: {user.teaches}
                </p>

                <p className="text-slate-400">
                  Wants: {user.wants}
                </p>
              </div>

            </div>

            <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">
              View Profile
            </Button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecommendedMatches;