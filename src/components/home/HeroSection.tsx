import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Users, Play, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-neon-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Next-Gen Gaming Tournament Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Compete.
            </span>
            <span className="text-foreground"> Win. </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Dominate.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Join the ultimate gaming tournament platform where champions are made. 
            Organize epic tournaments, compete with the best, and claim your glory.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary neon-text">10K+</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary neon-text">500+</div>
              <div className="text-sm text-muted-foreground">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent neon-text">$1M+</div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="neon" size="xl" asChild>
              <Link to="/tournaments">
                <Trophy className="w-5 h-5 mr-2" />
                Browse Tournaments
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/signup">
                <Play className="w-5 h-5 mr-2" />
                Start Playing
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center"
                >
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-4">
              Join <span className="text-primary font-semibold">2,500+ gamers</span> competing today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;