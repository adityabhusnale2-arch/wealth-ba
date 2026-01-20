import Navigation from "@/components/Navigation";
import SIPCalculator from "@/components/SIPCalculator";
import LumpsumCalculator from "@/components/LumpsumCalculator";
import SWPCalculator from "@/components/SWPCalculator";
import STPCalculator from "@/components/STPCalculator";
import GoalCalculator from "@/components/GoalCalculator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator as CalcIcon, TrendingUp, Target, Calendar, Car, GraduationCap, Heart, Palmtree } from "lucide-react";
import WhatsAppChat from "@/components/WhatsAppChat";

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
      description: "Plan your financial goals and see how different investment strategies can help you achieve them.",
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
            <span className="text-sm font-medium">Financial Planning Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investment Calculators
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your investments with comprehensive calculators for SIP, Lumpsum, SWP, and STP
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="sip">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="sip">SIP</TabsTrigger>
                <TabsTrigger value="lumpsum">Lumpsum</TabsTrigger>
                <TabsTrigger value="swp">SWP</TabsTrigger>
                <TabsTrigger value="stp">STP</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sip">
                <SIPCalculator />
                {/* Goal-Based Calculators */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Goal-Based Planning
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <GoalCalculator goalType="car" />
                <GoalCalculator goalType="retirement" />
                <GoalCalculator goalType="education" />
                <GoalCalculator goalType="wedding" />
              </div>
            </div>
              </TabsContent>
              
              <TabsContent value="lumpsum">
                <LumpsumCalculator />
              </TabsContent>
              
              <TabsContent value="swp">
                <SWPCalculator />
              </TabsContent>
              
              <TabsContent value="stp">
                <STPCalculator />
              </TabsContent>
            </Tabs>

            
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card bg-gradient-hero text-white">
              <h3 className="font-bold text-lg mb-2">Why These Calculators?</h3>
              <p className="text-sm opacity-90">
                Plan your investments smartly with our comprehensive calculators. Whether you're starting fresh, 
                investing a lumpsum, or planning withdrawals, we have the right tool for you.
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
          <h2 className="text-2xl font-bold mb-6">Understanding Investment Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Investment Types</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>SIP:</strong> Invest fixed amounts regularly for wealth creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Lumpsum:</strong> Invest one-time amount for long-term goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>SWP:</strong> Systematic withdrawals for regular income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>STP:</strong> Transfer funds systematically between schemes</span>
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

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  );
};

export default Calculator;
