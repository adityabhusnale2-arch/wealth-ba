import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, TrendingUp, Info } from "lucide-react";
import WhatsAppChat from "@/components/WhatsAppChat";
import AdityaChat from "@/components/AdityaChat";

const MutualFunds = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(6); // Show 6 funds initially
  const [searchQuery, setSearchQuery] = useState("");
  const whatsappNumber = '917385416026';
  
  const openWhatsApp = (fundName: string, amc: string, category: string, nav: number, returns: { "1Y": number; "3Y": number; "5Y": number }, minInvestment: number) => {
    const message = `Hi! I want to invest in *${fundName}* (${amc}).\n\nCategory: ${category}\nCurrent NAV: ₹${nav}\nReturns: 1Y - ${returns["1Y"]}%, 3Y - ${returns["3Y"]}%, 5Y - ${returns["5Y"]}%\nMin. Investment: ₹${minInvestment.toLocaleString()}\n\nCan you help me with the investment process and provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const funds = [
    // =======================
    // TATA MUTUAL FUNDS
    // =======================
    {
      name: "Tata Large Cap Fund",
      amc: "Tata Mutual Fund",
      category: "Equity - Large Cap",
      type: "equity",
      nav: 310.45,
      returns: { "1Y": 15.8, "3Y": 18.6, "5Y": 16.9 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "Tata Flexi Cap Fund",
      amc: "Tata Mutual Fund",
      category: "Equity - Flexi Cap",
      type: "equity",
      nav: 178.62,
      returns: { "1Y": 17.4, "3Y": 20.2, "5Y": 18.1 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "Tata Mid Cap Growth Fund",
      amc: "Tata Mutual Fund",
      category: "Equity - Mid Cap",
      type: "equity",
      nav: 265.88,
      returns: { "1Y": 22.1, "3Y": 26.5, "5Y": 21.9 },
      risk: "Very High",
      minInvestment: 5000
    },
    {
      name: "Tata Small Cap Fund",
      amc: "Tata Mutual Fund",
      category: "Equity - Small Cap",
      type: "equity",
      nav: 42.73,
      returns: { "1Y": 28.6, "3Y": 31.4, "5Y": 24.7 },
      risk: "Very High",
      minInvestment: 5000
    },
    {
      name: "Tata Short Term Bond Fund",
      amc: "Tata Mutual Fund",
      category: "Debt - Short Duration",
      type: "debt",
      nav: 47.85,
      returns: { "1Y": 6.8, "3Y": 6.1, "5Y": 6.4 },
      risk: "Low to Moderate",
      minInvestment: 5000
    },
    {
      name: "Tata Corporate Bond Fund",
      amc: "Tata Mutual Fund",
      category: "Debt - Corporate Bond",
      type: "debt",
      nav: 36.22,
      returns: { "1Y": 7.3, "3Y": 6.9, "5Y": 7.1 },
      risk: "Low to Moderate",
      minInvestment: 5000
    },
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
      name: "Tata Nifty 50 Index Fund",
      amc: "Tata Mutual Fund",
      category: "Equity - Index Fund",
      type: "equity",
      nav: 225.36,
      returns: { "1Y": 14.7, "3Y": 16.9, "5Y": 15.2 },
      risk: "Moderately High",
      minInvestment: 5000
    },
    {
      name: "Tata Nifty Next 50 Index Fund",
      amc: "Tata Mutual Fund",
      category: "Equity - Index Fund",
      type: "equity",
      nav: 154.21,
      returns: { "1Y": 18.3, "3Y": 20.6, "5Y": 18.9 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "Tata Gold ETF",
      amc: "Tata Mutual Fund",
      category: "Commodity - Gold ETF",
      type: "equity",
      nav: 68.44,
      returns: { "1Y": 13.4, "3Y": 11.2, "5Y": 9.8 },
      risk: "Moderate",
      minInvestment: 5000
    },
    {
      name: "Tata Money Market Fund",
      amc: "Tata Mutual Fund",
      category: "Debt - Money Market",
      type: "debt",
      nav: 32.18,
      returns: { "1Y": 6.6, "3Y": 5.9, "5Y": 5.7 },
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
  
  
    // =======================
    // HDFC MUTUAL FUNDS
    // =======================
    {
      name: "HDFC Flexi Cap Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Flexi Cap",
      type: "equity",
      nav: 1680.45,
      returns: { "1Y": 17.2, "3Y": 21.4, "5Y": 18.9 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "HDFC Top 100 Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Large Cap",
      type: "equity",
      nav: 945.32,
      returns: { "1Y": 14.6, "3Y": 17.8, "5Y": 16.1 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "HDFC Mid-Cap Opportunities Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Mid Cap",
      type: "equity",
      nav: 81.05,
      returns: { "1Y": 18.5, "3Y": 22.8, "5Y": 19.3 },
      risk: "Very High",
      minInvestment: 5000
    },
    {
      name: "HDFC Small Cap Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Small Cap",
      type: "equity",
      nav: 98.74,
      returns: { "1Y": 26.9, "3Y": 30.6, "5Y": 25.1 },
      risk: "Very High",
      minInvestment: 5000
    },
    {
      name: "HDFC Corporate Bond Fund",
      amc: "HDFC Mutual Fund",
      category: "Debt - Corporate Bond",
      type: "debt",
      nav: 55.21,
      returns: { "1Y": 7.4, "3Y": 6.8, "5Y": 7.0 },
      risk: "Low to Moderate",
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
      name: "HDFC Nifty 50 Index Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Index Fund",
      type: "equity",
      nav: 234.12,
      returns: { "1Y": 14.6, "3Y": 16.8, "5Y": 15.1 },
      risk: "Moderately High",
      minInvestment: 5000
    },
    {
      name: "HDFC Nifty Next 50 Index Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Index Fund",
      type: "equity",
      nav: 49.36,
      returns: { "1Y": 18.1, "3Y": 20.4, "5Y": 18.6 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "HDFC Banking and Financial Services Fund",
      amc: "HDFC Mutual Fund",
      category: "Equity - Sectoral (Banking)",
      type: "equity",
      nav: 26.45,
      returns: { "1Y": 20.3, "3Y": 17.9, "5Y": 16.8 },
      risk: "Very High",
      minInvestment: 5000
    },
    {
      name: "HDFC Balanced Advantage Fund",
      amc: "HDFC Mutual Fund",
      category: "Hybrid - Dynamic Asset Allocation",
      type: "debt",
      nav: 612.45,
      returns: { "1Y": 12.8, "3Y": 14.9, "5Y": 13.6 },
      risk: "Moderate",
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
  
    // =======================
    // NIPPON INDIA MUTUAL FUNDS
    // =======================
    {
      name: "Nippon India Large Cap Fund",
      amc: "Nippon India Mutual Fund",
      category: "Equity - Large Cap",
      type: "equity",
      nav: 86.45,
      returns: { "1Y": 14.9, "3Y": 17.6, "5Y": 16.2 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "Nippon India Small Cap Fund",
      amc: "Nippon India Mutual Fund",
      category: "Equity - Small Cap",
      type: "equity",
      nav: 145.78,
      returns: { "1Y": 29.8, "3Y": 33.6, "5Y": 27.2 },
      risk: "Very High",
      minInvestment: 5000
    },
    {
      name: "Nippon India Corporate Bond Fund",
      amc: "Nippon India Mutual Fund",
      category: "Debt - Corporate Bond",
      type: "debt",
      nav: 53.18,
      returns: { "1Y": 7.5, "3Y": 6.9, "5Y": 7.2 },
      risk: "Low to Moderate",
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
      name: "Nippon India Nifty 50 Index Fund",
      amc: "Nippon India Mutual Fund",
      category: "Equity - Index Fund",
      type: "equity",
      nav: 208.74,
      returns: { "1Y": 14.8, "3Y": 17.0, "5Y": 15.3 },
      risk: "Moderately High",
      minInvestment: 5000
    },
    {
      name: "Nippon India Nifty Next 50 Junior BeES",
      amc: "Nippon India Mutual Fund",
      category: "Equity - ETF",
      type: "equity",
      nav: 478.55,
      returns: { "1Y": 18.5, "3Y": 21.1, "5Y": 19.2 },
      risk: "High",
      minInvestment: 5000
    },
    {
      name: "Nippon India Gold BeES",
      amc: "Nippon India Mutual Fund",
      category: "Commodity - Gold ETF",
      type: "equity",
      nav: 63.72,
      returns: { "1Y": 13.1, "3Y": 11.0, "5Y": 9.6 },
      risk: "Moderate",
      minInvestment: 5000
    },
    {
      name: "Nippon India Banking & Financial Services Fund",
      amc: "Nippon India Mutual Fund",
      category: "Equity - Sectoral (Banking)",
      type: "equity",
      nav: 58.92,
      returns: { "1Y": 21.7, "3Y": 18.9, "5Y": 17.3 },
      risk: "Very High",
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
  

  const categories = ["all", "equity", "debt"];

  // Filter funds based on search query
  const searchFilteredFunds = funds.filter(fund => {
    const query = searchQuery.toLowerCase();
    return (
      fund.name.toLowerCase().includes(query) ||
      fund.amc.toLowerCase().includes(query) ||
      fund.category.toLowerCase().includes(query)
    );
  });

  // Filter funds based on selected category
  const filteredFunds = selectedCategory === "all" 
    ? searchFilteredFunds 
    : searchFilteredFunds.filter(fund => fund.type === selectedCategory);

  // Get funds to display based on displayCount
  const displayedFunds = filteredFunds.slice(0, displayCount);
  
  // Check if there are more funds to load
  const hasMoreFunds = displayCount < filteredFunds.length;

  // Load more funds handler
  const loadMoreFunds = () => {
    setDisplayCount(prev => prev + 6); // Load 6 more funds each time
  };

  // Reset display count when category changes
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setDisplayCount(6); // Reset to initial count
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setDisplayCount(6); // Reset to initial count when searching
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Very High":
        return "destructive";
      case "High":
        return "default";
      case "Moderately High":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Mutual Funds</h1>
          <p className="text-sm md:text-base text-muted-foreground">Browse and invest in top-performing mutual funds from leading AMCs</p>
        </div>

        {/* Disclaimer Note */}
        <Alert className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertDescription className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Note:</strong> The returns displayed are indicative and may vary from the latest data as they change daily based on market conditions. Please verify with us current rates through WhatsApp before investing.
          </AlertDescription>
        </Alert>

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search funds by name, AMC, or category..."
                className="pl-10"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <Tabs 
              defaultValue="all" 
              className="w-full md:w-auto"
              onValueChange={handleCategoryChange}
            >
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Funds Grid */}
        {filteredFunds.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {displayedFunds.map((fund, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-lg-colored transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{fund.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-muted-foreground">{fund.amc}</span>
                    <span className="text-muted-foreground">•</span>
                    <Badge variant="outline" className="text-xs">{fund.category}</Badge>
                  </div>
                </div>
                {/* <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < fund.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div> */}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* <div>
                  <div className="text-muted-foreground text-sm mb-1">Current NAV</div>
                  <div className="text-2xl font-bold">₹{fund.nav}</div>
                  <div className="flex items-center gap-1 text-success text-sm">
                    <ArrowUp className="h-3 w-3" />
                    <span>{fund.change}%</span>
                  </div>
                </div> */}
                <div>
                  <div className="text-muted-foreground text-sm mb-1">Min. Investment</div>
                  <div className="text-xl font-semibold">₹{fund.minInvestment.toLocaleString()}</div>
                  <Badge variant={getRiskColor(fund.risk)} className="mt-1 text-xs">
                    {fund.risk} Risk
                  </Badge>
                </div>
              </div>

              <div className="mb-4 p-3 bg-muted rounded-lg">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">1 Year</div>
                    <div className="font-semibold text-success">{fund.returns["1Y"]}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">3 Years</div>
                    <div className="font-semibold text-success">{fund.returns["3Y"]}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">5 Years</div>
                    <div className="font-semibold text-success">{fund.returns["5Y"]}%</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  className="flex-1"
                  onClick={() => openWhatsApp(fund.name, fund.amc, fund.category, fund.nav, fund.returns, fund.minInvestment)}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Invest Now
                </Button>
              </div>
            </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {searchQuery ? `No funds found matching "${searchQuery}"` : "No funds found in this category."}
            </p>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your search terms</p>
            )}
          </div>
        )}

        {/* Load More */}
        {hasMoreFunds && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={loadMoreFunds}
            >
              Load More Funds ({filteredFunds.length - displayCount} remaining)
            </Button>
          </div>
        )}
      </div>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
      
      {/* Aditya AI Chat */}
      <AdityaChat />
    </div>
  );
};

export default MutualFunds;