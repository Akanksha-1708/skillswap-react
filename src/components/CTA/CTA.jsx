import { Button } from "@/components/ui/button";

function CTA() {
  return (
<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/30 to-blue-900/30 p-16 text-center backdrop-blur-xl">

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

</section>
  );
}

export default CTA;