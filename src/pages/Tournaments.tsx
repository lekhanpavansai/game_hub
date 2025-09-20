import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, DollarSign, Calendar, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          All Tournaments
        </h1>
        
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search tournaments..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <Card key={i} className="glass border-border/50 hover:shadow-neon transition-all">
              <div className="h-32 bg-gradient-primary"></div>
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-lg">Tournament {i}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    128/256
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    $10,000
                  </span>
                </div>
                <Button variant="neon" className="w-full">Join Tournament</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;