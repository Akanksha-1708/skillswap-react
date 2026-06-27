// create navbar and then export navbar to every other page it requires


function Navbar(){
    return(
        <nav className="w-full bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-3xl font-bold text-blue-400">
        SkillSwap
        </h1>

        <ul className="flex items-center gap-8 font-medium text-slate-200">
        <li>How it works</li>
        <li>Skills</li>
        <li>Login</li>
        
        <button className="rounded-xl bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600">
        Sign up
        </button>
        </ul>
        </div>
        </nav>
    );
}
export default Navbar;