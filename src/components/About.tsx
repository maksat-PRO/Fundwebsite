import { motion } from 'motion/react';
import { Award, Globe, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Engineering Roots',
    description: 'Founded in 2016 as a product engineering company with real delivery obligations and production systems.',
    gradient: 'from-[#007aff] to-[#00c6ff]',
  },
  {
    icon: Lightbulb,
    title: 'Platform Thinking',
    description: 'From custom software delivery to repeatable operating systems, dashboards, data rooms and workflows.',
    gradient: 'from-[#ff9500] to-[#ff6b00]',
  },
  {
    icon: Globe,
    title: 'International Direction',
    description: 'Public materials use anonymized case references; sensitive details are kept for controlled private access.',
    gradient: 'from-[#5856d6] to-[#af52de]',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ projects delivered and more than one million users reached through client-facing systems.',
    gradient: 'from-[#34c759] to-[#30d158]',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-[#34c759]/10 rounded-full mb-6">
              <span className="text-[13px] text-[#34c759] tracking-tight">About Maksat.PRO</span>
            </div>
            <h2 className="text-[40px] tracking-tight text-[#1d1d1f] mb-6 leading-[1.1]">
              A delivery company evolving into an AI-native operating platform
            </h2>
            <p className="text-[17px] text-[#86868b] mb-6 leading-[1.5]">
              Maksat.PRO was founded in 2016 as a hands-on product engineering team. The first years were focused on real systems for clients with operational pressure: event deadlines, participant flows, sports infrastructure, dashboards, mobile applications and integrations.
            </p>
            <p className="text-[17px] text-[#86868b] mb-8 leading-[1.5]">
              Today the company combines software delivery, AI workflows and venture infrastructure: founder intake, private access, data rooms, research workflows and portfolio operations.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  2016
                </div>
                <p className="text-[13px] text-[#86868b]">Founded</p>
              </div>
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  500+
                </div>
                <p className="text-[13px] text-[#86868b]">Projects Delivered</p>
              </div>
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  1M+
                </div>
                <p className="text-[13px] text-[#86868b]">Users Reached</p>
              </div>
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  P3
                </div>
                <p className="text-[13px] text-[#86868b]">Operating Platform</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start space-x-4 p-5 rounded-[20px] ios-glass border border-black/[0.08] hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <value.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[19px] tracking-tight text-[#1d1d1f] mb-1">
                    {value.title}
                  </h3>
                  <p className="text-[15px] text-[#86868b] leading-[1.5]">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
