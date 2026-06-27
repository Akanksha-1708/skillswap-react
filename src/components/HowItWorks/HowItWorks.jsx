import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeIn";

import { Card, CardContent } from "@/components/ui/card";

import {
  UserPlus,
  Handshake,
  MessageCircle,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={36} />,
    title: "Create Profile",
    description: "Show the skills you can teach and what you want to learn.",
  },
  {
    icon: <Handshake size={36} />,
    title: "Find a Match",
    description: "Connect with learners who complement your skills.",
  },
  {
    icon: <MessageCircle size={36} />,
    title: "Exchange Skills",
    description: "Learn together through chat or video sessions.",
  },
  {
    icon: <Trophy size={36} />,
    title: "Grow",
    description: "Earn reviews, ratings and build credibility.",
  },
];

function HowItWorks() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-14 text-center text-5xl font-bold text-white">
        How It Works
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <Card
            key={step.title}
            className="group border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/40 hover:bg-white/10"
          >
            <CardContent className="flex flex-col items-center p-8 text-center">

              <div className="mb-6 rounded-full bg-blue-500/20 p-4 text-blue-400 transition group-hover:scale-110">
                {step.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="leading-7 text-blue-100">
                {step.description}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

export default HowItWorks;