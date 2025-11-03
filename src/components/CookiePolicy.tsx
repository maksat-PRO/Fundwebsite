import { motion } from 'motion/react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

export function CookiePolicy({ onBack }: CookiePolicyProps) {
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
            <Cookie className="w-8 h-8 text-[#007aff]" strokeWidth={1.5} />
            <h1 className="text-[40px] tracking-tight text-[#1d1d1f]">
              Cookie Policy
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
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">What Are Cookies?</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="p-5 bg-black/5 rounded-[20px]">
                <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-2">Essential Cookies</h3>
                <p className="text-[15px] text-[#86868b] leading-[1.6]">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.
                </p>
              </div>

              <div className="p-5 bg-black/5 rounded-[20px]">
                <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-2">Analytics Cookies</h3>
                <p className="text-[15px] text-[#86868b] leading-[1.6]">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website and services.
                </p>
              </div>

              <div className="p-5 bg-black/5 rounded-[20px]">
                <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-2">Functionality Cookies</h3>
                <p className="text-[15px] text-[#86868b] leading-[1.6]">
                  These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personal features.
                </p>
              </div>

              <div className="p-5 bg-black/5 rounded-[20px]">
                <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-2">Marketing Cookies</h3>
                <p className="text-[15px] text-[#86868b] leading-[1.6]">
                  These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Third-Party Cookies</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              In addition to our own cookies, we may use various third-party services that may set cookies on your device, including:
            </p>
            <ul className="space-y-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Google Analytics - for website analytics</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• LinkedIn - for social media integration</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Twitter - for social media integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Managing Cookies</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              You can control and manage cookies in various ways:
            </p>
            
            <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-3">Browser Settings</h3>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              Most browsers allow you to refuse or accept cookies through their settings. Please note that if you disable all cookies, some features of our website may not function properly.
            </p>

            <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-3">Opt-Out Tools</h3>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              You can opt out of third-party advertising cookies through industry opt-out programs:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Digital Advertising Alliance (DAA)</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• Network Advertising Initiative (NAI)</li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">• European Interactive Digital Advertising Alliance (EDAA)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Cookie Duration</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              Cookies can be either session cookies or persistent cookies:
            </p>
            <ul className="space-y-2">
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">
                • <strong>Session cookies</strong> are temporary and expire when you close your browser
              </li>
              <li className="text-[17px] text-[#86868b] leading-[1.6] ml-6">
                • <strong>Persistent cookies</strong> remain on your device until they expire or you delete them
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Updates to This Policy</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6]">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.
            </p>
          </section>

          <section>
            <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Contact Us</h2>
            <p className="text-[17px] text-[#86868b] leading-[1.6] mb-4">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <div className="p-4 bg-black/5 rounded-[16px]">
              <p className="text-[15px] text-[#1d1d1f]">Email: privacy@sportstechvc.com</p>
              <p className="text-[15px] text-[#1d1d1f]">Address: 123 Innovation Drive, San Francisco, CA 94105</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
