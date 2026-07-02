import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import {useAuth} from "@/context/AuthContext";

function StatsCards() {
  const {userProfile}=useAuth();
  const stats = [
  {
    title: "Skills Learning",
    value: userProfile?.learningSkills?.length || 0,
    icon: BookOpen,
  },
  {
    title: "Skills Teaching",
    value: userProfile?.teachingSkills?.length || 0,
    icon: GraduationCap,
  },
  {
    title: "Skill Swaps",
    value: 0,
    icon: Users,
  },
  {
    title: "Achievements",
    value: 0,
    icon: Award,
  },
];
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-blue-500/20 p-4">
                <Icon
                  size={32}
                  className="text-blue-400"
                />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default StatsCards;