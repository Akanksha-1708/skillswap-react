import { Card, CardContent } from "@/components/ui/card";

function StatsCard({ icon, number, label }) {
  return (
    <Card className="w-44 border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10">

      <CardContent className="flex flex-col items-center gap-3 py-6">

        <div className="rounded-full bg-blue-500/20 p-3 text-blue-400">
          {icon}
        </div>

        <h3 className="text-3xl font-bold text-white">
          {number}
        </h3>

        <p className="text-center text-blue-100">
          {label}
        </p>

      </CardContent>

    </Card>
  );
}

export default StatsCard;