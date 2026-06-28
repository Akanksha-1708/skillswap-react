import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Music, Palette, Languages, Camera, Briefcase } from "lucide-react";

const skills = [
  {
    title: "Programming",
    icon: Code2,
    learners: "3.2k Learners",
  },
  {
    title: "Music",
    icon: Music,
    learners: "1.8k Learners",
  },
  {
    title: "Design",
    icon: Palette,
    learners: "2.5k Learners",
  },
  {
    title: "Languages",
    icon: Languages,
    learners: "2.1k Learners",
  },
  {
    title: "Photography",
    icon: Camera,
    learners: "900+ Learners",
  },
  {
    title: "Business",
    icon: Briefcase,
    learners: "1.3k Learners",
  },
];

function PopularSkills() {
  return (
    <section className="bg-[#243C82] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-extrabold text-white">
          Popular Skills
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-300">
          Discover the most popular skills students are exchanging on SkillSwap.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="group border-blue-400/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20">

                  <CardContent className="flex flex-col items-center py-10">

                    <div className="mb-6 rounded-full bg-blue-500/20 p-5 text-blue-400 transition group-hover:scale-110">
                      <Icon size={36} />
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {skill.title}
                    </h3>

                    <p className="text-slate-300">
                      {skill.learners}
                    </p>

                  </CardContent>

                </Card>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default PopularSkills;