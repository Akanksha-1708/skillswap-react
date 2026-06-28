import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is SkillSwap completely free?",
    answer:
      "Yes. SkillSwap is built around exchanging skills instead of paying money.",
  },
  {
    question: "Can I teach more than one skill?",
    answer:
      "Absolutely! You can list multiple skills you can teach as well as multiple skills you want to learn.",
  },
  {
    question: "How are learners matched?",
    answer:
      "SkillSwap recommends users whose teaching skills match your learning goals.",
  },
  {
    question: "Will I receive certificates?",
    answer:
      "Certificates and achievement badges can be earned after completing verified skill exchanges.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#142654] py-28">
      <div className="mx-auto max-w-4xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-5xl font-bold text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="mb-16 text-center text-lg text-slate-300">
          Everything you need to know about SkillSwap.
        </p>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {openIndex === index && (

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-slate-300"
                >
                  {faq.answer}
                </motion.div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;