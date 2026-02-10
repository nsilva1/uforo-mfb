import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Target, Users, Lightbulb, Award, Globe, ShieldCheck, UsersRound, Mail, Phone } from "lucide-react"
import logo from '../../assets/images/uforo_new_logo.png'
import { Link } from "react-router-dom"
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import xIcon from '../../assets/images/X-icon.png'


export const About = () => {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white backdrop-blur">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={logo} className="w-auto h-16" />
                  </div>
                  <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-md text-foreground hover:text-secondary transition-colors">
                      Home
                    </Link>
                    <Link to="/about" className="text-md text-foreground hover:text-secondary transition-colors">
                      About
                    </Link>
                    <Link to="/careers" className="text-md text-foreground hover:text-secondary transition-colors">
                      Careers
                    </Link>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
                </div>
              </div>
            </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-background via-background to-muted/30 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Our Story: Banking for Everyone
            </h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-pretty">
              We believe financial access is a fundamental right. Founded on the principle that every entrepreneur
              deserves an equal opportunity to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Empower Every Entrepreneur
              </h2>
              <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                Our mission is to provide affordable, convenient, and reliable financial services to low income individuals and communities, helping them to overcome poverty and achieve economic self-sufficiency
              </p>
              {/* <p className="text-foreground/70 mb-8">
                Through innovative lending products, personalized support, and a commitment to transparency, we empower
                individuals to transform their entrepreneurial dreams into thriving businesses.
              </p> */}
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <Card className="bg-linear-to-br from-secondary/10 to-secondary/5 border-secondary/30 p-8">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">100K+</div>
                  <p className="text-foreground/70">Entrepreneurs Empowered</p>
                </div>
                <div className="h-px bg-secondary/20" />
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">&#8358;100M+</div>
                  <p className="text-foreground/70">Total Disbursed</p>
                </div>
                <div className="h-px bg-secondary/20" />
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-foreground/70">Repayment Success Rate</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/30 p-8">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <p className="text-foreground/70">Lives to Impact by 2030</p>
                </div>
                <div className="h-px bg-primary/20" />
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                  <p className="text-foreground/70">Regions Served</p>
                </div>
                <div className="h-px bg-primary/20" />
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100% Transparent</div>
                  <p className="text-foreground/70">Operations & Lending</p>
                </div>
              </div>
            </Card>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                A Country Without Financial Barriers
              </h2>
              <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                To be a leading Microfinance Bank in Nigeria, empowering low-income individuals and communities to achieve economic stability and prosperity
              </p>
              {/* <p className="text-foreground/70 mb-8">
                By 2030, we aim to reach and empower 10 million entrepreneurs across 50+ regions, demonstrating that
                financial inclusion is not just a business opportunity but a moral imperative for sustainable global
                development.
              </p> */}
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent gap-2">
                Join Our Mission <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              These principles guide every decision we make and define who we are as an organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty in all our dealings. Trust is the foundation of our relationships with customers and stakeholders.",
              },
              {
                icon: Users,
                title: "Customer Centricity",
                description:
                  "Every decision starts with our customers. We listen to their needs, adapt our services, and measure success by the impact we create in their lives.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We continuously innovate to deliver better, faster, and more affordable financial solutions. Technology and creativity drive our evolution.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality service in everything we do. Excellence is not a destination; it's a journey we're always on.",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                description:
                  "Building lasting relationships through unwavering integrity, transparent practices, and robust security to protect what matters most to you.",
              },
              {
                icon: UsersRound,
                title: "Teamwork",
                description:
                  "Uniting our diverse expertise to deliver exceptional service, collaborating seamlessly to help you achieve your financial ambitions.",
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="bg-background/50 border-border hover:border-secondary/50 transition-all hover:shadow-lg p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From a vision to transform financial inclusion to becoming a trusted partner for thousands
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg max-w-3xl mx-auto">Uforo Microfinance Bank Limited is a unit microfinance bank based in Ikpe Ikot Nkon, Ini LGA of AkwaIbom State. It was incorporated as a private limited liability company by the Corporate Affairs Commission on the 14th of November, 2023 with a fully paid-up capital and approved by the Central Bank of Nigeria to operate as a Microfinance Bank on 5th of July,2024. Since its incorporation, the bank has taken giant strides to compete favourably in the banking sector by developing unrivalled capacity for easy and affordable financial access and services.</p>
          </div>

          {/* <div className="space-y-8">
            {[
              {
                year: "2018",
                title: "The Beginning",
                description:
                  "MicroBank was founded with a small team and a big dream: to revolutionize access to microfinance in underserved communities.",
              },
              {
                year: "2019",
                title: "First Milestone",
                description:
                  "Reached our first 5,000 customers and disbursed ₹5 crore in loans, proving the demand for accessible microfinance.",
              },
              {
                year: "2021",
                title: "Digital Transformation",
                description:
                  "Launched our mobile app and digital lending platform, making banking accessible from any phone, anywhere.",
              },
              {
                year: "2023",
                title: "Rapid Expansion",
                description:
                  "Expanded to 30+ regions and reached 40,000 entrepreneurs. Introduced group lending products for community-based growth.",
              },
              {
                year: "2024",
                title: "Recognition",
                description:
                  "Recognized as one of India's most innovative fintech companies. Achieved 98% loan repayment rate, setting industry standards.",
              },
              {
                year: "2025",
                title: "Today & Beyond",
                description:
                  "Serving 50,000+ entrepreneurs with ₹15 crore+ disbursed. Committed to reaching 10 million lives by 2030.",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full mt-1.5" />
                  {idx < 5 && <div className="w-1 h-24 bg-secondary/30" />}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-bold text-secondary mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Team Culture Section */}
      {/* <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Culture & Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We're more than just an organization; we're a community of changemakers united by a common purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-background border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Our Team Chooses MicroBank</h3>
              <ul className="space-y-4">
                {[
                  "Purpose-driven work that creates tangible impact",
                  "Collaborative culture where ideas flourish",
                  "Continuous learning and professional growth",
                  "Diversity and inclusion at the core",
                  "Work-life balance and employee wellbeing",
                  "Competitive compensation and benefits",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-linear-to-br from-secondary/10 to-secondary/5 border-secondary/30 p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Impact by Numbers</h3>
              <div className="space-y-6">
                <div className="border-b border-secondary/20 pb-6">
                  <div className="text-3xl font-bold text-secondary mb-2">350+</div>
                  <p className="text-foreground/70">Team Members Across India</p>
                </div>
                <div className="border-b border-secondary/20 pb-6">
                  <div className="text-3xl font-bold text-secondary mb-2">50%</div>
                  <p className="text-foreground/70">Women in Leadership Roles</p>
                </div>
                <div className="border-b border-secondary/20 pb-6">
                  <div className="text-3xl font-bold text-secondary mb-2">5000+</div>
                  <p className="text-foreground/70">Hours of Training Delivered Annually</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-foreground/70">Employees With Growth Path</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Social Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Social Impact Initiatives</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Beyond lending, we invest in community development and sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Literacy",
                description:
                  "We provide free financial education programs to help entrepreneurs make informed decisions and manage their finances effectively.",
                stats: "25,000+ Lives Educated",
              },
              {
                title: "Skill Development",
                description:
                  "Training programs in business management, digital marketing, and financial planning to help entrepreneurs scale their businesses.",
                stats: "10,000+ Skills Trained",
              },
              {
                title: "Women Empowerment",
                description:
                  "Special programs dedicated to supporting women entrepreneurs with mentoring, networking, and preferential lending terms.",
                stats: "15,000+ Women Supported",
              },
            ].map((initiative, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-secondary/50 transition-colors p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{initiative.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm">{initiative.description}</p>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-secondary">{initiative.stats}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Be Part of Our Mission</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether as a customer, partner, or team member, join us in creating financial inclusion and empowering
            entrepreneurs across the nation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
              Open Account <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
                <img src={logo} className="w-auto h-12" />
              </div>
              {/* <p className="text-sm text-foreground/60"></p> */}
              <address className="font-bold">
                <p className="text-sm text-foreground/60 mt-4">No 4, Market Road</p>
                <p className="text-sm text-foreground/60">Ikpe Ikot Nkon</p>
                <p className="text-sm text-foreground/60">Ini LGA, Akwa-Ibom State</p>
                <p className="text-sm text-foreground/60 mb-3">Nigeria</p>
                <p className="text-sm text-foreground/60 flex gap-2"><Mail className="h-5 w-5" /> info@uforomfb.com</p>
                <p className="text-sm text-foreground/60 flex gap-2"><Phone className="h-5 w-5" /> +234 808 635 2947</p>
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
                  <Link to="/about" className="hover:text-secondary transition-colors">
                    About Us
                  </Link>
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
              <h4 className="font-bold text-primary mb-4">Socials</h4>
              <ul className="flex space-x-4 text-sm text-foreground/70 items-center">
                <li>
                  <a href="https://web.facebook.com/profile.php?id=61580525894673" target="_blank" className="hover:text-secondary transition-colors">
                    <img src={facebook} className="w-8 h-8" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/uforomicrofinancebank/" target='_blank' className="hover:text-secondary transition-colors">
                    <img src={instagram} className="w-8 h-8" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/uforomfb" target='_blank' className="hover:text-secondary transition-colors">
                    <img src={xIcon} className="w-8 h-8" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60 flex flex-col md:flex-row gap-3 justify-center">
            <p>&copy; {new Date().getFullYear()} UforoMFB. All rights reserved. Empowering Financial Inclusion. Transforming Lives.</p>
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
