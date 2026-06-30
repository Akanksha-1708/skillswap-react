import {
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: CheckCircle,
    text: "Completed React Basics skill exchange.",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: Award,
    text: "Earned the Fast Learner badge.",
    time: "Yesterday",
  },
  {
    id: 3,
    icon: Clock,
    text: "Scheduled a Python mentoring session.",
    time: "2 days ago",
  },
];

function RecentActivity() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-white">
        Recent Activity
      </h2>

      <p className="mt-2 text-slate-300">
        Keep track of your latest progress.
      </p>

      <div className="mt-8 space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500/20 p-3">
                  <Icon
                    size={24}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-white">
                    {activity.text}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {activity.time}
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default RecentActivity;