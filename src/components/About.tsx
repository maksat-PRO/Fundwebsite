import { motion } from 'motion/react';
import { Award, Globe, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Founder-First',
    description: 'We partner with visionary founders and support them at every stage of their journey.',
    gradient: 'from-[#007aff] to-[#00c6ff]',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'We seek breakthrough technologies that push the boundaries of what\'s possible in sports.',
    gradient: 'from-[#ff9500] to-[#ff6b00]',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Our network spans 15+ countries, connecting founders with markets worldwide.',
    gradient: 'from-[#5856d6] to-[#af52de]',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Our portfolio includes 5 unicorns and 15+ successful exits across the sports ecosystem.',
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
              <span className="text-[13px] text-[#34c759] tracking-tight">About Us</span>
            </div>
            <h2 className="text-[40px] tracking-tight text-[#1d1d1f] mb-6 leading-[1.1]">
              Dedicated to the Future of Sports
            </h2>
            <p className="text-[17px] text-[#86868b] mb-6 leading-[1.5]">
              Founded by former athletes and technology leaders, we understand both the passion 
              of sports and the power of innovation. Our mission is to accelerate the development 
              of technologies that make sports safer, more accessible, and more exciting for 
              athletes and fans alike.
            </p>
            <p className="text-[17px] text-[#86868b] mb-8 leading-[1.5]">
              With over $250M in assets under management and a portfolio of 50+ companies, we're 
              not just investors – we're partners in building the future of sports technology.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  2018
                </div>
                <p className="text-[13px] text-[#86868b]">Founded</p>
              </div>
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  120+
                </div>
                <p className="text-[13px] text-[#86868b]">Team Members</p>
              </div>
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  $2.5B+
                </div>
                <p className="text-[13px] text-[#86868b]">Portfolio Valuation</p>
              </div>
              <div className="ios-glass p-4 rounded-[16px] border border-black/[0.08]">
                <div className="text-[32px] tracking-tight text-[#1d1d1f] mb-1">
                  15
                </div>
                <p className="text-[13px] text-[#86868b]">Successful Exits</p>
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
