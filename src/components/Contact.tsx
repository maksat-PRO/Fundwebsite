import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#007aff] via-[#5856d6] to-[#af52de] relative overflow-hidden">
      {/* iOS-style subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white"
          >
            <h2 className="text-[48px] tracking-tight text-white mb-6 leading-[1.1]">
              Let's Build the Future Together
            </h2>
            <p className="text-[19px] text-white/90 mb-10 leading-[1.4]">
              Whether you're a founder with a groundbreaking idea or an investor looking 
              to join our mission, we'd love to hear from you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/15 rounded-[14px] flex items-center justify-center backdrop-blur-xl border border-white/20">
                  <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[13px] text-white/70 mb-0.5">Email us</p>
                  <p className="text-[17px] text-white tracking-tight">invest@sportstechvc.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/15 rounded-[14px] flex items-center justify-center backdrop-blur-xl border border-white/20">
                  <MessageSquare className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[13px] text-white/70 mb-0.5">Schedule a call</p>
                  <p className="text-[17px] text-white tracking-tight">Book a 30-min consultation</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[13px] text-white/70 mb-4">Follow us</p>
              <div className="flex space-x-3">
                <button className="w-11 h-11 bg-white/15 rounded-[12px] flex items-center justify-center hover:bg-white/25 transition-all duration-200 active:scale-95 backdrop-blur-xl border border-white/20">
                  <Linkedin className="w-5 h-5 text-white" strokeWidth={1.5} />
                </button>
                <button className="w-11 h-11 bg-white/15 rounded-[12px] flex items-center justify-center hover:bg-white/25 transition-all duration-200 active:scale-95 backdrop-blur-xl border border-white/20">
                  <Twitter className="w-5 h-5 text-white" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right content - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="ios-glass rounded-[28px] p-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-[28px] tracking-tight text-[#1d1d1f] mb-8">Get in Touch</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-[13px] text-[#86868b] mb-2 tracking-tight">
                  Full Name
                </label>
                <input 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-[12px] text-[17px] text-[#1d1d1f] placeholder:text-[#86868b]/50 focus:outline-none focus:ring-2 focus:ring-[#007aff]/40 focus:border-[#007aff]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] text-[#86868b] mb-2 tracking-tight">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-[12px] text-[17px] text-[#1d1d1f] placeholder:text-[#86868b]/50 focus:outline-none focus:ring-2 focus:ring-[#007aff]/40 focus:border-[#007aff]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] text-[#86868b] mb-2 tracking-tight">
                  I'm interested in...
                </label>
                <select className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-[12px] text-[17px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#007aff]/40 focus:border-[#007aff]/40 transition-all">
                  <option>Pitching my startup</option>
                  <option>Investment opportunities</option>
                  <option>Partnership</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] text-[#86868b] mb-2 tracking-tight">
                  Message
                </label>
                <textarea 
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-[12px] text-[17px] text-[#1d1d1f] placeholder:text-[#86868b]/50 focus:outline-none focus:ring-2 focus:ring-[#007aff]/40 focus:border-[#007aff]/40 transition-all resize-none min-h-32"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3.5 bg-[#007aff] text-white rounded-[12px] text-[17px] hover:bg-[#0051d5] transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
