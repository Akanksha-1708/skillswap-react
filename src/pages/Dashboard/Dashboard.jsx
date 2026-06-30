import WelcomeCard from "@/components/Dashboard/WelcomeCard";
import ProfileProgress from "@/components/Dashboard/ProfileProgress";
import StatsCards from "@/components/Dashboard/StatsCards";
import RecommendedMatches from "@/components/Dashboard/RecommendedMatches";
import ContinueLearning from "@/components/Dashboard/ContinueLearning";
import RecentActivity from "@/components/Dashboard/RecentActivity";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081E4C] via-[#233E88] to-[#475793] px-6 py-10">

      <div className="mx-auto max-w-7xl space-y-8">

        <WelcomeCard />

        <ProfileProgress />

        <StatsCards />

        <RecommendedMatches />

        <ContinueLearning />

        <RecentActivity />

      </div>

    </div>
  );
}

export default Dashboard;