import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const PlayerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Player Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass p-6">
            <Trophy className="w-8 h-8 text-primary mb-2" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Tournaments Won</p>
          </Card>
          <Card className="glass p-6">
            <Users className="w-8 h-8 text-secondary mb-2" />
            <p className="text-2xl font-bold">Team Alpha</p>
            <p className="text-sm text-muted-foreground">Current Team</p>
          </Card>
          <Card className="glass p-6">
            <TrendingUp className="w-8 h-8 text-accent mb-2" />
            <p className="text-2xl font-bold">#24</p>
            <p className="text-sm text-muted-foreground">Global Rank</p>
          </Card>
          <Card className="glass p-6">
            <Calendar className="w-8 h-8 text-primary mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Upcoming Matches</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="glass p-6">
            <h2 className="text-xl font-bold mb-4">Registered Tournaments</h2>
            <div className="space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="p-3 bg-card rounded-lg">
                  <p className="font-medium">Tournament {i}</p>
                  <p className="text-sm text-muted-foreground">Starts in {i} days</p>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="glass p-6">
            <h2 className="text-xl font-bold mb-4">Recent Matches</h2>
            <div className="space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="p-3 bg-card rounded-lg flex justify-between">
                  <p className="font-medium">Match vs Team {i}</p>
                  <span className={`text-sm ${i % 2 ? 'text-green-500' : 'text-red-500'}`}>
                    {i % 2 ? 'Victory' : 'Defeat'}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;