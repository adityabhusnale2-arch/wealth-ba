import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Wallet, Activity } from 'lucide-react';

const Admin = () => {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    } else if (userRole && userRole !== 'admin') {
      navigate('/dashboard');
    }
  }, [user, userRole, navigate]);

  if (!user || userRole !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total Users</h3>
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">20</div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Total AUM</h3>
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">₹15L</div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Active SIPs</h3>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">48</div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Monthly Inflow</h3>
              <Activity className="h-5 w-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-success">₹2.8L</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">Recent Users</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">User {i}</div>
                    <div className="text-sm text-muted-foreground">user{i}@example.com</div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">Top Performing Funds</h2>
            <div className="space-y-3">
              {[
                { name: 'HDFC Mid Cap Fund', return: '37%' },
                { name: 'ICICI Bluechip Fund', return: '32%' },
                { name: 'Kotak Emerging Equity', return: '28%' },
                { name: 'SBI Small Cap Fund', return: '26%' },
                { name: 'Aditya Birla Tax Relief', return: '24%' },
              ].map((fund, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div className="font-medium">{fund.name}</div>
                  <div className="text-success font-bold">{fund.return}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
