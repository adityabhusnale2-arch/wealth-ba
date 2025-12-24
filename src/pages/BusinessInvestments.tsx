import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Clock, Calendar, Target, Info } from 'lucide-react';
import WhatsAppChat from "@/components/WhatsAppChat";

const BusinessInvestments = () => {
  const whatsappNumber = '917385416026';
  
  const openWhatsApp = (fundName: string, amc: string, category: string, nav: number, returns: { "1Y": number; "3Y": number; "5Y": number }, minInvestment: number) => {
    const message = `Hi! I want to invest my business funds in *${fundName}* (${amc}).\n\nCategory: ${category}\nCurrent NAV: ₹${nav}\nReturns: 1Y - ${returns["1Y"]}%, 3Y - ${returns["3Y"]}%, 5Y - ${returns["5Y"]}%\nMin. Investment: ₹${minInvestment.toLocaleString()}\n\nCan you help me with the investment process and guide me through setting up business fund management?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const liquidFunds = [
    {
      name: "Tata Liquid Fund",
      amc: "Tata Mutual Fund",
      category: "Liquid Fund",
      type: "liquid",
      nav: 41.07,
      returns: { "1Y": 6.5, "3Y": 5.6, "5Y": 5.3 },
      risk: "Low",
      minInvestment: 5000
    },
    {
      name: "Tata Overnight Fund",
      amc: "Tata Mutual Fund",
      category: "Overnight Fund",
      type: "liquid",
      nav: 10.58,
      returns: { "1Y": 5.9, "3Y": 4.8, "5Y": 4.5 },
      risk: "Very Low",
      minInvestment: 5000
    },
    {
      name: "HDFC Liquid Fund",
      amc: "HDFC Mutual Fund",
      category: "Liquid Fund",
      type: "liquid",
      nav: 41.92,
      returns: { "1Y": 6.6, "3Y": 5.7, "5Y": 5.4 },
      risk: "Low",
      minInvestment: 5000
    },
    {
      name: "HDFC Overnight Fund",
      amc: "HDFC Mutual Fund",
      category: "Overnight Fund",
      type: "liquid",
      nav: 10.61,
      returns: { "1Y": 5.8, "3Y": 4.7, "5Y": 4.4 },
      risk: "Very Low",
      minInvestment: 5000
    },
    {
      name: "Nippon India Liquid Fund",
      amc: "Nippon India Mutual Fund",
      category: "Liquid Fund",
      type: "liquid",
      nav: 40.86,
      returns: { "1Y": 6.5, "3Y": 5.6, "5Y": 5.3 },
      risk: "Low",
      minInvestment: 5000
    },
    {
      name: "Nippon India Overnight Fund",
      amc: "Nippon India Mutual Fund",
      category: "Overnight Fund",
      type: "liquid",
      nav: 10.62,
      returns: { "1Y": 5.9, "3Y": 4.8, "5Y": 4.5 },
      risk: "Very Low",
      minInvestment: 5000
    }
  ];
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Business Fund Management</h1>
          <p className="text-sm md:text-base text-muted-foreground">Optimize your business capital for short to long-term goals</p>
        </div>

        {/* Disclaimer Note */}
        <Alert className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Note:</strong> The returns displayed are indicative and may vary from the latest data as they change daily based on market conditions. Please verify with us current rates through WhatsApp before investing.
          </AlertDescription>
        </Alert>

        <Card className="p-4 md:p-6 shadow-card">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Business Fund Management</h2>
                    {liquidFunds.map((fund, i) => (
                      <Card key={i} className="mb-3 md:mb-4 p-3 md:p-4 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                        <h3 className="text-base md:text-lg font-bold mb-2">{fund.name}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mb-3">
                          {fund.category}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                          <div className="text-xs md:text-sm">
                            <span className="text-muted-foreground">Est. Returns: </span>
                            <span className="font-semibold text-success">
                              {fund.returns["1Y"]}%
                            </span>
                          </div>
                          <Button 
                            size="sm"
                            className="w-full sm:w-auto"
                            onClick={() => openWhatsApp(fund.name, fund.amc, fund.category, fund.nav, fund.returns, fund.minInvestment)}
                          >
                            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                            <span className="text-xs md:text-sm">Invest Now</span>
                          </Button>
                        </div>
                      </Card>
                    ))}
        </Card>
      </div>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  );
};

export default BusinessInvestments;
