import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-[#f5f5f7]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full ios-glass border border-black/[0.08]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#007aff] animate-pulse" />
              <span className="text-[13px] text-[#86868b] tracking-tight">Powering the Future of Sports</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight text-[#1d1d1f]">
                Investing in the{' '}
                <span className="bg-gradient-to-r from-[#007aff] via-[#5856d6] to-[#af52de] bg-clip-text text-transparent">
                  Next Generation
                </span>{' '}
                of SportsTech
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[19px] text-[#86868b] leading-[1.4] max-w-xl"
            >
              We partner with visionary founders building innovative solutions at the intersection 
              of sports, technology, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#007aff]/90 text-white rounded-full text-[17px] hover:bg-[#007aff] transition-all duration-200 active:scale-95 group shadow-lg backdrop-blur-xl border border-white/20"
                style={{
                  backdropFilter: 'saturate(180%) blur(20px)',
                  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                }}
              >
                Explore Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 ios-glass border border-black/[0.08] text-[#1d1d1f] rounded-full text-[17px] hover:bg-white/90 transition-all duration-200 active:scale-95"
              >
                Submit Your Pitch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-black/[0.08]"
            >
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-[28px] tracking-tight text-[#1d1d1f]">
                    $250M+
                  </span>
                </div>
                <p className="text-[13px] text-[#86868b]">Assets Under Management</p>
              </div>
              <div>
                <div className="text-[28px] tracking-tight text-[#1d1d1f] mb-1">
                  50+
                </div>
                <p className="text-[13px] text-[#86868b]">Portfolio Companies</p>
              </div>
              <div>
                <div className="text-[28px] tracking-tight text-[#1d1d1f] mb-1">
                  15+
                </div>
                <p className="text-[13px] text-[#86868b]">Countries</p>
              </div>
            </motion.div>
          </div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760037028485-d00dd2b8f6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjIwOTEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sports Technology Innovation"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating card */}
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
                  <p className="text-[13px] text-[#86868b]">AI-Powered</p>
                  <p className="text-[17px] text-[#1d1d1f] tracking-tight">Deal Sourcing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
