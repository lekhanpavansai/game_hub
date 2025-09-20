import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Lock, Mail, Eye, EyeOff, Shield, Users, Tv } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "player",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create new user data with password for login
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      loggedIn: true,
      createdAt: new Date().toISOString()
    };

    // Store in both single user and array for flexibility
    localStorage.setItem('testUser', JSON.stringify(newUser));
    
    // Also store in allUsers array for multiple user support
    const existingUsersStr = localStorage.getItem('allUsers');
    const existingUsers = existingUsersStr ? JSON.parse(existingUsersStr) : [];
    existingUsers.push(newUser);
    localStorage.setItem('allUsers', JSON.stringify(existingUsers));
    
    // Set as current logged in user
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    toast({
      title: "Account Created Successfully!",
      description: `Welcome to the arena, ${formData.username}! Redirecting...`,
    });

    // Redirect based on role
    setTimeout(() => {
      if (formData.role === "organizer") {
        navigate("/organizer-dashboard");
      } else if (formData.role === "player") {
        navigate("/player-dashboard");
      } else {
        navigate("/");
      }
    }, 1000);

    setIsLoading(false);
  };

  const roles = [
    { value: "player", label: "Player", icon: User, description: "Compete in tournaments" },
    { value: "organizer", label: "Organizer", icon: Shield, description: "Create & manage events" },
    { value: "spectator", label: "Spectator", icon: Tv, description: "Watch & engage" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-neon-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-lg glass border-border/50 relative z-10">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow-pink">
            <Users className="w-8 h-8 text-accent-foreground" />
          </div>
          <CardTitle className="text-2xl text-center bg-gradient-accent bg-clip-text text-transparent">
            Join the Arena
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Create your account and start your gaming journey
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="xXGamerXx"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="pl-10 bg-input border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="gamer@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-input border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 bg-input border-border focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 bg-input border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">Choose Your Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <div key={role.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={role.value} id={role.value} />
                      <Label
                        htmlFor={role.value}
                        className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg hover:bg-card/50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{role.label}</p>
                          <p className="text-xs text-muted-foreground">{role.description}</p>
                        </div>
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            <Button type="submit" variant="gaming" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;