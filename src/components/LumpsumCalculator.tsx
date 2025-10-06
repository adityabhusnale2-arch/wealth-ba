import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { TrendingUp } from 'lucide-react';

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [years, setYears] = useState(5);
  const [returnRate, setReturnRate] = useState(12);

  const futureValue = investment * Math.pow(1 + returnRate / 100, years);
  const returns = futureValue - investment;

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Lumpsum Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-medium">Investment Amount</label>
            <span className="text-primary font-bold">₹{investment.toLocaleString()}</span>
          </div>
          <Slider
            value={[investment]}
            onValueChange={([value]) => setInvestment(value)}
            min={10000}
            max={10000000}
            step={10000}
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
            max={30}
            step={0.5}
            className="mb-2"
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-hero text-white rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm opacity-90 mb-1">Invested Amount</div>
            <div className="text-2xl font-bold">₹{investment.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Returns</div>
            <div className="text-2xl font-bold">₹{Math.round(returns).toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="text-sm opacity-90 mb-1">Total Value</div>
          <div className="text-3xl font-bold">₹{Math.round(futureValue).toLocaleString()}</div>
        </div>
      </div>
    </Card>
  );
};

export default LumpsumCalculator;
