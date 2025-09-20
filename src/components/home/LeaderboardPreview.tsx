import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Medal, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const topPlayers = [
  { rank: 1, name: "xXDragonSlayerXx", points: 12500, winRate: "78%", trend: "up", avatar: "bg-gradient-primary" },
  { rank: 2, name: "NinjaWarrior", points: 11200, winRate: "72%", trend: "up", avatar: "bg-gradient-accent" },
  { rank: 3, name: "PhoenixRising", points: 10800, winRate: "69%", trend: "down", avatar: "bg-gradient-dark" },
  { rank: 4, name: "ShadowHunter", points: 9500, winRate: "65%", trend: "up", avatar: "bg-gradient-primary" },
  { rank: 5, name: "CyberKnight", points: 8900, winRate: "62%", trend: "up", avatar: "bg-gradient-accent" },
];

const LeaderboardPreview = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-orange-600" />;
      default:
        return <Star className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Global </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Leaderboard</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The best of the best compete for the top spots
          </p>
        </div>

        {/* Leaderboard Card */}
        <Card className="glass border-border/50 max-w-4xl mx-auto overflow-hidden">
          <div className="bg-gradient-primary p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-primary-foreground" />
                <h3 className="text-2xl font-bold text-primary-foreground">Top Players</h3>
              </div>
              <span className="text-primary-foreground/80 text-sm">Season 5</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {topPlayers.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-glow-purple group ${
                  player.rank === 1 ? "border-2 border-yellow-500/50" : ""
                }`}
              >
                {/* Rank & Player Info */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-muted-foreground">#{player.rank}</span>
                    {getRankIcon(player.rank)}
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full ${player.avatar} flex items-center justify-center shadow-glow-purple`}>
                    <span className="text-xl font-bold text-white">
                      {player.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {player.name}
                    </p>
                    <p className="text-sm text-muted-foreground">Win Rate: {player.winRate}</p>
                  </div>
                </div>

                {/* Points & Trend */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary neon-text">{player.points.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                  
                  <div className={`flex items-center ${player.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    <TrendingUp 
                      className={`w-5 h-5 ${player.trend === "down" ? "rotate-180" : ""}`} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Leaderboard */}
          <div className="p-6 bg-card/30 border-t border-border">
            <Button variant="neon" className="w-full" asChild>
              <Link to="/leaderboard">
                View Full Leaderboard
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeaderboardPreview;