import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Wallet } from 'lucide-react';

const SWPCalculator = () => {
  const [investment, setInvestment] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(10);

  const monthlyRate = returnRate / 100 / 12;
  const months = years * 12;
  
  let remainingAmount = investment;
  let totalWithdrawn = 0;

  for (let i = 0; i < months; i++) {
    remainingAmount = remainingAmount * (1 + monthlyRate) - withdrawal;
    totalWithdrawn += withdrawal;
    if (remainingAmount <= 0) break;
  }

  const finalValue = Math.max(0, remainingAmount);

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center gap-2 mb-6">
        <Wallet className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">SWP Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Total Investment</label>
            <span className="text-primary font-bold">₹{investment.toLocaleString()}</span>
          </div>
          <Slider
            value={[investment]}
            onValueChange={([value]) => setInvestment(value)}
            min={100000}
            max={10000000}
            step={50000}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Monthly Withdrawal</label>
            <span className="text-primary font-bold">₹{withdrawal.toLocaleString()}</span>
          </div>
          <Slider
            value={[withdrawal]}
            onValueChange={([value]) => setWithdrawal(value)}
            min={5000}
            max={100000}
            step={1000}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Time Period</label>
            <span className="text-primary font-bold">{years} years</span>
          </div>
          <Slider
            value={[years]}
            onValueChange={([value]) => setYears(value)}
            min={1}
            max={30}
            step={1}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Expected Return Rate</label>
            <span className="text-primary font-bold">{returnRate}%</span>
          </div>
          <Slider
            value={[returnRate]}
            onValueChange={([value]) => setReturnRate(value)}
            min={1}
            max={20}
            step={0.5}
            className="mb-2"
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-hero text-white rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm opacity-90 mb-1">Initial Investment</div>
            <div className="text-2xl font-bold">₹{investment.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Total Withdrawn</div>
            <div className="text-2xl font-bold">₹{Math.round(totalWithdrawn).toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="text-sm opacity-90 mb-1">Remaining Value</div>
          <div className="text-3xl font-bold">₹{Math.round(finalValue).toLocaleString()}</div>
        </div>
      </div>
    </Card>
  );
};

export default SWPCalculator;
