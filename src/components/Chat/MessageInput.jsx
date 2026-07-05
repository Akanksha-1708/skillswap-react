// it is for composing and sending chat msg

import { Button } from "@/components/ui/button";

function MessageInput({message,setMessage,handleSend}) {

  return (
    <div className="border-t border-white/10 p-6">
      <div className="flex gap-4">
        <input
          type="text"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400" />
        <Button 
        onClick={handleSend}
        className="h-12 rounded-xl bg-blue-500 px-8 font-semibold text-white hover:bg-blue-600">
          Send
        </Button>
      </div>
    </div>
  );
}

export default MessageInput;