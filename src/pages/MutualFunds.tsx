import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, ArrowUp, Star } from "lucide-react";

const MutualFunds = () => {
  const funds = [
    {
      name: "HDFC Mid Cap Opportunities Fund",
      amc: "HDFC AMC",
      category: "Equity - Mid Cap",
      nav: 81.05,
      change: 2.34,
      returns: {
        "1Y": 18.5,
        "3Y": 22.8,
        "5Y": 19.3,
      },
      risk: "High",
      rating: 5,
      minInvestment: 5000,
    },
    {
      name: "ICICI Prudential Bluechip Fund",
      amc: "ICICI Prudential",
      category: "Equity - Large Cap",
      nav: 72.40,
      change: 1.87,
      returns: {
        "1Y": 15.2,
        "3Y": 18.9,
        "5Y": 17.1,
      },
      risk: "Moderately High",
      rating: 5,
      minInvestment: 5000,
    },
    {
      name: "SBI Small Cap Fund",
      amc: "SBI Mutual Fund",
      category: "Equity - Small Cap",
      nav: 102.93,
      change: 3.21,
      returns: {
        "1Y": 24.8,
        "3Y": 28.5,
        "5Y": 21.2,
      },
      risk: "Very High",
      rating: 4,
      minInvestment: 5000,
    },
    {
      name: "Aditya Birla Sun Life Tax Relief 96",
      amc: "Aditya Birla Sun Life",
      category: "Equity - ELSS",
      nav: 66.23,
      change: 1.92,
      returns: {
        "1Y": 16.7,
        "3Y": 20.4,
        "5Y": 18.9,
      },
      risk: "High",
      rating: 4,
      minInvestment: 500,
    },
    {
      name: "Tata Digital India Fund",
      amc: "Tata AMC",
      category: "Equity - Sectoral",
      nav: 48.72,
      change: 4.15,
      returns: {
        "1Y": 28.3,
        "3Y": 32.1,
        "5Y": 25.7,
      },
      risk: "Very High",
      rating: 4,
      minInvestment: 5000,
    },
    {
      name: "Kotak Equity Opportunities Fund",
      amc: "Kotak Mahindra",
      category: "Equity - Multi Cap",
      nav: 195.84,
      change: 2.08,
      returns: {
        "1Y": 17.9,
        "3Y": 21.5,
        "5Y": 19.8,
      },
      risk: "High",
      rating: 5,
      minInvestment: 5000,
    },
  ];

  const categories = ["All", "Equity", "Debt", "Hybrid", "ELSS"];

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Mutual Funds</h1>
          <p className="text-muted-foreground">Browse and invest in top-performing mutual funds from leading AMCs</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search funds by name, AMC, or category..."
                className="pl-10"
              />
            </div>
            <Tabs defaultValue="All" className="w-full md:w-auto">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Funds Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {funds.map((fund, index) => (
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
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < fund.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-muted-foreground text-sm mb-1">Current NAV</div>
                  <div className="text-2xl font-bold">₹{fund.nav}</div>
                  <div className="flex items-center gap-1 text-success text-sm">
                    <ArrowUp className="h-3 w-3" />
                    <span>{fund.change}%</span>
                  </div>
                </div>
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
                <Button className="flex-1">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Invest Now
                </Button>
                <Button variant="outline">Details</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Funds
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;