import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";

import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

function TaskBoard({ workspaceId }) {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "workspaceTasks"),
            where("workspaceId", "==", workspaceId)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            data.sort((a,b)=>{
                if(a.completed===b.completed)return 0;
                return a.completed?1:-1;
            });
            setTasks(data);
        });
        return () => unsubscribe();
    }, [workspaceId]);

    const addTask = async () => {
        if (!task.trim()) return;
        await addDoc(
            collection(db, "workspaceTasks"),
            {
                workspaceId,
                task,
                completed: false,
                createdAt: serverTimestamp(),
            }
        );
        setTask("");
    };

    const toggleTask=async(taskId,completed)=>{
        await updateDoc(
            doc(db,"workspaceTasks",taskId),
            {completed:!completed,}
        );
    };

    const deleteTask=async(taskId)=>{
        const confirmed=window.confirm(
            "Delete this task permanently?"
        );
        if(!confirmed)return;
        await deleteDoc(
            doc(db,"workspaceTasks",taskId)
        );
    };

    return (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
                Learning Tasks
            </h2>
            <p className="mt-2 text-slate-300">
                Track homework and learning goals together.
            </p>
            <input
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter new task..."
                className="mt-6 w-full rounded-xl border border-white/10 bg-[#1A2E66] p-4 text-white outline-none"/>

            <button
                onClick={addTask}
                className="mt-5 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
                Add Task
            </button>

            <div className="mt-8 space-y-3">
                {tasks.map((item)=>(
                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                        <div className="flex items-center gap-4">
                       <input
                       type="checkbox"
                       checked={item.completed}
                       onChange={() => toggleTask(item.id, item.completed)}
                       className="h-5 w-5 cursor-pointer"/>

                        <span
                        className={`text-white ${
                        item.completed
                        ? "line-through text-slate-400"
                        : ""
                        }`}>
                        {item.task}
                        </span>

                    </div>

                    <button
                    onClick={() => deleteTask(item.id)}
                    className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600">
                    Delete
                    </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskBoard;