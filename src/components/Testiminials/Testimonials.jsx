import {motion} from "framer-motion";
import {Card,CardContent} from "../../components/ui/card";
import {Star} from "lucide-react";

const testimonials=[
    {
        name:"Aarav Sharma",
        role:"Frontend Developer",
        review:"SkillSwap helped me improve my UI Design skills while teaching JavaScript to others. The experience has been amazing.",
    },
    {
        name: "Priya Verma",
        role: "UI/UX Designer",
        review:"I found incredible mentors and made genuine connections. The platform feels like a community rather than a course website.",
    },
    {
        name: "Rahul Singh",
        role: "Data Science Student",
        review:"Instead of paying for multiple courses, I exchanged my Python skills for Machine Learning guidance.",
    },
];
 function Testimonials(){
    return(
        <section className="bg-[#182C66] py-28">
        <div className="mx-auto max-w-7xl px-6">

        <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        viewport={{once:true}}
        className="mb-5 text-center text-5xl font-extrabold text-white">
        What Our Learners Say 
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-300">
        Thousands of learners are already exchanging skills and growing together.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((person,index)=>(
            <motion.div
            key={person.name}
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:index*0.15}}
            viewport={{once:true}}>

                <Card className="h-full border-blue-400/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
                <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-4 flex text-yellow-400">
                        {[...Array(5)].map((_,i)=>(
                            <Star
                            key={i}
                            size={18}
                            fill="currentColor"/>
                        ))}
                    </div>

                    <p className="mb-8 leading-7 text-slate-300">
                        "{person.review}"
                    </p>

                    <div className="mt-auto">
                        <h3 className="text-xl font-bold text-white">
                            {person.name}
                        </h3>

                        <p className="text-blue-300">
                            {person.role}
                        </p>
                    </div>
                </CardContent>
                </Card>
            </motion.div>
        ))}

        </div>
        </div>
        </section>
    );
 }
 export default Testimonials;