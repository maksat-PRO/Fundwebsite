import { motion } from 'motion/react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-14">
      <div className="ios-glass border-b border-black/[0.08] sticky top-14 z-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center text-[#007aff] hover:text-[#0051d5] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            <span className="text-[17px]">Back</span>
          </button>
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-[#007aff]" strokeWidth={1.5} />
            <h1 className="text-[40px] tracking-tight text-[#1d1d1f]">
              Terms of Service
            </h1>
          </div>
          <p className="text-[15px] text-[#86868b]">Last updated: November 3, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ios-glass rounded-[28px] p-8 border border-black/[0.08] space-y-8"
        >
          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Agreement to Terms</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              These Terms of Service ("Terms") govern your access to and use of the SportsTech Ventures website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              If you do not agree to these Terms, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Use of Services</h2>
            <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-3">Eligibility</h3>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              You must be at least 18 years old and have the legal capacity to enter into these Terms to use our services.
            </p>
            
            <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-3">Permitted Use</h3>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              You may use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="space-y-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Violate any applicable laws or regulations</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Infringe upon the rights of others</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Transmit harmful or malicious code</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Attempt to gain unauthorized access to our systems</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Interfere with the proper functioning of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Intellectual Property</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of SportsTech Ventures or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              You may not reproduce, distribute, modify, or create derivative works from any content on our website without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Submissions</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              If you submit any business plans, pitch decks, or other materials to us, you grant us a non-exclusive, worldwide, royalty-free license to review and evaluate such materials for investment purposes.
            </p>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              We are not obligated to treat such submissions as confidential unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Disclaimer of Warranties</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or secure.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Limitation of Liability</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              To the fullest extent permitted by law, SportsTech Ventures shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Investment Disclaimer</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              Information on our website does not constitute investment advice or an offer to invest. Past performance of our portfolio companies is not indicative of future results.
            </p>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              Investment opportunities are available only to accredited investors and qualified purchasers as defined by applicable securities laws.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Changes to Terms</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Contact Information</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <div className="p-4 bg-black/5 rounded-[16px]">
              <p className="text-[15px] text-[#1d1d1f]">Email: legal@sportstechvc.com</p>
              <p className="text-[15px] text-[#1d1d1f]">Address: 123 Innovation Drive, San Francisco, CA 94105</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
