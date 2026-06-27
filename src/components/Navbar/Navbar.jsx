// create navbar and then export navbar to every other page it requires
// React provides many built-in functions called Hooks, usestate is one of them and It allows your component to remember values
// menu and x are icons
// initially ismenuopen contains false and setismenuopen changes it to true when clicked [current val,function to change it]
// The key helps React identify each item efficiently

import {useState} from "react";
import {Menu,X} from "lucide-react";
import {Button} from "@/components/ui/button";

function Navbar(){
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const navLinks=[
        "How It Works",
        "Skills",
        "Login",
    ];

    return(
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#081E4C]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="cursor-pointer text-3xl font-extrabold tracking-tight text-blue-400">
          SkillSwap
        </h1>

        <ul className="hidden items-center gap-8 text-lg font-medium text-white md:flex">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer transition hover:text-blue-400">
              {link}
            </li>
          ))}

          <Button  className="h-12 rounded-xl bg-blue-500 px-7 text-base font-semibold text-white hover:bg-blue-600">Sign Up</Button>
        </ul>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="space-y-5 border-t border-white/10 bg-[#081E4C] px-6 py-6 text-white md:hidden">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer transition hover:text-blue-400">
              {link}
            </p>
          ))}

          <Button className="h-12 rounded-xl !bg-blue-500 px-7 text-base font-semibold text-white hover:!bg-blue-600">
            Sign Up
          </Button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;