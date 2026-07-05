function ConversationCard() {
  return (
    <div className="cursor-pointer rounded-2xl border border-transparent bg-white/5 p-4 transition hover:border-blue-500 hover:bg-white/10">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
          R
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">
            Rahul Sharma
          </h3>
          <p className="text-sm text-slate-300">
            Hey! Are you free tomorrow?
          </p>
        </div>
      </div>
    </div>
  );
}
export default ConversationCard;