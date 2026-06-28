import {motion} from "framer-motion";
import {Card,CardContent} from "../../components/ui/card";
import {Users,Brain,Globe,ShieldCheck,} from "lucide-react";

const features=[
    {
        icon:Users,
        title:"Community Driven",
        description:"Learn directly from passionate people instead of watching endless videos.",
    },
    {
        icon:Brain,
        title:"Learn by Teaching",
        description:"Teaching someone else strengthens your own understanding and confidence.",
    },
    {
        icon:Globe,
        title:"Globe Network",
        description:"Connect with learners and mentors from anywhere in the world.",
    },
    {
        icon:ShieldCheck,
        title:"Verified Profiles",
        description:"Ratings, reviews and verified accounts create a safe learning environment.",
    },
];
function WhySkillSwap(){
    return(
        <section className="bg-[#1E3575] py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.h2
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5}}
                viewport={{once:true}}
                className="mb-5 text-center text-5xl font-extrabold text-white">
                    Why Choose SkillSwap?
                </motion.h2>

                <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-slate-300">
                    SkillSwap isn't just another learning platform.
                    It's a community where everyone teaches,
                    everyone learns, and everyone grows.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {features.map((feature,index)=>{
                        const Icon=feature.icon;
                        return(
                            <motion.div
                            key={feature.title}
                            initial={{opacity:0,y:30}}
                            whileInView={{opacity:1,y:0}}
                            transition={{delay:index*0.15}}
                            viewport={{once:true}}>
                                <Card className="h-full border-blue-400/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
                                <CardContent className="flex gap-5 p-8">
                                    <div className="rounded-2xl bg-blue-500/20 p-4 text-blue-400">
                                    <Icon size={32}/>
                                    </div>

                                    <div>
                                    <h3 className="mb-3 text-2xl font-bold text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="leading-7 text-slate-300">
                                        {feature.description}
                                    </p>
                                    </div>
                                </CardContent>
                                </Card>"
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default WhySkillSwap;