import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Car, GraduationCap, Heart, Palmtree, TrendingUp, AlertCircle } from "lucide-react";

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
  const [stepUpRate, setStepUpRate] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [enableStepUp, setEnableStepUp] = useState(false);
  const [enableInflation, setEnableInflation] = useState(false);

  // Calculate inflation-adjusted target
  const getInflationAdjustedTarget = () => {
    if (!enableInflation) return targetAmount;
    return Math.round(targetAmount * Math.pow(1 + inflationRate / 100, years));
  };

  const inflationAdjustedTarget = getInflationAdjustedTarget();

  // Calculate required monthly SIP (regular)
  const calculateRequiredSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    
    const factor = Math.pow(1 + monthlyRate, months);
    const monthlyInvestment = (inflationAdjustedTarget * monthlyRate) / ((factor - 1) * (1 + monthlyRate));
    
    return Math.round(monthlyInvestment);
  };

  // Calculate step-up SIP
  const calculateStepUpSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const annualStepUp = stepUpRate / 100;
    
    let totalFV = 0;
    let currentSIP = 1; // Start with 1 to find the multiplier
    
    for (let year = 0; year < years; year++) {
      const sipForYear = currentSIP * Math.pow(1 + annualStepUp, year);
      for (let month = 0; month < 12; month++) {
        const monthsRemaining = (years - year) * 12 - month;
        totalFV += sipForYear * Math.pow(1 + monthlyRate, monthsRemaining);
      }
    }
    
    const requiredFirstSIP = inflationAdjustedTarget / totalFV;
    return Math.round(requiredFirstSIP);
  };

  // Calculate total investment for step-up SIP
  const calculateStepUpTotalInvestment = (firstSIP: number) => {
    let total = 0;
    const annualStepUp = stepUpRate / 100;
    
    for (let year = 0; year < years; year++) {
      const sipForYear = firstSIP * Math.pow(1 + annualStepUp, year);
      total += sipForYear * 12;
    }
    
    return Math.round(total);
  };

  const requiredSIP = enableStepUp ? calculateStepUpSIP() : calculateRequiredSIP();
  const totalSIPInvestment = enableStepUp 
    ? calculateStepUpTotalInvestment(requiredSIP)
    : requiredSIP * years * 12;
  const sipReturns = inflationAdjustedTarget - totalSIPInvestment;

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
            <label className="text-sm font-medium">{config.targetLabel} (Today's Value)</label>
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

        {/* Inflation Adjustment Toggle */}
        <div className="p-4 rounded-lg bg-muted/50 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <label className="text-sm font-medium">Adjust for Inflation</label>
            </div>
            <Switch checked={enableInflation} onCheckedChange={setEnableInflation} />
          </div>
          
          {enableInflation && (
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs text-muted-foreground">Inflation Rate (p.a.)</label>
                <span className="text-xs font-semibold text-orange-600">{inflationRate}%</span>
              </div>
              <Slider
                value={[inflationRate]}
                onValueChange={(value) => setInflationRate(value[0])}
                min={3}
                max={12}
                step={0.5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Future value needed: <span className="font-semibold text-foreground">{formatCurrency(inflationAdjustedTarget)}</span>
              </p>
            </div>
          )}
        </div>

        {/* Step-up SIP Toggle */}
        <div className="p-4 rounded-lg bg-muted/50 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <label className="text-sm font-medium">Step-up SIP</label>
            </div>
            <Switch checked={enableStepUp} onCheckedChange={setEnableStepUp} />
          </div>
          
          {enableStepUp && (
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs text-muted-foreground">Annual Increase</label>
                <span className="text-xs font-semibold text-green-600">{stepUpRate}%</span>
              </div>
              <Slider
                value={[stepUpRate]}
                onValueChange={(value) => setStepUpRate(value[0])}
                min={5}
                max={25}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-2">
                SIP increases by {stepUpRate}% every year
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-semibold mb-4">
          To achieve {formatCurrency(inflationAdjustedTarget)} in {years} years:
        </h4>
        
        <div className="bg-gradient-card rounded-lg p-4 border border-primary/20">
          <p className="text-xs text-muted-foreground mb-1">
            {enableStepUp ? "Starting Monthly SIP" : "Monthly SIP Required"}
          </p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(requiredSIP)}</p>
          {enableStepUp && (
            <p className="text-xs text-green-600 mt-1">
              Increases to {formatCurrency(Math.round(requiredSIP * Math.pow(1 + stepUpRate/100, years - 1)))} in year {years}
            </p>
          )}
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

        {/* Inflation Reality Check */}
        <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
          <p className="text-sm font-medium text-orange-800 dark:text-orange-300 mb-2">
            📊 What {formatCurrency(targetAmount)} today means in {years} years:
          </p>
          <div className="space-y-2 text-sm text-orange-700 dark:text-orange-400">
            <p>
              • <strong>You'll need:</strong> {formatCurrency(Math.round(targetAmount * Math.pow(1 + inflationRate / 100, years)))} to buy the same things
            </p>
            <p>
              • <strong>Your {formatCurrency(targetAmount)} will feel like:</strong> {formatCurrency(Math.round(targetAmount / Math.pow(1 + inflationRate / 100, years)))} in today's value
            </p>
            <p className="text-xs mt-2 text-orange-600 dark:text-orange-500">
              💡 Simply put: Prices double roughly every 12 years at 6% inflation. So plan for the future price, not today's!
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-3 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            💡 <strong>Tip:</strong> {enableStepUp ? "Step-up SIP lets you start small and increase yearly as your salary grows. " : ""}
            {enableInflation ? "Great! You're planning for real future costs. " : "Turn on 'Adjust for Inflation' to see actual amount you'll need. "}
            {goalType === "retirement" && "Most people underestimate retirement needs - your monthly expenses will be higher!"}
            {goalType === "education" && "Education costs rise 8-10% yearly - more than normal inflation!"}
            {goalType === "wedding" && "Wedding costs are rising fast - add 20% buffer for last-minute expenses."}
            {goalType === "car" && "Remember: Car price is just the start. Add insurance + fuel + service costs!"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GoalCalculator;
