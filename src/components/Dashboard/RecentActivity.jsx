import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/firebase";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { formatDistanceToNow } from "date-fns";

function RecentActivity() {
  const { userProfile } = useAuth();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (!userProfile) return;

    const fetchActivities = async () => {
      const q = query(
        collection(db, "swapRequests"),
        where("toUser", "==", userProfile.uid),
        orderBy("createdAt", "desc"),
        limit(5)
      );

      const snapshot = await getDocs(q);

      const activityList = await Promise.all(
        snapshot.docs.map(async (docSnapshot) => {
          const data = docSnapshot.data();

          const senderDoc = await getDoc(
            doc(db, "users", data.fromUser)
          );

          const senderName = senderDoc.exists()
            ? senderDoc.data().fullName
            : "Someone";

          return {
            id: docSnapshot.id,
            senderName,
            ...data,
          };
        })
      );

      setActivities(activityList);
    };

    fetchActivities();
  }, [userProfile]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-white">
        Recent Activity
      </h2>

      <p className="mt-2 text-slate-300">
        Keep track of your latest progress.
      </p>

      <div className="mt-8 space-y-5">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-blue-500/20 p-3">
                <Clock
                  size={24}
                  className="text-blue-400"
                />
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {activity.status === "accepted"
                    ? "Skill Swap Accepted"
                    : "New Skill Swap Request"}
                </h3>

                <p className="text-sm text-slate-300">
                  {activity.status === "accepted"
                    ? `${activity.senderName} accepted your request.`
                    : `${activity.senderName} sent you a skill swap request.`}
                </p>

                <p className="text-xs text-slate-400">
                  {activity.createdAt &&
                    formatDistanceToNow(
                      activity.createdAt.toDate(),
                      {
                        addSuffix: true,
                      }
                    )}
                </p>

              </div>

            </div>
          </div>
        ))}

        {activities.length === 0 && (
          <p className="text-center text-slate-400">
            No recent activity yet.
          </p>
        )}

      </div>

    </div>
  );
}

export default RecentActivity;