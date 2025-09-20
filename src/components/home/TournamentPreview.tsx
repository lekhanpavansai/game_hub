import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, DollarSign, Timer, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const tournaments = [
  {
    id: 1,
    name: "Champions League",
    game: "League of Legends",
    status: "live",
    participants: "128/128",
    prizePool: "$50,000",
    startDate: "Live Now",
    image: "bg-gradient-primary",
  },
  {
    id: 2,
    name: "Elite Series",
    game: "Valorant",
    status: "upcoming",
    participants: "64/128",
    prizePool: "$25,000",
    startDate: "Dec 28, 2024",
    image: "bg-gradient-accent",
  },
  {
    id: 3,
    name: "Global Finals",
    game: "CS:GO 2",
    status: "upcoming",
    participants: "200/256",
    prizePool: "$100,000",
    startDate: "Jan 5, 2025",
    image: "bg-gradient-dark",
  },
];

const TournamentPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Featured </span>
            <span className="text-foreground">Tournaments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join the most competitive tournaments and prove your skills
          </p>
        </div>

        {/* Tournament Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card
              key={tournament.id}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-neon hover:scale-105 group overflow-hidden"
            >
              {/* Tournament Image/Banner */}
              <div className={`h-48 ${tournament.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-20 h-20 text-white/20" />
                </div>
                {tournament.status === "live" && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-destructive rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs text-destructive-foreground font-semibold">LIVE</span>
                  </div>
                )}
              </div>

              {/* Tournament Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {tournament.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Gamepad2 className="w-4 h-4" />
                    <span>{tournament.game}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{tournament.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">{tournament.prizePool}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    {tournament.status === "live" ? (
                      <Timer className="w-4 h-4 text-destructive" />
                    ) : (
                      <Calendar className="w-4 h-4 text-accent" />
                    )}
                    <span className="text-sm text-muted-foreground">{tournament.startDate}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={tournament.status === "live" ? "gaming" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to={`/tournaments/${tournament.id}`}>
                    {tournament.status === "live" ? "Watch Now" : "View Details"}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg" asChild>
            <Link to="/tournaments">
              View All Tournaments
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentPreview;