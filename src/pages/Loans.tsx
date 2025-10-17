import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wallet, GraduationCap, Car, CheckCircle2 } from "lucide-react";

const Loans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Loan Solutions
          </h1>
          <p className="text-muted-foreground">Financial flexibility for all your dreams and aspirations</p>
        </div>

        {/* Housing Loans Section - SBI */}
        <Card className="p-6 shadow-card mb-8 border-l-4 border-l-blue-500">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Home className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Housing Loans</h2>
            </div>
            <p className="text-sm text-muted-foreground">Powered by State Bank of India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Home Purchase Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹10L - ₹5Cr</CardDescription>
                <div className="text-2xl font-bold text-blue-500 mt-2">8.5% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Low interest rates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Up to 30 years tenure</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Tax benefits u/s 80C & 24</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Home Construction Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹15L - ₹3Cr</CardDescription>
                <div className="text-2xl font-bold text-blue-500 mt-2">8.7% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Phased disbursement</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Flexible repayment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Free property valuation</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Plot Purchase Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹5L - ₹2Cr</CardDescription>
                <div className="text-2xl font-bold text-blue-500 mt-2">9.0% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Quick approval</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Minimal documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Balance transfer facility</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </Card>

        {/* Business Loans Section - IDFC */}
        <Card className="p-6 shadow-card mb-8 border-l-4 border-l-purple-500">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Business Loans</h2>
            </div>
            <p className="text-sm text-muted-foreground">Powered by IDFC FIRST Bank</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">SME Business Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹5L - ₹50L</CardDescription>
                <div className="text-2xl font-bold text-purple-500 mt-2">11.5% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Unsecured loans</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Quick disbursal</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Flexible tenure</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Machinery Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹10L - ₹5Cr</CardDescription>
                <div className="text-2xl font-bold text-purple-500 mt-2">10.5% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Up to 90% funding</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Tax benefits</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Easy EMI options</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Working Capital Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹3L - ₹2Cr</CardDescription>
                <div className="text-2xl font-bold text-purple-500 mt-2">12.0% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Overdraft facility</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>No collateral</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Revolving credit</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </Card>

        {/* Personal Loans Section - Kotak */}
        <Card className="p-6 shadow-card mb-8 border-l-4 border-l-green-500">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold">Personal Loans</h2>
            </div>
            <p className="text-sm text-muted-foreground">Powered by Kotak Mahindra Bank</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Instant Personal Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹50K - ₹40L</CardDescription>
                <div className="text-2xl font-bold text-green-500 mt-2">10.99% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Instant approval</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Minimal docs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flexi loan option</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Debt Consolidation Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹1L - ₹35L</CardDescription>
                <div className="text-2xl font-bold text-green-500 mt-2">11.49% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Combine multiple debts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Lower EMI</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Extended tenure</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Medical Emergency Loan</CardTitle>
                <CardDescription className="font-semibold text-foreground">₹50K - ₹25L</CardDescription>
                <div className="text-2xl font-bold text-green-500 mt-2">11.99% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Quick disbursal</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Paperless process</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Special rates</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </Card>

        {/* Vehicle & Education Loans Section - HDB Financial */}
        <Card className="p-6 shadow-card mb-8 border-l-4 border-l-orange-500">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Car className="h-6 w-6 text-orange-500" />
              <h2 className="text-2xl font-bold">Vehicle & Education Loans</h2>
            </div>
            <p className="text-sm text-muted-foreground">Powered by HDB Financial Services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Car className="h-5 w-5 text-orange-500" />
                  Car Loan
                </CardTitle>
                <CardDescription className="font-semibold text-foreground">₹1L - ₹1Cr</CardDescription>
                <div className="text-2xl font-bold text-orange-500 mt-2">8.75% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Up to 90% funding</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Attractive interest rates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Part payment allowed</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Car className="h-5 w-5 text-orange-500" />
                  Two Wheeler Loan
                </CardTitle>
                <CardDescription className="font-semibold text-foreground">₹20K - ₹2L</CardDescription>
                <div className="text-2xl font-bold text-orange-500 mt-2">9.5% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Instant approval</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Minimal documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Doorstep service</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-orange-500" />
                  Domestic Education
                </CardTitle>
                <CardDescription className="font-semibold text-foreground">₹50K - ₹10L</CardDescription>
                <div className="text-2xl font-bold text-orange-500 mt-2">9.5% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Covers full fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Moratorium period</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Tax benefits</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow md:col-start-2">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-orange-500" />
                  International Education
                </CardTitle>
                <CardDescription className="font-semibold text-foreground">₹10L - ₹1.5Cr</CardDescription>
                <div className="text-2xl font-bold text-orange-500 mt-2">10.0% p.a. onwards</div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>No margin for &lt;₹20L</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Up to 15 years tenure</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Covers living expenses</span>
                  </li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Loans;
