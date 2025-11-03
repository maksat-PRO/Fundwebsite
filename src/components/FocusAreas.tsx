import { motion } from 'motion/react';
import { 
  Activity, 
  Brain, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Gamepad2 
} from 'lucide-react';

const focusAreas = [
  {
    icon: Activity,
    title: 'Performance Analytics',
    description: 'AI-powered platforms analyzing athlete performance, biomechanics, and training optimization.',
    gradient: 'from-[#007aff] to-[#00c6ff]',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems for predictive analytics, injury prevention, and personalized coaching.',
    gradient: 'from-[#5856d6] to-[#af52de]',
  },
  {
    icon: Smartphone,
    title: 'Wearable Tech',
    description: 'Next-generation sensors and devices for real-time health and performance monitoring.',
    gradient: 'from-[#34c759] to-[#30d158]',
  },
  {
    icon: Users,
    title: 'Fan Engagement',
    description: 'Platforms revolutionizing how fans connect with teams, athletes, and sporting events.',
    gradient: 'from-[#ff9500] to-[#ff6b00]',
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Esports',
    description: 'Infrastructure and platforms powering the future of competitive gaming and virtual sports.',
    gradient: 'from-[#007aff] to-[#5856d6]',
  },
  {
    icon: TrendingUp,
    title: 'Sports Commerce',
    description: 'E-commerce, marketplace, and fintech solutions transforming sports business models.',
    gradient: 'from-[#ff2d55] to-[#ff375f]',
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-[#007aff]/10 rounded-full mb-4">
            <span className="text-[13px] text-[#007aff] tracking-tight">Investment Focus</span>
          </div>
          <h2 className="text-[48px] tracking-tight text-[#1d1d1f] mb-4">
            Where We Invest
          </h2>
          <p className="text-[19px] text-[#86868b] max-w-2xl mx-auto leading-[1.4]">
            We focus on early to growth-stage companies building transformative 
            solutions across the sports technology ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass p-6 rounded-[20px] border border-black/[0.08] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${area.gradient} rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <area.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-2">
                {area.title}
              </h3>
              <p className="text-[15px] text-[#86868b] leading-[1.5]">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
