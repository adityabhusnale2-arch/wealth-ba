import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Clock, Calendar, Target } from 'lucide-react';

const BusinessInvestments = () => {
  const timeframes = [
    { label: '1 Week', period: '7 days', recommended: ['Liquid Funds', 'Overnight Funds'] },
    { label: '1 Month', period: '30 days', recommended: ['Ultra Short Duration Funds', 'Money Market Funds'] },
    { label: '3 Months', period: '90 days', recommended: ['Short Duration Funds', 'Low Duration Funds'] },
    { label: '6 Months', period: '180 days', recommended: ['Corporate Bond Funds', 'Banking & PSU Funds'] },
    { label: '1 Year+', period: '365+ days', recommended: ['Dynamic Bond Funds', 'Equity Savings Funds'] },
  ];

  const investmentData = [
    { period: 'Weekly', amount: 250000, returns: 2500, roi: 1.0 },
    { period: 'Monthly', amount: 1800000, returns: 45000, roi: 2.5 },
    { period: 'Quarterly', amount: 3500000, returns: 157500, roi: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Business Fund Management</h1>
          <p className="text-muted-foreground">Optimize your business capital for short to long-term goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-card bg-gradient-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total Deployed</h3>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">₹55.5L</div>
            <div className="text-sm text-success">+12% this month</div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total Returns</h3>
              <Target className="h-5 w-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-success mb-2">₹2.05L</div>
            <div className="text-sm text-muted-foreground">Average ROI: 3.7%</div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Active Positions</h3>
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">12</div>
            <div className="text-sm text-muted-foreground">Across 5 timeframes</div>
          </Card>
        </div>

        <Card className="p-6 shadow-card mb-8">
          <h2 className="text-2xl font-bold mb-6">Investment Overview by Period</h2>
          <div className="space-y-4">
            {investmentData.map((data, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{data.period} Investments</h3>
                    <p className="text-sm text-muted-foreground">Current allocation</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹{(data.amount / 100000).toFixed(1)}L</div>
                    <div className="text-success text-sm font-medium">+{data.roi}% ROI</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Returns Earned</div>
                    <div className="font-semibold">₹{data.returns.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Status</div>
                    <div className="font-semibold text-success">Active</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Investment Options by Timeframe</h2>
          <Tabs defaultValue="1week">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="1week">1 Week</TabsTrigger>
              <TabsTrigger value="1month">1 Month</TabsTrigger>
              <TabsTrigger value="3months">3 Months</TabsTrigger>
              <TabsTrigger value="6months">6 Months</TabsTrigger>
              <TabsTrigger value="1year">1 Year+</TabsTrigger>
            </TabsList>

            {timeframes.map((tf, index) => (
              <TabsContent key={index} value={tf.label.toLowerCase().replace(/\s/g, '')}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Investment Period: {tf.period}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {tf.recommended.map((fund, i) => (
                      <Card key={i} className="p-4 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                        <h3 className="font-bold mb-2">{fund}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Ideal for {tf.label.toLowerCase()} investment horizon
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Est. Returns: </span>
                            <span className="font-semibold text-success">
                              {index === 0 ? '3-4%' : index === 1 ? '4-5%' : index === 2 ? '5-6%' : index === 3 ? '6-7%' : '7-9%'}
                            </span>
                          </div>
                          <Button size="sm">Invest Now</Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default BusinessInvestments;
