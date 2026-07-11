import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

function ConversationCard({ conversation }) {
  const navigate=useNavigate();
    const { currentUser } = useAuth();
    const [otherUser, setOtherUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            const otherUserId = conversation.participants.find(
                (id) => id !== currentUser.uid
            );
            const docRef = doc(db, "users", otherUserId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setOtherUser({id:otherUserId,...docSnap.data(),});
            }
        };
        fetchUser();
    }, [conversation, currentUser]);
    if (!otherUser) return null;
    return (
        <div 
        onClick={()=>navigate(`/chat/${otherUser.id}`)}
        className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
            <h3 className="text-lg font-semibold text-white">
                {otherUser.fullName}
            </h3>
            <p className="mt-1 truncate text-sm text-slate-300">
                {conversation.lastMessage || "Start a conversation"}
            </p>
        </div>
    );
}

export default ConversationCard;