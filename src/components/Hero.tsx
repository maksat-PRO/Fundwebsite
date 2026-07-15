import { motion } from 'motion/react';
import { ArrowRight, Database, Zap } from 'lucide-react';

const stats = [
  { value: '2016', label: 'Founded as a product engineering company' },
  { value: '500+', label: 'Delivered software and platform projects' },
  { value: '1M+', label: 'Users reached through client-facing systems' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-[#f5f5f7]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full ios-glass border border-black/[0.08]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#007aff] animate-pulse" />
              <span className="text-[13px] text-[#86868b] tracking-tight">Product engineering roots. AI-native venture infrastructure.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight text-[#1d1d1f]">
                From software delivery to{' '}
                <span className="bg-gradient-to-r from-[#007aff] via-[#5856d6] to-[#af52de] bg-clip-text text-transparent">
                  AI-native venture infrastructure
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[19px] text-[#86868b] leading-[1.4] max-w-xl"
            >
              Founded in 2016, Maksat.PRO started as a hands-on product engineering company. Today we build the operating layer behind CVC programs, founder intake, LP data rooms, dealflow systems and AI-assisted venture operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a 
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#007aff]/90 text-white rounded-full text-[17px] hover:bg-[#007aff] transition-all duration-200 active:scale-95 group shadow-lg backdrop-blur-xl border border-white/20"
                style={{ backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}
              >
                View Selected Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 ios-glass border border-black/[0.08] text-[#1d1d1f] rounded-full text-[17px] hover:bg-white/90 transition-all duration-200 active:scale-95"
              >
                Request Private Access
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-black/[0.08]"
            >
              {stats.map((item) => (
                <div key={item.value}>
                  <div className="text-[28px] tracking-tight text-[#1d1d1f] mb-1">{item.value}</div>
                  <p className="text-[13px] text-[#86868b]">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl ios-glass border border-black/[0.08] p-8">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/70 rounded-[20px] p-5 border border-black/[0.08]">
                  <p className="text-[13px] text-[#86868b] mb-2">Public Website</p>
                  <p className="text-[21px] tracking-tight text-[#1d1d1f]">Story, proof and access points</p>
                </div>
                <div className="bg-white/70 rounded-[20px] p-5 border border-black/[0.08]">
                  <p className="text-[13px] text-[#86868b] mb-2">P3 Platform</p>
                  <p className="text-[21px] tracking-tight text-[#1d1d1f]">Intake, data room and CRM</p>
                </div>
                <div className="bg-white/70 rounded-[20px] p-5 border border-black/[0.08]">
                  <p className="text-[13px] text-[#86868b] mb-2">Venture Workflows</p>
                  <p className="text-[21px] tracking-tight text-[#1d1d1f]">CVC, LP and founder operations</p>
                </div>
                <div className="bg-white/70 rounded-[20px] p-5 border border-black/[0.08]">
                  <p className="text-[13px] text-[#86868b] mb-2">Proof Layer</p>
                  <p className="text-[21px] tracking-tight text-[#1d1d1f]">Cases, artifacts and field notes</p>
                </div>
              </div>
              <div className="h-3 bg-gradient-to-r from-[#007aff] via-[#5856d6] to-[#af52de] rounded-full" />
            </div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 ios-glass rounded-[20px] shadow-lg p-5 border border-black/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#007aff] to-[#5856d6] rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[13px] text-[#86868b]">AI-assisted</p>
                  <p className="text-[17px] text-[#1d1d1f] tracking-tight">Research and execution</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 ios-glass rounded-[20px] shadow-lg p-5 border border-black/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5 text-[#007aff]" strokeWidth={1.5} />
                <p className="text-[15px] text-[#1d1d1f] tracking-tight">Evidence over slogans</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
