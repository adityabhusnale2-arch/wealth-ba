import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Wallet, GraduationCap, Car, CheckCircle2, TrendingDown } from "lucide-react";
import WhatsAppChat from "@/components/WhatsAppChat";

const Loans = () => {
  const whatsappNumber = '917385416026';
  
  const openWhatsApp = (loanName: string, features: string[], category: string) => {
    const featuresList = features.join(', ');
    const message = `Hi! I want to apply for *${loanName}* (${category}).\n\nFeatures: ${featuresList}\n\nCan you provide me with more details about eligibility, interest rates, and the application process?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const housingLoans = [
    { 
      name: 'Home Purchase Loan', 
      features: ['Low interest rates', 'Up to 30 years tenure', 'Tax benefits u/s 80C & 24'] 
    },
    { 
      name: 'Home Construction Loan', 
      features: ['Phased disbursement', 'Flexible repayment', 'Free property valuation'] 
    },
    { 
      name: 'Plot Purchase Loan', 
      features: ['Quick approval', 'Minimal documentation', 'Balance transfer facility'] 
    }
  ];

  const businessLoans = [
    { 
      name: 'SME Business Loan', 
      features: ['Unsecured loans', 'Quick disbursal', 'Flexible tenure'] 
    },
    // { 
    //   name: 'Machinery Loan', 
    //   features: ['Up to 90% funding', 'Tax benefits', 'Easy EMI options'] 
    // },
    // { 
    //   name: 'Working Capital Loan', 
    //   features: ['Overdraft facility', 'No collateral', 'Revolving credit'] 
    // }
  ];

  const personalLoans = [
    { 
      name: 'Instant Personal Loan', 
      features: ['Instant approval', 'Minimal docs', 'Flexi loan option'] 
    },
    { 
      name: 'Debt Consolidation Loan', 
      features: ['Combine multiple debts', 'Lower EMI', 'Extended tenure'] 
    },
    { 
      name: 'Medical Emergency Loan', 
      features: ['Quick disbursal', 'Paperless process', 'Special rates'] 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Loan Solutions
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">Financial flexibility for all your dreams and aspirations</p>
        </div>

        {/* Housing Loans Section - SBI */}
        <Card className="p-4 md:p-6 shadow-card mb-6 md:mb-8 border-l-4 border-l-blue-500">
          <div className="mb-4 md:mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Home className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
              <h2 className="text-xl md:text-2xl font-bold">Housing Loans</h2>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {housingLoans.map((loan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Low Interest
                </Badge>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">{loan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 mb-4">
                    {loan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => openWhatsApp(loan.name, loan.features, 'Housing Loan')}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>

        {/* Business Loans Section - IDFC */}
        <Card className="p-4 md:p-6 shadow-card mb-6 md:mb-8 border-l-4 border-l-purple-500">
          <div className="mb-4 md:mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
              <h2 className="text-xl md:text-2xl font-bold">Business Loans</h2>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {businessLoans.map((loan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Low Interest
                </Badge>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">{loan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 mb-4">
                    {loan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => openWhatsApp(loan.name, loan.features, 'Business Loan')}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>

        {/* Personal Loans Section - Kotak */}
        <Card className="p-4 md:p-6 shadow-card mb-6 md:mb-8 border-l-4 border-l-green-500">
          <div className="mb-4 md:mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
              <h2 className="text-xl md:text-2xl font-bold">Personal Loans</h2>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {personalLoans.map((loan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Low Interest
                </Badge>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">{loan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 mb-4">
                    {loan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => openWhatsApp(loan.name, loan.features, 'Personal Loan')}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </div>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  );
};

export default Loans;
