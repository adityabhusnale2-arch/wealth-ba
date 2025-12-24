import Navigation from '@/components/Navigation';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const Insurance = () => {
  const whatsappNumber = '917385416026';
  
  const openWhatsApp = (planName: string, coverage: string, features: string[], category: string) => {
    const featuresList = features.join(', ');
    const message = `Hi! I want to get a quote for *${planName}* (${category}).\n\nCoverage: ${coverage}\nFeatures: ${featuresList}\n\nCan you provide me with more details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const lifeInsurancePlans = [
    { name: 'Term Life Insurance', coverage: '₹50L - ₹2Cr', features: ['High coverage', 'Tax benefits', 'Flexible tenure'] },
    { name: 'ULIP Plans', coverage: '₹10L+', features: ['Investment + Insurance', 'Market-linked returns', 'Wealth creation'] },
    { name: 'Pension Plans', coverage: 'Customizable', features: ['Retirement planning', 'Regular income', 'Tax savings'] },
  ];

  const healthInsurancePlans = [
    { name: 'Individual Health Plan', coverage: '₹5L - ₹1Cr', features: ['Cashless treatment', 'No claim bonus', 'Pre & post hospitalization'] },
    { name: 'Family Floater Plan', coverage: '₹10L - ₹50L', features: ['Covers entire family', 'Maternity benefits', 'Daycare procedures'] },
    { name: 'Critical Illness Plan', coverage: '₹10L - ₹1Cr', features: ['Lump sum payout', 'Coverage for 30+ diseases', 'No claim restrictions'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Insurance Solutions</h1>
          <p className="text-sm md:text-base text-muted-foreground">Comprehensive life and health insurance coverage for you and your family</p>
        </div>


        {/* Life Insurance Section - HDFC Life */}
        <Card className="p-4 md:p-6 shadow-card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Life Insurance</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {lifeInsurancePlans.map((plan, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Coverage: </span>
                    <span className="font-semibold">{plan.coverage}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full"
                  onClick={() => openWhatsApp(plan.name, plan.coverage, plan.features, 'Life Insurance')}
                >
                  Get Quote
                </Button>
              </Card>
            ))}
          </div>
        </Card>

        {/* Health Insurance Section - ManipalCigna */}
        <Card className="p-4 md:p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-success" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Health Insurance</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {healthInsurancePlans.map((plan, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-shadow border-l-4 border-l-success">
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Coverage: </span>
                    <span className="font-semibold">{plan.coverage}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => openWhatsApp(plan.name, plan.coverage, plan.features, 'Health Insurance')}
                >
                  Get Quote
                </Button>
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

export default Insurance;
