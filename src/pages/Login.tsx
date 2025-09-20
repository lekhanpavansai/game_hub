import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Mail, Eye, EyeOff, Gamepad2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Get all users from localStorage (support multiple signups)
    const allUsersStr = localStorage.getItem('allUsers');
    const allUsers = allUsersStr ? JSON.parse(allUsersStr) : [];
    
    // Also check the single testUser for backwards compatibility
    const singleUserStr = localStorage.getItem('testUser');
    const singleUser = singleUserStr ? JSON.parse(singleUserStr) : null;
    
    // Find matching user
    let matchedUser = null;
    
    // First check in allUsers array
    for (const user of allUsers) {
      if (user.email === email && user.password === password) {
        matchedUser = user;
        break;
      }
    }
    
    // If not found, check single user
    if (!matchedUser && singleUser) {
      if (singleUser.email === email && singleUser.password === password) {
        matchedUser = singleUser;
      }
    }
    
    if (matchedUser) {
      // Update session data to mark as logged in
      matchedUser.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      localStorage.setItem('testUser', JSON.stringify(matchedUser)); // Keep for compatibility

      toast({
        title: "Login Successful!",
        description: `Welcome back, ${matchedUser.username}! Redirecting to dashboard...`,
      });

      // Redirect based on role
      setTimeout(() => {
        if (matchedUser.role === "organizer") {
          navigate("/organizer-dashboard");
        } else if (matchedUser.role === "player") {
          navigate("/player-dashboard");
        } else {
          navigate("/");
        }
      }, 1000);
    } else {
      // No matching credentials found
      toast({
        title: "Invalid Credentials", 
        description: "The email or password is incorrect. Please try again or sign up.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md glass border-border/50 relative z-10">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon">
            <Gamepad2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl text-center bg-gradient-primary bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Login to access your gaming dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="gamer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" variant="neon" className="w-full" disabled={isLoading}>
              <User className="w-4 h-4 mr-2" />
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Discord
            </Button>
            <Button variant="outline" className="w-full">
              Steam
            </Button>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;