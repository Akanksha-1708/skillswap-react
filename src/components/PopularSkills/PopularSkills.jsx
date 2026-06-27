import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeIn";

import { Card, CardContent } from "@/components/ui/card";

import {
  Code2,
  Music,
  Palette,
  Languages,
  Camera,
  Briefcase,
} from "lucide-react";

const skills = [
  {
    icon: <Code2 size={34} />,
    name: "Programming",
  },
  {
    icon: <Palette size={34} />,
    name: "UI / UX Design",
  },
  {
    icon: <Music size={34} />,
    name: "Music",
  },
  {
    icon: <Languages size={34} />,
    name: "Languages",
  },
  {
    icon: <Briefcase size={34} />,
    name: "Business",
  },
  {
    icon: <Camera size={34} />,
    name: "Photography",
  },
];

function PopularSkills() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-14 text-center text-5xl font-bold text-white">
        Popular Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="group cursor-pointer border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
          >
            <CardContent className="flex items-center gap-5 p-6">

              <div className="rounded-xl bg-blue-500/20 p-4 text-blue-400 transition-all group-hover:scale-110">
                {skill.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>

                <p className="text-blue-200">
                  Explore learners
                </p>
              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </motion.section>
  );
}

export default PopularSkills;