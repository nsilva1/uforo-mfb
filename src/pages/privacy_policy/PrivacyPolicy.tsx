import { Mail, Phone, ArrowLeft } from 'lucide-react'
import logo from '../../assets/images/uforo_new_logo.png'
import { useNavigate } from 'react-router-dom';

const UforoPrivacyPolicy = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

      <div className='flex gap-2 cursor-pointer mb-3' onClick={() => navigate('/')}>
        <ArrowLeft />
        Back
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="px-6 py-8">
          <img src={logo} className="w-auto h-16" />     
        </div>

        <h2 className="text-2xl font-semibold text-center pb-1">
          Privacy Policy
        </h2>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8 text-gray-700 leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">1</span>
              Your Privacy Matters
            </h3>
            <p className="pl-0 sm:pl-10">
              Uforo MFB values your privacy and protects your personal and financial data in compliance with NDPR and other applicable laws.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">2</span>
              Information We Collect
            </h3>
            <div className="pl-0 sm:pl-10">
              <p className="mb-2">We collect information to provide and improve our services, including:</p>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li><strong>Personal info:</strong> Name, date of birth, ID numbers (BVN, Passport, National ID)</li>
                <li><strong>Contact info:</strong> Address, phone, email</li>
                <li><strong>Financial info:</strong> Account details, transaction history, loans</li>
                <li><strong>Employment/Business info:</strong> Employer or business details (for loans)</li>
                <li><strong>Digital info:</strong> Device details, IP address, app/website usage</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">3</span>
              How We Use Your Data
            </h3>
            <ul className="list-disc list-outside ml-5 sm:ml-15 space-y-1 pl-0 sm:pl-5">
              <li>Deliver and manage banking services</li>
              <li>Verify identity and meet regulatory requirements (KYC)</li>
              <li>Assess creditworthiness and prevent fraud</li>
              <li>Communicate updates and improve our digital services</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">4</span>
              Sharing Your Data
            </h3>
            <div className="pl-0 sm:pl-10">
              <p className="mb-2">We may share your information:</p>
              <ul className="list-disc list-outside ml-5 space-y-1 mb-3">
                <li>With regulators or authorities as required by law</li>
                <li>With trusted service providers supporting our app or website</li>
                <li>With your consent</li>
              </ul>
              <p className="font-semibold text-primary bg-primary/10 p-2 rounded border-l-4 border-primary inline-block">
                We do not sell your information.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">5</span>
              Data Security & Retention
            </h3>
            <ul className="list-disc list-outside ml-5 sm:ml-15 space-y-1 pl-0 sm:pl-5">
              <li>We use secure systems and limit staff access</li>
              <li>Data is kept only as needed for services, legal obligations, or dispute resolution</li>
              <li>When no longer needed, data is securely deleted or anonymized</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">6</span>
              Your Rights
            </h3>
            <div className="pl-0 sm:pl-10">
              <ul className="list-disc list-outside ml-5 space-y-1 mb-4">
                <li>Access, correct, or update your data</li>
                <li>Withdraw consent for certain uses</li>
                <li>Request deletion where allowed by law</li>
              </ul>
              <p className="text-sm bg-gray-100 p-3 rounded">
                Contact our Data Protection Officer: <a href="mailto:dpo@uforomfb.com.ng" className="text-primary font-bold hover:underline">dpo@uforomfb.com.ng</a>
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Section 7 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">7</span>
              Customer Responsibilities
            </h3>
            <ul className="list-disc list-outside ml-5 sm:ml-15 space-y-1 pl-0 sm:pl-5">
              <li>Provide accurate information</li>
              <li>Keep login credentials (passwords, PINs, OTPs) secure</li>
              <li>Update the bank if your info changes</li>
              <li>Use our services lawfully</li>
              <li>Report suspicious activity promptly</li>
              <li>Cooperate during verification or audits</li>
              <li>Respect other users' privacy</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">8</span>
              Cookies & Online Tracking
            </h3>
            <div className="pl-0 sm:pl-10">
              <p className="mb-2">Our app and website may use cookies or similar tech to enhance your experience.</p>
              <p>You can adjust settings, but some features may not work fully if disabled.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="bg-primary/10 text-primary text-sm font-bold mr-3 px-2.5 py-0.5 rounded">9</span>
              Questions or Feedback
            </h3>
            <div className="pl-0 sm:pl-10">
              <p className="mb-2 font-medium">For concerns about your privacy:</p>
              <div className="flex flex-col sm:flex-row sm:space-x-6 text-primary">
                <a href="mailto:info@uforomfb.com" className="hover:underline flex items-center">
                  <span className="mr-2"><Mail /></span> info@uforomfb.com
                </a>
                <a href="tel:+2348086352947" className="hover:underline flex items-center mt-2 sm:mt-0">
                  <span className="mr-2"><Phone /></span> +234 808-635-2947
                </a>
              </div>
            </div>
          </section>

        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 px-6 py-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} UFORO Microfinance Bank. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export { UforoPrivacyPolicy };