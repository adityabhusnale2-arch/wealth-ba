import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, LayoutDashboard, Wallet, Calculator, Sparkles, Menu, LogOut, User, Building2, Shield, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const location = useLocation();
  const { user, signOut, userRole } = useAuth();
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: TrendingUp
    },
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard
    },
    {
      path: "/mutual-funds",
      label: "Mutual Funds",
      icon: Wallet
    },
    {
      path: "/calculator",
      label: "Calculators",
      icon: Calculator
    },
    {
      path: "/business-investments",
      label: "Business Funds",
      icon: Building2
    },
    {
      path: "/insurance",
      label: "Insurance",
      icon: Heart
    }
  ];

  if (userRole === 'admin') {
    navItems.push({
      path: "/admin",
      label: "Admin",
      icon: Shield
    });
  }

  const NavLinks = ({
    mobile = false
  }: {
    mobile?: boolean;
  }) => (
    <>
      {navItems.map(item => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive(item.path)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            } ${mobile ? "w-full" : ""}`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wealth BA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
            <div className="ml-4 flex items-center gap-3">
              {user ? (
                <>
                  <div className="flex items-center gap-2 text-sm px-3 py-1 bg-muted rounded-lg">
                    <User className="h-4 w-4" />
                    <span>{user.email?.split('@')[0]}</span>
                  </div>
                  <Button variant="outline" onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link to="/auth">
                  <Button>Sign In</Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks mobile />
                <div className="mt-6 pt-6 border-t">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 mb-4 text-sm px-3 py-2 bg-muted rounded-lg">
                        <User className="h-4 w-4" />
                        <span>{user.email}</span>
                      </div>
                      <Button variant="outline" onClick={signOut} className="w-full">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Link to="/auth" className="w-full">
                      <Button className="w-full">Sign In</Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
