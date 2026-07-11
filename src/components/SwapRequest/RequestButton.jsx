// RequestButton creates a new skill swap request between two users.
//
// Why use a separate "swapRequests" collection?
//
// User profiles store personal information.
// Swap requests represent relationships between users.
//
// Keeping requests in a separate collection avoids duplicating data
// and allows one user to send or receive multiple requests.

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/firebase";

import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    doc,
    getDoc,
} from "firebase/firestore";

function RequestButton({ toUserId }) {
    const { currentUser } = useAuth();
    const handleRequest = async () => {
        try {
            const q = query(
                collection(db, "swapRequests"),
                where("fromUser", "==", currentUser.uid),
                where("toUser", "==", toUserId),
                where("status", "==", "pending")
            );
            const existingRequest = await getDocs(q);
            if (!existingRequest.empty) {
                alert("You have already sent a request.");
                return;
            }
            await addDoc(
                collection(db, "swapRequests"),
                {
                    fromUser: currentUser.uid,
                    toUser: toUserId,
                    status: "pending",
                    createdAt: serverTimestamp(),
                }
            );
            const senderDoc = await getDoc(
                doc(db, "users", currentUser.uid)
            );
            console.log("Current UID:", currentUser.uid);
            console.log("Document Exists:", senderDoc.exists());
            if (senderDoc.exists()) {
                console.log(senderDoc.data());
            }
            const senderName = senderDoc.exists()
                ? senderDoc.data().fullName
                : "Someone";
            await addDoc(
                collection(db, "notifications"),
                {
                    userId: toUserId,
                    type: "request",
                    title: "New Skill Swap Request",
                    message: `${senderName} sent you a skill swap request.`,
                    isRead: false,
                    createdAt: serverTimestamp(),
                    link: "/requests",
                }
            );
            alert("Request Sent!");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Button
            onClick={handleRequest}
            className="mt-10 h-12 w-full bg-blue-500 hover:bg-blue-600">
            Request Skill Swap
        </Button>
    );
}

export default RequestButton;