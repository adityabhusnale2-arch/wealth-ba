import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const Insurance = () => {
  const lifeInsurancePlans = [
    { name: 'Term Life Insurance', coverage: '₹50L - ₹2Cr', premium: '₹500/month onwards', features: ['High coverage', 'Tax benefits', 'Flexible tenure'] },
    { name: 'ULIP Plans', coverage: '₹10L+', premium: '₹2,500/month onwards', features: ['Investment + Insurance', 'Market-linked returns', 'Wealth creation'] },
    { name: 'Pension Plans', coverage: 'Customizable', premium: '₹5,000/month onwards', features: ['Retirement planning', 'Regular income', 'Tax savings'] },
  ];

  const healthInsurancePlans = [
    { name: 'Individual Health Plan', coverage: '₹5L - ₹1Cr', premium: '₹8,000/year onwards', features: ['Cashless treatment', 'No claim bonus', 'Pre & post hospitalization'] },
    { name: 'Family Floater Plan', coverage: '₹10L - ₹50L', premium: '₹15,000/year onwards', features: ['Covers entire family', 'Maternity benefits', 'Daycare procedures'] },
    { name: 'Critical Illness Plan', coverage: '₹10L - ₹1Cr', premium: '₹12,000/year onwards', features: ['Lump sum payout', 'Coverage for 30+ diseases', 'No claim restrictions'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Insurance Solutions</h1>
          <p className="text-muted-foreground">Comprehensive life and health insurance coverage for you and your family</p>
        </div>


        {/* Life Insurance Section - HDFC Life */}
        <Card className="p-6 shadow-card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Life Insurance</h2>
              <p className="text-sm text-muted-foreground">Powered by HDFC Life Insurance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lifeInsurancePlans.map((plan, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Coverage: </span>
                    <span className="font-semibold">{plan.coverage}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Premium: </span>
                    <span className="font-semibold text-primary">{plan.premium}</span>
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
                <Button className="w-full">Get Quote</Button>
              </Card>
            ))}
          </div>
        </Card>

        {/* Health Insurance Section - ManipalCigna */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-success" />
            <div>
              <h2 className="text-2xl font-bold">Health Insurance</h2>
              <p className="text-sm text-muted-foreground">Powered by ManipalCigna Health Insurance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {healthInsurancePlans.map((plan, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-shadow border-l-4 border-l-success">
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Coverage: </span>
                    <span className="font-semibold">{plan.coverage}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Premium: </span>
                    <span className="font-semibold text-success">{plan.premium}</span>
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
                <Button variant="outline" className="w-full">Get Quote</Button>
              </Card>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Insurance;
