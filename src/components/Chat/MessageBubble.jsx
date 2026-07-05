// it display one chat, the "mine" prop determine whether the msg belongs to current user, mine=true(right side), mine=false(left side)

function MessageBubble({ text, mine }) {
  return (
    <div
      className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-md rounded-2xl px-5 py-3 text-white ${
            mine
            ? "rounded-br-md bg-blue-500"
            : "rounded-bl-md bg-white/10"
        }`}>
        <p>{text}</p>
        <p className="mt-2 text-right text-xs text-slate-300">
          10:45 AM
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;