import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Car, GraduationCap, Heart, Palmtree } from "lucide-react";

type GoalType = "car" | "retirement" | "education" | "wedding";

interface GoalCalculatorProps {
  goalType: GoalType;
}

const goalConfig = {
  car: {
    icon: Car,
    title: "New Car Planning",
    defaultTarget: 1000000,
    maxTarget: 5000000,
    targetLabel: "Target Car Price",
    description: "Plan your dream car purchase",
  },
  retirement: {
    icon: Palmtree,
    title: "Retirement Planning",
    defaultTarget: 10000000,
    maxTarget: 100000000,
    targetLabel: "Retirement Corpus",
    description: "Secure your golden years",
  },
  education: {
    icon: GraduationCap,
    title: "Child Education",
    defaultTarget: 2500000,
    maxTarget: 50000000,
    targetLabel: "Education Fund",
    description: "Invest in your child's future",
  },
  wedding: {
    icon: Heart,
    title: "Wedding Planning",
    defaultTarget: 2000000,
    maxTarget: 20000000,
    targetLabel: "Wedding Budget",
    description: "Plan the perfect celebration",
  },
};

const GoalCalculator = ({ goalType }: GoalCalculatorProps) => {
  const config = goalConfig[goalType];
  const Icon = config.icon;

  const [targetAmount, setTargetAmount] = useState(config.defaultTarget);
  const [years, setYears] = useState(goalType === "retirement" ? 25 : 10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  // Calculate required monthly SIP
  const calculateRequiredSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    
    // FV = P * [(1+r)^n - 1] / r * (1+r)
    // P = FV * r / [(1+r)^n - 1] / (1+r)
    const factor = Math.pow(1 + monthlyRate, months);
    const monthlyInvestment = (targetAmount * monthlyRate) / ((factor - 1) * (1 + monthlyRate));
    
    return Math.round(monthlyInvestment);
  };

  const requiredSIP = calculateRequiredSIP();
  const totalSIPInvestment = requiredSIP * years * 12;
  const sipReturns = targetAmount - totalSIPInvestment;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-lg bg-gradient-hero flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{config.title}</h3>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Target Amount */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">{config.targetLabel}</label>
            <span className="text-sm font-semibold text-primary">
              {formatCurrency(targetAmount)}
            </span>
          </div>
          <Slider
            value={[targetAmount]}
            onValueChange={(value) => setTargetAmount(value[0])}
            min={100000}
            max={config.maxTarget}
            step={50000}
            className="w-full"
          />
        </div>

        {/* Time Period */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Time Period</label>
            <span className="text-sm font-semibold text-primary">{years} Years</span>
          </div>
          <Slider
            value={[years]}
            onValueChange={(value) => setYears(value[0])}
            min={1}
            max={goalType === "retirement" ? 40 : 25}
            step={1}
            className="w-full"
          />
        </div>

        {/* Expected Return */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Expected Return (p.a.)</label>
            <span className="text-sm font-semibold text-primary">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={6}
            max={20}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-semibold mb-4">To achieve {formatCurrency(targetAmount)} in {years} years:</h4>
        
        <div className="bg-gradient-card rounded-lg p-4 border border-primary/20">
          <p className="text-xs text-muted-foreground mb-1">Monthly SIP Required</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(requiredSIP)}</p>
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Investment</span>
              <span className="font-medium">{formatCurrency(totalSIPInvestment)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Wealth Gain</span>
              <span className="font-medium text-green-600">{formatCurrency(sipReturns)}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            💡 <strong>Tip:</strong> Starting early gives you more time for compounding. 
            {goalType === "retirement" && " Consider increasing SIP by 10% yearly for better results."}
            {goalType === "education" && " Education costs rise ~10% annually, plan accordingly."}
            {goalType === "wedding" && " Keep some buffer for unexpected expenses."}
            {goalType === "car" && " Don't forget to factor in insurance and maintenance costs."}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GoalCalculator;
