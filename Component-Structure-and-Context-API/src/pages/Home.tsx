import { Button, ButtonType } from "../components/Button";
import type { CardsProps } from "../components/QuickAccess";
import QuickAccess from "../components/QuickAccess";
import type { QuickActionProps } from "../components/QuickAction";
import QuickAction from "../components/QuickAction";
import type { HighlightProps } from "../components/RecentHighlights";
import RecentHighlights from "../components/RecentHighlights";
import { useAuth } from "../context/auth/useAuth";

const Home = () => {
    const {user, logout} = useAuth();

    const QuickAccessCards: CardsProps[] = [
        { icon: '🎯', title: "Today's Goal", desc: "Continue your learning streak" },
        { icon: '🔥', title: "Trending", desc: "Most popular this week" },
        { icon: '✨', title: "For You", desc: "Personalized recommendations" }
      ]

    const QuickActionCards: QuickActionProps[] =[
          { icon: '✏️', label: "Add New Note", action: () => console.log("New note") },
          { icon: '📅', label: "Schedule Event", action: () => console.log("Schedule") },
          { icon: '🔄', label: "Sync Devices", action: () => console.log("Sync") }
        ]

    const RecentHighlightCards: HighlightProps[] = [
          { emoji: '📚', title: "Learning Path", progress: 65 },
          { emoji: '🏆', title: "Achievement", progress: 100 },
          { emoji: '⏳', title: "In Progress", progress: 30 }
        ]

  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, <span className="text-indigo-600">{user}</span>!
            </h1>
            <p className="text-gray-600 mb-6">Here's what you can explore today</p>
          </div>
          <Button
            onClick={logout}
            text="Logout"
            variant={ButtonType.DANGER}
          />
        </div>

        {/* Quick Access Tiles */}
        <QuickAccess cards={QuickAccessCards}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions Card */}
        <QuickAction cards={QuickActionCards}/>

        {/* Recent Highlights Card */}
        <RecentHighlights cards={RecentHighlightCards}/>
      </div>
    </div>
  )
}

export default Home
