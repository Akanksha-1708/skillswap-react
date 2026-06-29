import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Newsletter() {
  return (
    <section className="bg-[#081E4C] py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
          <Mail className="text-blue-400" size={30} />
        </div>

        <h2 className="text-4xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Receive updates about new skills, learning opportunities,
          and exciting SkillSwap features.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-96"
          />

          <Button
            className="h-14 rounded-xl bg-blue-500 px-8 text-lg font-semibold hover:bg-blue-600"
          >
            Subscribe
          </Button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;