import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {collection,onSnapshot,query,where,doc,updateDoc} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function NotificationBell() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (!currentUser) return;
        const q = query(
            collection(db, "notifications"),
            where("userId", "==", currentUser.uid),
            where("isRead", "==", false)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setCount(snapshot.size);
            const notificationList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNotifications(notificationList);
        });
        return () => unsubscribe();
    }, [currentUser]);
    const handleNotificationClick = async (notification) => {
        await updateDoc(
            doc(db, "notifications", notification.id),
            {
                isRead: true,
            }
        );
        setIsOpen(false);
        navigate(notification.link);
    };
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative rounded-full p-2 transition hover:bg-white/10" >
                <Bell className="h-6 w-6 text-white" />
                {count > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {count}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-3 w-96 rounded-2xl border border-white/10 bg-[#081E4C] p-5 shadow-2xl">
                    <h2 className="mb-4 text-xl font-bold text-white">
                        Notifications
                    </h2>
                    {notifications.length === 0 ? (
                        <p className="text-slate-300">
                            No notifications yet.
                        </p>
                    ) : (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                onClick={() => handleNotificationClick(notification)}
                                className="mb-3 cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                                <h3 className="font-semibold text-white">
                                    {notification.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-300">
                                    {notification.message}
                                </p>
                                <p className="mt-2 text-xs text-slate-400">
                                    {notification.createdAt &&
                                        formatDistanceToNow(
                                            notification.createdAt.toDate(),
                                            {
                                                addSuffix: true,
                                            }
                                        )}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
export default NotificationBell;