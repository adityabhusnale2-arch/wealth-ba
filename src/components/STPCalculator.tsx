import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { ArrowRightLeft } from 'lucide-react';

const STPCalculator = () => {
  const [investment, setInvestment] = useState(500000);
  const [monthlyTransfer, setMonthlyTransfer] = useState(10000);
  const [years, setYears] = useState(3);
  const [sourceReturn, setSourceReturn] = useState(6);
  const [targetReturn, setTargetReturn] = useState(12);

  const months = years * 12;
  const sourceRate = sourceReturn / 100 / 12;
  const targetRate = targetReturn / 100 / 12;

  let sourceBalance = investment;
  let targetBalance = 0;

  for (let i = 0; i < months; i++) {
    sourceBalance = sourceBalance * (1 + sourceRate) - monthlyTransfer;
    targetBalance = (targetBalance + monthlyTransfer) * (1 + targetRate);
    if (sourceBalance <= 0) break;
  }

  const totalValue = Math.max(0, sourceBalance) + targetBalance;

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center gap-2 mb-6">
        <ArrowRightLeft className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">STP Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Initial Investment</label>
            <span className="text-primary font-bold">₹{investment.toLocaleString()}</span>
          </div>
          <Slider
            value={[investment]}
            onValueChange={([value]) => setInvestment(value)}
            min={100000}
            max={5000000}
            step={50000}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Monthly Transfer</label>
            <span className="text-primary font-bold">₹{monthlyTransfer.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyTransfer]}
            onValueChange={([value]) => setMonthlyTransfer(value)}
            min={5000}
            max={100000}
            step={1000}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Transfer Period</label>
            <span className="text-primary font-bold">{years} years</span>
          </div>
          <Slider
            value={[years]}
            onValueChange={([value]) => setYears(value)}
            min={1}
            max={10}
            step={1}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Source Fund Return</label>
            <span className="text-primary font-bold">{sourceReturn}%</span>
          </div>
          <Slider
            value={[sourceReturn]}
            onValueChange={([value]) => setSourceReturn(value)}
            min={1}
            max={15}
            step={0.5}
            className="mb-2"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Target Fund Return</label>
            <span className="text-primary font-bold">{targetReturn}%</span>
          </div>
          <Slider
            value={[targetReturn]}
            onValueChange={([value]) => setTargetReturn(value)}
            min={5}
            max={25}
            step={0.5}
            className="mb-2"
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-hero text-white rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm opacity-90 mb-1">Source Fund Balance</div>
            <div className="text-2xl font-bold">₹{Math.round(Math.max(0, sourceBalance)).toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Target Fund Value</div>
            <div className="text-2xl font-bold">₹{Math.round(targetBalance).toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="text-sm opacity-90 mb-1">Total Portfolio Value</div>
          <div className="text-3xl font-bold">₹{Math.round(totalValue).toLocaleString()}</div>
        </div>
      </div>
    </Card>
  );
};

export default STPCalculator;
