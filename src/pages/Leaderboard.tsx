import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Medal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
          Global Leaderboard
        </h1>
        
        <Card className="glass border-border/50">
          <div className="p-6">
            <div className="space-y-4">
              {[1,2,3,4,5,6,7,8,9,10].map((rank) => (
                <div key={rank} className="flex items-center justify-between p-4 rounded-lg bg-card/50 hover:bg-card transition-all">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>
                    {rank <= 3 && <Medal className={`w-5 h-5 ${rank === 1 ? 'text-yellow-500' : rank === 2 ? 'text-gray-400' : 'text-orange-600'}`} />}
                    <div>
                      <p className="font-semibold">Player{rank}</p>
                      <p className="text-sm text-muted-foreground">Win Rate: {80 - rank * 2}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{15000 - rank * 500}</p>
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;