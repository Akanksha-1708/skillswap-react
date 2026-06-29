import { Button } from "@/components/ui/button";

function CTA() {
  return (
 <section className="bg-[#0E214F] py-24">
  <div className="mx-auto max-w-7xl px-6">

  <div className="rounded-3xl border border-blue-400/20 bg-white/5 backdrop-blur-xl p-16 text-center">

    <h2 className="text-5xl font-bold text-white">
      Ready to Start Learning?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
      Join thousands of learners exchanging knowledge every day.
    </p>

    <Button
      className="mt-10 h-14 rounded-xl bg-blue-500 px-10 text-lg font-semibold hover:bg-blue-600"
      size="lg"
    >
      Join SkillSwap
    </Button>

  </div>
  </div>

</section>
  );
}

export default CTA;