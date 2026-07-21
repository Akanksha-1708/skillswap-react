import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

import {
    collection,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";

function WorkspaceStats({ workspaceId }) {

    const [stats, setStats] = useState({
        notes: 0,
        resources: 0,
        tasks: 0,
        completed: 0,
        sessions: 0,
    });

    useEffect(() => {
        const unsubscribers = [];
        const collections = [
            { name: "workspaceNotes", key: "notes" },
            { name: "workspaceResources", key: "resources" },
            { name: "workspaceTasks", key: "tasks" },
            { name: "workspaceSessions", key: "sessions" },
        ];
        collections.forEach(({ name, key }) => {
            const q = query(
                collection(db, name),
                where("workspaceId", "==", workspaceId)
            );
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setStats(prev => {
                    const updated = {
                        ...prev,
                        [key]: snapshot.size,
                    };
                    if (key === "tasks") {
                        updated.completed =
                            snapshot.docs.filter(
                                doc => doc.data().completed
                            ).length;
                    }
                    return updated;
                });
            });
            unsubscribers.push(unsubscribe);
        });
        return () => {
            unsubscribers.forEach(unsub => unsub());
        };
    }, [workspaceId]);

    const progress =
        stats.tasks === 0
            ? 0
            : Math.round(
                (stats.completed / stats.tasks) * 100
            );
    return (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
                Workspace Statistics
            </h2>
            <div className="mt-6 space-y-3 text-lg text-white">
                <p>📝 Notes: {stats.notes}</p>
                <p>📚 Resources: {stats.resources}</p>
                <p>📋 Tasks: {stats.tasks}</p>
                <p>✅ Completed Tasks: {stats.completed}</p>
                <p>📅 Sessions: {stats.sessions}</p>
                <p className="font-semibold text-green-400">
                    📈 Progress: {progress}%
                </p>
            </div>
        </div>
    );
}

export default WorkspaceStats;