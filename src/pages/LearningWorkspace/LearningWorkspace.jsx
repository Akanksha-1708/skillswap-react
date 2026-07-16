import {useParams} from "react-router-dom";
function LearningWorkspace(){
    const {workspaceId}=useParams();
    return(
        <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793] px-6 py-10">
            <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h1 className="text-5xl font-bold text-white">
                Learning Workspace 
            </h1>
            <p className="mt-4 text-sslate-300">
                Workspace ID
            </p>
            <p className="mt-2 rounded-xl bg-black/20 p-4 font-mono text-blue-300">
            {workspaceId}
            </p>
            </div>
        </div>
    )
}
export default LearningWorkspace;