import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";

function SessionPlanner({ workspaceId }) {

    const [topic, setTopic] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [meetingLink, setMeetingLink] = useState("");
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "workspaceSessions"),
            where("workspaceId", "==", workspaceId)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setSessions(data);
        });
        return () => unsubscribe();
    }, [workspaceId]);
    const addSession = async () => {
        if (!topic || !date || !time || !meetingLink) return;
        await addDoc(
            collection(db, "workspaceSessions"),
            {
                workspaceId,
                topic,
                date,
                time,
                meetingLink,
                createdAt: serverTimestamp(),
            }
        );
        setTopic("");
        setDate("");
        setTime("");
        setMeetingLink("");
    };

    return (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
                Session Planner
            </h2>
            <p className="mt-2 text-slate-300">
                Schedule your upcoming learning sessions.
            </p>
            <input
                type="text"
                placeholder="Session Topic"
                value={topic}
                onChange={(e)=>setTopic(e.target.value)}
                className="mt-6 w-full rounded-xl border border-white/10 bg-[#1A2E66] p-4 text-white outline-none"/>

            <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="mt-4 w-full rounded-xl border border-white/10 bg-[#1A2E66] p-4 text-white outline-none"/>

            <input
                type="time"
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                className="mt-4 w-full rounded-xl border border-white/10 bg-[#1A2E66] p-4 text-white outline-none"/>

            <input
                type="text"
                placeholder="Meeting Link"
                value={meetingLink}
                onChange={(e)=>setMeetingLink(e.target.value)}
                className="mt-4 w-full rounded-xl border border-white/10 bg-[#1A2E66] p-4 text-white outline-none"/>

            <button
                onClick={addSession}
                className="mt-6 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
                Schedule Session
            </button>

            <div className="mt-8 space-y-4">
                {sessions.map((session)=>(
                    <div
                        key={session.id}
                        className="rounded-xl bg-white/5 p-5">

                        <h3 className="text-xl font-semibold text-white">
                            {session.topic}
                        </h3>
                        <p className="mt-2 text-slate-300">
                            {session.date} • {session.time}
                        </p>

                        <a
                            href={session.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-blue-400 hover:underline">
                            Join Meeting
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SessionPlanner;