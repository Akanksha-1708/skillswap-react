import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import SharedNotes from "@/components/LearningWorkspace/SharedNotes";
import SharedResources from "@/components/LearningWorkspace/SharedResources";
import TaskBoard from "@/components/LearningWorkspace/TaskBoard";
import SessionPlanner from "@/components/LearningWorkspace/SessionPlanner";
import ProgressTracker from "@/components/LearningWorkspace/ProgressTracker";
import WorkspaceStats from "@/components/LearningWorkspace/WorkspaceStats";
import ActivityFeed from "@/components/LearningWorkspace/ActivityFeed";

function LearningWorkspace() {
    const { workspaceId } = useParams();
    const [workspace, setWorkspace] = useState(null);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchWorkspace = async () => {
            const workspaceRef = doc(
                db,
                "learningWorkspaces",
                workspaceId
            );
            const workspaceSnap = await getDoc(workspaceRef);
            if (workspaceSnap.exists()) {
                setWorkspace({
                    id: workspaceSnap.id,
                    ...workspaceSnap.data(),
                });

                const workspaceData = workspaceSnap.data();
                const participantProfiles = await Promise.all(
                workspaceData.participants.map(async (uid) => {
                const userSnap = await getDoc(doc(db, "users", uid));
                if (userSnap.exists()) {
                return userSnap.data();
                }
                return null;
                })
                );

                setParticipants(
                participantProfiles.filter(Boolean)
                );
            }
        };
        fetchWorkspace();
    }, [workspaceId]);
    if (!workspace) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793]">
                <h1 className="text-3xl text-white">
                    Loading Workspace...
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793] px-6 py-10">
            <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
                <h1 className="text-5xl font-bold text-white">
                    Learning Workspace
                </h1>
                <p className="mt-6 text-slate-300">
                    Workspace ID
                </p>
                <div className="mt-2 rounded-xl bg-[#1A2E66] p-4 text-blue-300">
                    {workspace.id}
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white">
                        Participants
                    </h2>
                    <div className="mt-4 space-y-3">
                        {participants.map((user)=>(
                            <div 
                            key={user.uid}
                            className="rounded-xl bg-white/5 p-4">
                                <h3 className="text-lg font-semibold text-white">
                                    {user.fullName}
                                </h3>
                                <p className="text-sm text-slate-300">
                                    {user.email}
                                </p>
                            </div>
                            ))}
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white">
                        Sender Teaching Skills
                    </h2>
                    <p className="mt-3 text-slate-300">
                        {workspace.senderTeachingSkills.join(", ")}
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white">
                        Receiver Teaching Skills
                    </h2>
                    <p className="mt-3 text-slate-300">
                        {workspace.receiverTeachingSkills.join(", ")}
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white">
                        Status
                    </h2>
                    <span className="mt-3 inline-block rounded-full bg-green-500 px-5 py-2 font-semibold text-white">
                        {workspace.status}
                    </span>
                </div>

                <ActivityFeed workspaceId={workspace.id}/>
                <SharedNotes workspaceId={workspace.id}/>
                <SharedResources workspaceId={workspace.id}/>
                <TaskBoard workspaceId={workspace.id}/>
                <SessionPlanner workspaceId={workspace.id}/>
                <ProgressTracker workspaceId={workspace.id} />
                <WorkspaceStats workspaceId={workspace.id} />
            </div>
        </div>
    );
}

export default LearningWorkspace;