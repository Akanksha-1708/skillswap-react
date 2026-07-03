
function SearchBar({
    searchTerm,
    setSearchTerm,
}) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      placeholder="Search by skill..."
      className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-blue-500"
    />
  );
}

export default SearchBar;