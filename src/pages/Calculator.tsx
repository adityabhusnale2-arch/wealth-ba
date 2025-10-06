import Navigation from "@/components/Navigation";
import SIPCalculator from "@/components/SIPCalculator";
import { Card } from "@/components/ui/card";
import { Calculator as CalcIcon, TrendingUp, Target, Calendar } from "lucide-react";

const Calculator = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Power of Compounding",
      description: "Watch your investments grow exponentially over time through systematic investing.",
    },
    {
      icon: Target,
      title: "Goal Planning",
      description: "Plan your financial goals and see how SIP can help you achieve them systematically.",
    },
    {
      icon: Calendar,
      title: "Disciplined Investing",
      description: "Build wealth through regular, automated investments regardless of market conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-primary/20 mb-4">
            <CalcIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Financial Planning Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SIP Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your investments and visualize the potential returns from systematic investing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <SIPCalculator />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card bg-gradient-hero text-white">
              <h3 className="font-bold text-lg mb-2">Why SIP?</h3>
              <p className="text-sm opacity-90">
                Systematic Investment Plans (SIP) help you invest small amounts regularly, 
                averaging out market volatility and building wealth through rupee cost averaging.
              </p>
            </Card>

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 shadow-card">
                  <div className="h-10 w-10 rounded-lg bg-gradient-card flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Information */}
        <Card className="p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Understanding SIP Returns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-lg">How It Works</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Invest a fixed amount regularly (monthly/quarterly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Benefits from rupee cost averaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Compounding helps grow wealth over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Disciplined approach to wealth creation</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-lg">Important Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Returns are indicative and not guaranteed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Actual returns depend on fund performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Market-linked investments carry risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Past performance doesn't guarantee future returns</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;