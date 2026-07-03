// RequestButton creates a new skill swap request between two users.
//
// Why use a separate "swapRequests" collection?
//
// User profiles store personal information.
// Swap requests represent relationships between users.
//
// Keeping requests in a separate collection avoids duplicating data
// and allows one user to send or receive multiple requests.
//
// Flow:
//
// View Profile
//        ↓
// Click "Request Skill Swap"
//        ↓
// addDoc()
//        ↓
// Firestore creates a new request document
//        ↓
// Request status = "pending"
// RequestButton creates a new swap request between two users.
//
// Unlike user profiles, swap requests do not have a predefined ID.
// Therefore we use addDoc(), which lets Firestore automatically
// generate a unique document ID.
// Before creating new req we check if a pending req already exist between the same two users
// TO PREVENT DUPLICATE REQ
// firestore->swaprequest->query()->where(fromuser==currentuser) or (touser==selecteduser) or (status==pending)  getdocs()->existing req?->yes->alert("request already sent") no->adddoc()
import { Button } from "@/components/ui/button";
import { addDoc, collection, serverTimestamp,getDocs,query,where, } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useAuth } from "@/context/AuthContext";

function RequestButton({toUserId}) {
    const {currentUser}=useAuth();
    const handleRequest=async()=>{
        try{
            const q=query(
                collection(db,"swapRequests"),
                where("fromUser","==",currentUser.uid),
                where("toUser","==",toUserId),
                where("status","==","pending")
            );
            const existingRequest=await getDocs(q);
            if(!existingRequest.empty){
                alert("You have already sent a request.");
                return;
            }
            await addDoc(
                collection(db,"swapRequests"),
                {
                    fromUser:currentUser.uid,
                    toUser:toUserId,
                    status:"pending",
                    createdAt:serverTimestamp(),
                }
            );
            alert("Request Sent!");
        }catch(error){
            console.error(error);
        }
    }
  return (
    <Button 
    onClick={handleRequest}
    className="mt-10 h-12 w-full bg-blue-500 hover:bg-blue-600">
      Request Skill Swap
    </Button>
  );
}

export default RequestButton;