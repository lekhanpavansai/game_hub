import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, DollarSign, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const OrganizerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Organizer Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass p-6">
            <Trophy className="w-8 h-8 text-primary mb-2" />
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-muted-foreground">Active Tournaments</p>
          </Card>
          <Card className="glass p-6">
            <Users className="w-8 h-8 text-secondary mb-2" />
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-sm text-muted-foreground">Total Participants</p>
          </Card>
          <Card className="glass p-6">
            <DollarSign className="w-8 h-8 text-accent mb-2" />
            <p className="text-2xl font-bold">$125K</p>
            <p className="text-sm text-muted-foreground">Total Prize Pool</p>
          </Card>
        </div>

        <Button variant="neon" className="mb-6">
          <Plus className="w-4 h-4 mr-2" />
          Create New Tournament
        </Button>

        <Card className="glass p-6">
          <h2 className="text-xl font-bold mb-4">Your Tournaments</h2>
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="p-4 bg-card rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium">Tournament {i}</p>
                  <p className="text-sm text-muted-foreground">128/{128 + i * 32} players</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrganizerDashboard;