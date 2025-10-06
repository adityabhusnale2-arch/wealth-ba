import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, LayoutDashboard, Wallet, Calculator, Sparkles, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    path: "/",
    label: "Home",
    icon: TrendingUp
  }, {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard
  }, {
    path: "/mutual-funds",
    label: "Mutual Funds",
    icon: Wallet
  }, {
    path: "/calculator",
    label: "SIP Calculator",
    icon: Calculator
  }];
  const NavLinks = ({
    mobile = false
  }: {
    mobile?: boolean;
  }) => <>
      {navItems.map(item => {
      const Icon = item.icon;
      return <Link key={item.path} to={item.path} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive(item.path) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"} ${mobile ? "w-full" : ""}`}>
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>;
    })}
    </>;
  return <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wealth BA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
            <Button className="ml-4">Get Started</Button>
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
                <Button className="w-full mt-4">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};
export default Navigation;