import { motion } from 'motion/react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
            <Shield className="w-8 h-8 text-[#007aff]" strokeWidth={1.5} />
            <h1 className="text-[40px] tracking-tight text-[#1d1d1f]">
              Privacy Policy
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
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Introduction</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              SportsTech Ventures ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Information We Collect</h2>
            <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-3">Personal Information</h3>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Contact us via email or contact forms</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Subscribe to our newsletter</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Submit investment inquiries or pitch decks</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Apply for job positions</li>
            </ul>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              This information may include your name, email address, phone number, company information, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-3">Automatically Collected Information</h3>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="space-y-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• IP address and location data</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Browser type and version</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Pages visited and time spent</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">How We Use Your Information</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Respond to your inquiries and provide customer support</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Process and evaluate investment opportunities</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Review job applications and conduct recruitment</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Send newsletters and marketing communications (with your consent)</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Improve our website and services</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Data Security</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Your Rights</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="space-y-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• The right to access your personal information</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• The right to correct inaccurate information</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• The right to delete your personal information</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• The right to object to processing</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Contact Us</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-black/5 rounded-[16px]">
              <p className="text-[15px] text-[#1d1d1f]">Email: privacy@sportstechvc.com</p>
              <p className="text-[15px] text-[#1d1d1f]">Address: 123 Innovation Drive, San Francisco, CA 94105</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
