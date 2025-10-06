import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, TrendingUp, Wallet, Target, Calendar, Sparkles } from "lucide-react";

const Dashboard = () => {
  const portfolioValue = 456789;
  const totalInvested = 320000;
  const currentReturns = portfolioValue - totalInvested;
  const returnPercentage = ((currentReturns / totalInvested) * 100).toFixed(2);

  const holdings = [
    {
      name: "HDFC Mid Cap Opportunities Fund",
      type: "Equity - Mid Cap",
      invested: 50000,
      current: 68500,
      units: 845.23,
      nav: 81.05,
      returns: 37.0,
    },
    {
      name: "ICICI Prudential Bluechip Fund",
      type: "Equity - Large Cap",
      invested: 100000,
      current: 132000,
      units: 1823.45,
      nav: 72.40,
      returns: 32.0,
    },
    {
      name: "SBI Small Cap Fund",
      type: "Equity - Small Cap",
      invested: 75000,
      current: 95000,
      units: 923.12,
      nav: 102.93,
      returns: 26.67,
    },
    {
      name: "Aditya Birla Sun Life Tax Relief 96",
      type: "Equity - ELSS",
      invested: 60000,
      current: 82500,
      units: 1245.89,
      nav: 66.23,
      returns: 37.5,
    },
    {
      name: "Kotak Emerging Equity Fund",
      type: "Equity - Mid Cap",
      invested: 35000,
      current: 78789,
      units: 1567.34,
      nav: 50.27,
      returns: 125.11,
    },
  ];

  const activeSIPs = [
    { fund: "HDFC Mid Cap Opportunities", amount: 5000, date: 5 },
    { fund: "ICICI Prudential Bluechip", amount: 10000, date: 1 },
    { fund: "SBI Small Cap Fund", amount: 3000, date: 10 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Investment Dashboard</h1>
          <p className="text-muted-foreground">Track your portfolio performance and manage your investments</p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-card bg-gradient-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total Portfolio Value</h3>
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">₹{portfolioValue.toLocaleString()}</div>
            <div className="flex items-center gap-2 text-success">
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm font-medium">+{returnPercentage}%</span>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total Invested</h3>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">₹{totalInvested.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Across {holdings.length} funds</div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total Returns</h3>
              <Target className="h-5 w-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-success mb-2">₹{currentReturns.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Unrealized gains</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Holdings */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Holdings</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              <div className="space-y-4">
                {holdings.map((holding, index) => {
                  const returns = holding.current - holding.invested;
                  const returnPercent = ((returns / holding.invested) * 100).toFixed(2);
                  const isPositive = returns > 0;

                  return (
                    <Card key={index} className="p-4 hover:shadow-lg transition-shadow bg-gradient-card border-l-4 border-l-primary">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{holding.name}</h3>
                          <p className="text-sm text-muted-foreground">{holding.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">₹{holding.current.toLocaleString()}</div>
                          <div className={`flex items-center gap-1 justify-end text-sm ${isPositive ? 'text-success' : 'text-destructive'}`}>
                            {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                            <span>{returnPercent}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Invested</div>
                          <div className="font-medium">₹{holding.invested.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Units</div>
                          <div className="font-medium">{holding.units.toFixed(2)}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">NAV</div>
                          <div className="font-medium">₹{holding.nav}</div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Advisor */}
            <Card className="p-6 shadow-card bg-gradient-hero text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-bold text-lg">AI Investment Advisor</h3>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Your portfolio is well-diversified across different market caps. Consider adding debt funds for better stability.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Get Personalized Advice
              </Button>
            </Card>

            {/* Active SIPs */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">Active SIPs</h3>
              </div>
              
              <div className="space-y-3">
                {activeSIPs.map((sip, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted">
                    <div className="font-medium text-sm mb-1">{sip.fund}</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">₹{sip.amount.toLocaleString()}/month</span>
                      <span className="text-primary font-medium">Next: {sip.date}th</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full mt-4">
                Start New SIP
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-card">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Set Investment Goal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Invest More
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="h-4 w-4 mr-2" />
                  Withdraw Funds
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;