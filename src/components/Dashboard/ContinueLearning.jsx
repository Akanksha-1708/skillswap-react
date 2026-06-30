import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    skill: "React",
    progress: "70%",
  },
  {
    id: 2,
    skill: "Python",
    progress: "45%",
  },
  {
    id: 3,
    skill: "Machine Learning",
    progress: "20%",
  },
];

function ContinueLearning() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-white">
        Continue Learning
      </h2>

      <p className="mt-2 text-slate-300">
        Pick up where you left off.
      </p>

      <div className="mt-8 space-y-4">

        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">
                {course.skill}
              </h3>

              <p className="text-slate-400">
                Progress: {course.progress}
              </p>
            </div>

            <Button>
              Continue
            </Button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ContinueLearning;