import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export async function addActivity({
    workspaceId,
    userId,
    userName,
    type,
    message,
}) {
    console.log("Logging activity...");
    try {
        await addDoc(
            collection(db, "workspaceActivities"),
            {
                workspaceId,
                userId,
                userName,
                type,
                message,
                createdAt: serverTimestamp(),
            }
        );
        console.log("Activity added successfully");
    } catch (error) {
        console.error("Activity failed:", error);
    }
}