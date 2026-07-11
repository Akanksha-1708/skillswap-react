// Chat is the central messaging page of SkillSwap.
// Firebase Firestore provides real-time updates using onSnapshot(),allowing messages to appear instantly without refreshing.
// Flow:
// URL -> userId -> find conversation -> conversationId -> load messages
// orderBy() ensures messages are displayed chronologically.
// return () => unsubscribe() is a cleanup function that stops listening when the component unmounts.

import ConversationCard from "@/components/Chat/ConversationCard";
import MessageBubble from "@/components/Chat/MessageBubble";
import MessageInput from "@/components/Chat/MessageInput";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { useAuth } from "@/context/AuthContext";
import {doc,getDoc,addDoc,collection,getDocs,onSnapshot,orderBy,query,serverTimestamp,updateDoc,where,} from "firebase/firestore";

function Chat() {
  const { userId } = useParams();
  const { currentUser } = useAuth();

  const [receiver,setReceiver]=useState(null);
  const [conversationId,setConversationId]=useState(null);
  const [message,setMessage]=useState("");
  const [messages,setMessages]=useState([]);
  const [conversations,setConversations]=useState([]);

  const handleSend=async()=>{
    if(!message.trim()) return;
    if(!conversationId) return;

    await addDoc(
      collection(db,"messages"),
      {
        conversationId,
        senderId:currentUser.uid,
        text:message,
        createdAt:serverTimestamp(),
      }
    );

    await updateDoc(
      doc(db,"conversations",conversationId),
      {
        lastMessage:message,
        updatedAt:serverTimestamp(),
      }
    );

    setMessage("");
  };

  useEffect(()=>{
    if(!currentUser) return;

    const fetchConversation=async()=>{
      const q=query(
        collection(db,"conversations"),
        where("participants","array-contains",currentUser.uid)
      );

      const snapshot=await getDocs(q);

      let foundConversation=null;

      snapshot.forEach((conversationDoc)=>{
        const data=conversationDoc.data();

        if(data.participants.includes(userId)){
          foundConversation=conversationDoc.id;
        }
      });

      setConversationId(foundConversation);
    };

    fetchConversation();
  },[userId,currentUser]);

  useEffect(()=>{
    if(!conversationId) return;

    const q=query(
      collection(db,"messages"),
      where("conversationId","==",conversationId),
      orderBy("createdAt")
    );

    const unsubscribe=onSnapshot(q,(snapshot)=>{
      const messageList=snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data(),
      }));

      setMessages(messageList);
    });

    return()=>unsubscribe();
  },[conversationId]);

  useEffect(()=>{
    const fetchReceiver=async()=>{
      const docRef=doc(db,"users",userId);
      const docSnap=await getDoc(docRef);

      if(docSnap.exists()){
        setReceiver(docSnap.data());
      }
    };

    fetchReceiver();
  },[userId]);

  useEffect(()=>{
    if(!currentUser) return;

    const q=query(
      collection(db,"conversations"),
      where("participants","array-contains",currentUser.uid)
    );

    const unsubscribe=onSnapshot(q,(snapshot)=>{
      const conversationList=snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data(),
      }));

      setConversations(conversationList);
    });

    return()=>unsubscribe();
  },[currentUser]);

  return(
    <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793] p-6">
      <div className="mx-auto flex h-[85vh] max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <div className="w-80 border-r border-white/10">
          <h2 className="p-6 text-3xl font-bold text-white">
            Chats
          </h2>

          <div className="space-y-2 px-4">
            {conversations.map((conversation)=>(
              <ConversationCard
                key={conversation.id}
                conversation={conversation}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col">

          <div className="flex items-center gap-4 border-b border-white/10 p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
              {receiver?.fullName?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                {receiver?.fullName}
              </h2>

              <p className="text-sm text-green-400">
                ● Online
              </p>
            </div>

          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((msg)=>(
              <MessageBubble
                key={msg.id}
                text={msg.text}
                mine={msg.senderId===currentUser.uid}
              />
            ))}
          </div>

          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />

        </div>

      </div>
    </div>
  );
}

export default Chat;