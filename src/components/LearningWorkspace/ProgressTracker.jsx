import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

import {
    collection,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";

function ProgressTracker({ workspaceId }) {

    const [totalTasks, setTotalTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    useEffect(() => {
        const q = query(
            collection(db, "workspaceTasks"),
            where("workspaceId", "==", workspaceId)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tasks = snapshot.docs.map(doc => doc.data());
            const total = tasks.length;
            const completed = tasks.filter(
                task => task.completed
            ).length;
            setTotalTasks(total);
            setCompletedTasks(completed);
        });
        return () => unsubscribe();
    }, [workspaceId]);
    const percentage =
        totalTasks === 0
            ? 0
            : Math.round((completedTasks / totalTasks) * 100);

    return (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
                Learning Progress
            </h2>
            <p className="mt-3 text-slate-300">
                {completedTasks} / {totalTasks} Tasks Completed
            </p>
            <div className="mt-6 h-4 w-full rounded-full bg-slate-700">
                <div
                    className="h-4 rounded-full bg-green-500 transition-all duration-500"
                    style={{
                        width: `${percentage}%`,
                    }}/>
            </div>
            <p className="mt-4 text-xl font-semibold text-green-400">
                {percentage}% Complete
            </p>
        </div>
    );
}

export default ProgressTracker;