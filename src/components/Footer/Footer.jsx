import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08152F]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            SkillSwap
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Learn. Teach. Grow.
            <br />
            Exchange skills with passionate learners
            across the globe.
          </p>
        </div>

        
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li className="cursor-pointer transition hover:text-blue-400">
              Home
            </li>

            <li className="cursor-pointer transition hover:text-blue-400">
              Skills
            </li>

            <li className="cursor-pointer transition hover:text-blue-400">
              About
            </li>

            <li className="cursor-pointer transition hover:text-blue-400">
              Contact
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Resources
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li className="cursor-pointer transition hover:text-blue-400">
              FAQ
            </li>

            <li className="cursor-pointer transition hover:text-blue-400">
              Privacy Policy
            </li>

            <li className="cursor-pointer transition hover:text-blue-400">
              Terms & Conditions
            </li>

            <li className="cursor-pointer transition hover:text-blue-400">
              Support
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Connect
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-500">
              <FaGithub size={22} className="text-white" />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-500">
              <FaLinkedin size={22} className="text-white" />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-500">
              <FaXTwitter size={22} className="text-white" />
            </a>

            <a
              href="mailto:example@gmail.com"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-500">
              <Mail size={22} className="text-white" />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-slate-400">
        © 2026 SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;