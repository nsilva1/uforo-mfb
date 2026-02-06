
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Briefcase, MapPin, DollarSign, Users, CheckCircle2, Mail, Phone } from 'lucide-react'
import { JobApplicationForm } from '@/components/JobApplicationForm'
import logo from '../../assets/images/uforo_new_logo.png'
import { Link } from 'react-router-dom'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import xIcon from '../../assets/images/X-icon.png'

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
}

const jobPostings: JobPosting[] = [
  // {
  //   id: '1',
  //   title: 'Senior Loan Officer',
  //   department: 'Lending Operations',
  //   location: 'Mumbai, India',
  //   type: 'Full-time',
  //   salary: '₹8,00,000 - ₹12,00,000/year',
  //   description: 'Lead our lending operations and manage client relationships. You will assess loan applications, manage portfolios, and drive customer satisfaction.',
  //   requirements: [
  //     'Bachelor\'s degree in Finance, Economics, or related field',
  //     '5+ years of experience in microfinance or lending',
  //     'Strong analytical and communication skills',
  //     'Experience with loan management systems',
  //     'Knowledge of RBI regulations and compliance'
  //   ],
  //   benefits: [
  //     'Competitive salary and performance bonus',
  //     'Health insurance for you and family',
  //     'Professional development opportunities',
  //     'Flexible work arrangements',
  //     '20 days annual leave'
  //   ]
  // },
  // {
  //   id: '2',
  //   title: 'Product Manager',
  //   department: 'Product & Innovation',
  //   location: 'Bangalore, India',
  //   type: 'Full-time',
  //   salary: '₹10,00,000 - ₹15,00,000/year',
  //   description: 'Drive product strategy and development for our microfinance platform. Collaborate with engineering and design teams to create innovative solutions.',
  //   requirements: [
  //     'Bachelor\'s degree in any field',
  //     '4+ years of product management experience',
  //     'Experience in fintech or financial services',
  //     'Strong data analysis and problem-solving skills',
  //     'Excellent stakeholder management abilities'
  //   ],
  //   benefits: [
  //     'Competitive salary and stock options',
  //     'Comprehensive health coverage',
  //     'Learning and development budget',
  //     'Remote work flexibility',
  //     '25 days annual leave'
  //   ]
  // },
  // {
  //   id: '3',
  //   title: 'Software Engineer (Full Stack)',
  //   department: 'Engineering',
  //   location: 'Bangalore, India',
  //   type: 'Full-time',
  //   salary: '₹12,00,000 - ₹18,00,000/year',
  //   description: 'Build scalable and secure fintech solutions. Work with modern tech stack to develop features for our lending platform and mobile applications.',
  //   requirements: [
  //     'Bachelor\'s degree in Computer Science or related field',
  //     '3+ years of full-stack development experience',
  //     'Proficiency in React, Node.js, and databases',
  //     'Understanding of financial systems and security',
  //     'Experience with cloud platforms (AWS/GCP)'
  //   ],
  //   benefits: [
  //     'Highly competitive salary with bonus',
  //     'Stock option plans',
  //     'Premium health and wellness benefits',
  //     'Unlimited learning budget',
  //     'Remote-first culture'
  //   ]
  // },
  // {
  //   id: '4',
  //   title: 'Customer Success Manager',
  //   department: 'Customer Support',
  //   location: 'Delhi, India',
  //   type: 'Full-time',
  //   salary: '₹6,50,000 - ₹9,50,000/year',
  //   description: 'Be the voice of our customers. Support client onboarding, manage relationships, and ensure exceptional service delivery.',
  //   requirements: [
  //     'Bachelor\'s degree in any field',
  //     '3+ years of customer success or support experience',
  //     'Excellent communication and empathy skills',
  //     'Experience with CRM systems',
  //     'Bilingual advantage (Hindi/English)'
  //   ],
  //   benefits: [
  //     'Competitive salary with incentives',
  //     'Health insurance coverage',
  //     'Career advancement opportunities',
  //     'Flexible work schedules',
  //     '20 days annual leave'
  //   ]
  // },
  // {
  //   id: '5',
  //   title: 'Risk & Compliance Officer',
  //   department: 'Compliance',
  //   location: 'Mumbai, India',
  //   type: 'Full-time',
  //   salary: '₹9,00,000 - ₹13,00,000/year',
  //   description: 'Ensure regulatory compliance and manage risk frameworks. Develop policies and procedures to maintain our high standards of governance.',
  //   requirements: [
  //     'Bachelor\'s degree in Finance, Law, or Business',
  //     '6+ years in risk management or compliance',
  //     'Deep knowledge of RBI guidelines and AML/KYC',
  //     'Strong audit and documentation skills',
  //     'CAIIB or similar certification preferred'
  //   ],
  //   benefits: [
  //     'Excellent salary package',
  //     'Comprehensive insurance',
  //     'Professional certifications support',
  //     'Flexible arrangements',
  //     '25 days annual leave'
  //   ]
  // },
  // {
  //   id: '6',
  //   title: 'Data Analyst',
  //   department: 'Analytics',
  //   location: 'Bangalore, India',
  //   type: 'Full-time',
  //   salary: '₹7,00,000 - ₹10,00,000/year',
  //   description: 'Drive data-driven decision making. Analyze customer data, identify trends, and build dashboards to support business growth.',
  //   requirements: [
  //     'Bachelor\'s degree in Mathematics, Statistics, or Computer Science',
  //     '2+ years of data analysis experience',
  //     'Proficiency in SQL, Python, and BI tools',
  //     'Experience with financial data analysis',
  //     'Strong visualization skills'
  //   ],
  //   benefits: [
  //     'Competitive salary',
  //     'Health and wellness benefits',
  //     'Learning opportunities',
  //     'Collaborative environment',
  //     '20 days annual leave'
  //   ]
  // }
]

const cultureValues = [
  {
    icon: Users,
    title: 'Inclusive Culture',
    description: 'We celebrate diversity and create an environment where everyone can thrive and contribute their best work.'
  },
  {
    icon: Briefcase,
    title: 'Growth Opportunities',
    description: 'Invest in your professional development with mentorship, training, and clear career advancement paths.'
  },
  {
    icon: CheckCircle2,
    title: 'Impact-Driven Work',
    description: 'Be part of a mission to empower millions. Your work directly contributes to financial inclusion.'
  }
]

export const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

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
                    <Link to="/" className="text-md text-foreground hover:text-secondary transition-colors">
                      Careers
                    </Link>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
                </div>
              </div>
            </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-background via-background to-muted/30 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Join Our Mission
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-pretty">
              Build a career with purpose. Help us empower millions of entrepreneurs and small business owners through accessible microfinance.
            </p>
          </div>

          {/* Culture Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {cultureValues.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="p-6 border border-border/50 hover:border-secondary/50 transition-colors">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Open Positions</h2>
          <p className="text-lg text-foreground/70 mb-12">
            We're always looking for talented individuals to join our growing team. Browse our current openings below.
          </p>

          <div>
            {
              jobPostings.length === 0 && (
                <div>
                  <section className="bg-white py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">No Open Positions</h2>
        </div>
      </section>
                </div>
              )
            }
          </div>

          <div className="grid gap-4">
            {jobPostings.length > 0 && jobPostings.map((job) => (
              <Card
                key={job.id}
                className="p-6 border border-border/50 hover:border-secondary/50 transition-all cursor-pointer hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">
                        {job.type}
                      </div>
                    </div>
                    <p className="text-foreground/80 text-sm mb-3">{job.description}</p>
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedJob(job)
                      setShowApplicationForm(true)
                    }}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground whitespace-nowrap gap-2"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Expandable Details */}
                {selectedJob?.id === job.id && showApplicationForm && (
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-foreground/70 flex gap-2">
                              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-3">What We Offer</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-foreground/70 flex gap-2">
                              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border/50 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary">{selectedJob.title}</h2>
                <p className="text-sm text-foreground/70">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button
                onClick={() => {
                  setShowApplicationForm(false)
                  setSelectedJob(null)
                }}
                className="text-foreground/50 hover:text-foreground text-2xl"
              >
                ×
              </button>
            </div>
            <JobApplicationForm job={selectedJob} onClose={() => setShowApplicationForm(false)} />
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Don't See Your Role?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            We're always interested in talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Send Your Resume <ArrowRight className="w-4 h-4" />
          </Button>
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
