import {Star,Clock3,Users,Bell} from "lucide-react";
import {useAuth} from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import {
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";

function StatsCards() {
  const [averageRating,setAverageRating]=useState(0);
  const [acceptedSwaps,setAcceptedSwaps]=useState(0);
  const [unreadNotifications,setUnreadNotifications]=useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);
  const {userProfile}=useAuth();

  useEffect(()=>{
    if(!userProfile) return;
    const fetchAverageRating=async()=>{
        const q=query(
            collection(db,"reviews"),
            where("toUser","==",userProfile.uid)
        );
        const snapshot=await getDocs(q);
        if(snapshot.empty){
            setAverageRating(0);
            return;
        }
        let total=0;
        snapshot.forEach((doc)=>{
            total+=doc.data().rating;
        });
        const average=total/snapshot.size;
        setAverageRating(average.toFixed(1));
    };
    fetchAverageRating();
},[userProfile]);

  useEffect(()=>{
    if(!userProfile) return;
    const fetchAcceptedSwaps=async()=>{
        const sentQuery=query(
            collection(db,"swapRequests"),
            where("fromUser","==",userProfile.uid),
            where("status","==","accepted")
        );
        const receivedQuery=query(
            collection(db,"swapRequests"),
            where("toUser","==",userProfile.uid),
            where("status","==","accepted")
        );
        const sentSnapshot=await getDocs(sentQuery);
        const receivedSnapshot=await getDocs(receivedQuery);
        setAcceptedSwaps(
            sentSnapshot.size+
            receivedSnapshot.size
        );
    };
    fetchAcceptedSwaps();
},[userProfile]);

  useEffect(() => {
    if (!userProfile) return;
    const fetchPendingRequests = async () => {
        const q = query(
            collection(db, "swapRequests"),
            where("toUser", "==", userProfile.uid),
            where("status", "==", "pending")
        );
        const snapshot = await getDocs(q);
        setPendingRequests(snapshot.size);
    };
    fetchPendingRequests();
}, [userProfile]);

  useEffect(()=>{
    if(!userProfile) return;
    const fetchUnreadNotifications=async()=>{
        const q=query(
            collection(db,"notifications"),
            where("userId","==",userProfile.uid),
            where("isRead","==",false)
        );
        const snapshot=await getDocs(q);
        setUnreadNotifications(snapshot.size);
    };
    fetchUnreadNotifications();
},[userProfile]);

const stats=[
{
    title:"Average Rating",
    value:averageRating,
    icon:Star,
},
{
    title:"Accepted Swaps",
    value:acceptedSwaps,
    icon:Users,
},
{
    title:"Pending Requests",
    value:pendingRequests,
    icon:Clock3,
},
{
    title:"Unread Notifications",
    value:unreadNotifications,
    icon:Bell,
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