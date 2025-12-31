import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Sparkles, Target, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import heroImage from "@/assets/hero-finance.jpg";
const Index = () => {
  const whatsappNumber = '917385416026';
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [{
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Get personalized investment recommendations based on your profile, goals, and risk appetite."
  }, {
    icon: Target,
    title: "Goal-Based Planning",
    description: "Plan for retirement, education, home purchase, or any financial goal with smart fund allocation."
  }, {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track your portfolio with live NAV updates from top AMCs including HDFC, ICICI, and SBI."
  }, {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade security with 2FA authentication and encrypted transactions for your peace of mind."
  }];
  const stats = [{
    value: "₹20Lac+",
    label: "Assets Under Management"
  }, {
    value: "25+",
    label: "Active Investors"
  }, {
    value: "200+",
    label: "Mutual Funds"
  }, {
    value: "99%",
    label: "Satisfaction Rate"
  }];
  const partners = ["HDFC AMC", "Tata AMC", "Nippon India AMC"];
  

  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">AI-Powered Investment Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Invest Smarter with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI Guidance
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Build wealth systematically with expert-curated mutual funds, SIP calculators, and personalized AI recommendations. Start your investment journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 relative z-20">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg-colored" onClick={() => openWhatsApp('Hi! I want to start investing. Can you guide me through the investment process and help me get started?')}>
                    Start Investing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                <Link to="/calculator" className="relative z-20">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Try SIP Calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => <div key={index}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>)}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-3xl blur-3xl pointer-events-none"></div>
              <img src={heroImage} alt="Investment Dashboard" className="relative rounded-3xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Grow Your Wealth
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and insights to make informed investment decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="p-6 hover:shadow-lg transition-shadow shadow-card">
                  <div className="h-12 w-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading AMCs</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => <div key={index} className="px-6 py-3 text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                {partner}
              </div>)}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-hero text-white text-center shadow-2xl">
            <TrendingUp className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join our growing community of smart investors building wealth the smarter way — with the power of AI.</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="shadow-lg"
              onClick={() => openWhatsApp('Hi! I want to open a free investment account. Can you guide me through the account opening process and help me get started?')}
            >
              Open Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Wealth BA
                </span>
              </div>
              <p className="text-muted-foreground">
                AI-powered investment platform for smart wealth creation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/mutual-funds" className="hover:text-primary">Mutual Funds</Link></li>
                <li><Link to="/calculator" className="hover:text-primary">SIP Calculator</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary">Portfolio</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 InvestAI. All rights reserved. Mutual fund investments are subject to market risks.</p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>;
};
export default Index;