import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { bankingServices, whyChooseUs, testimonials } from "@/lib/constants"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">₹</span>
              </div>
              <span className="font-bold text-xl text-primary">Uforo MFB</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-md text-foreground hover:text-secondary transition-colors">
                Services
              </a>
              <a href="#benefits" className="text-md text-foreground hover:text-secondary transition-colors">
                Why Us
              </a>
              <a href="#testimonials" className="text-md text-foreground hover:text-secondary transition-colors">
                Testimonials
              </a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Banking Made Simple for Every Nigerian
              </h1>
              <p className="text-lg text-foreground/80 mb-8 text-pretty">
                Experience seamless banking with Uforo MFB. Save, borrow, transfer, and grow your money with Nigeria's most trusted microfinance bank.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Open Account Now <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="mt-10 flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Instant Approval</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="space-y-6">
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                  <p className="text-sm text-foreground/60">Entrepreneurs Empowered</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="font-bold text-primary mb-1">₦100M+</div>
                    <p className="text-xs text-foreground/60">Total Disbursed</p>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <div className="font-bold text-secondary mb-1">98%</div>
                    <p className="text-xs text-foreground/60">Repayment Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tailored Financial Solutions</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From savings to loans, transfers to payments — we've got all your banking needs covered with simple, transparent services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bankingServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="bg-background border-border hover:border-secondary/50 transition-colors p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why Choose Uforo MFB?</h2>
              <div className="space-y-6">
                {whyChooseUs.map((benefit, idx) => {
                  const Icon = benefit.icon
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary/10">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-1">{benefit.title}</h3>
                        <p className="text-sm text-foreground/70">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <Card className="bg-linear-to-br from-secondary/10 to-secondary/5 border-secondary/30 p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">Start Banking Today</div>
                  <p className="text-foreground/70">Open a free account in less than 5 minutes with just your BVN and phone number.</p>
                </div>
                <div className="h-px bg-secondary/20" />
                <ul>
                    <li className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" />No minimum balance required</li>
                    <li className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" />Free debit card on signup</li>
                    <li className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" />Up to 15% interest on savings</li>
                    <li className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" />Instant account activation</li>
                </ul>
                <div className="h-px bg-secondary/20" />
                <p className="text-foreground/70 mb-0">Already have an account?</p>
                <p className="text-3xl font-bold text-secondary mb-0">*347*555#</p>
                <p className="text-foreground/70">USSD Banking</p>                
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories from Our Customers</h2>
            <p className="text-lg text-foreground/70">Real people, real businesses, real growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-background border-border p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-secondary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">{'"' + testimonial.content + '"'}</p>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have already transformed their dreams into reality
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">₹</span>
                </div>
                <span className="font-bold text-primary">Uforo MFB</span>
              </div>
              {/* <p className="text-sm text-foreground/60"></p> */}
              <address className="font-bold">
                <p className="text-sm text-foreground/60 mt-4">No 4, Market Road</p>
                <p className="text-sm text-foreground/60">Ikpe Ikot Nkon</p>
                <p className="text-sm text-foreground/60">Ini LGA, Akwa-Ibom State</p>
                <p className="text-sm text-foreground/60">Nigeria</p>
                <p className="text-sm text-foreground/60">Email: info@uforomfb.com</p>
              </address>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Personal Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Business Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Savings Account
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link to="/privacy-policy" className="hover:text-secondary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/data-protection-policy" className="hover:text-secondary transition-colors">
                    Data Protection Policy
                  </Link>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Compliance
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} UforoMFB. All rights reserved. Empowering Financial Inclusion. Transforming Lives.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
