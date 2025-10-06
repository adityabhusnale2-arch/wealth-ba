import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Calendar, Target } from "lucide-react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const invested = monthlyInvestment * months;
    const returns = futureValue - invested;
    
    return {
      futureValue: Math.round(futureValue),
      invested: Math.round(invested),
      returns: Math.round(returns),
    };
  };

  const result = calculateSIP();

  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Target className="h-6 w-6 text-primary" />
        SIP Calculator
      </h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <Label>Monthly Investment</Label>
            <span className="font-semibold text-primary">₹{monthlyInvestment.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyInvestment]}
            onValueChange={(value) => setMonthlyInvestment(value[0])}
            min={500}
            max={100000}
            step={500}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label>Investment Period</Label>
            <span className="font-semibold text-primary">{years} years</span>
          </div>
          <Slider
            value={[years]}
            onValueChange={(value) => setYears(value[0])}
            min={1}
            max={30}
            step={1}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label>Expected Return (p.a.)</Label>
            <span className="font-semibold text-primary">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={30}
            step={0.5}
            className="mb-2"
          />
        </div>

        <div className="mt-8 p-6 rounded-lg bg-gradient-card border-2 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Investment</p>
              <p className="text-2xl font-bold text-foreground">₹{result.invested.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Estimated Returns</p>
              <p className="text-2xl font-bold text-success">₹{result.returns.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Value</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ₹{result.futureValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SIPCalculator;