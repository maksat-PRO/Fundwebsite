import { motion } from 'motion/react';
import { ArrowLeft, Linkedin, Twitter, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { teamMembers } from '../data/team';

interface TeamProps {
  onBack: () => void;
}

export function Team({ onBack }: TeamProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-14">
      {/* Header */}
      <div className="ios-glass border-b border-black/[0.08] sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center text-[#007aff] hover:text-[#0051d5] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            <span className="text-[17px]">Back to Home</span>
          </button>
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-[#007aff]/10 rounded-full mb-4">
              <span className="text-[13px] text-[#007aff] tracking-tight">Our Team</span>
            </div>
            <h1 className="text-[48px] tracking-tight text-[#1d1d1f] mb-3">
              Meet the Team
            </h1>
            <p className="text-[19px] text-[#86868b] leading-[1.4] max-w-3xl">
              We're a diverse team of former athletes, entrepreneurs, and technology leaders united by our passion for sports innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass rounded-[28px] overflow-hidden border border-black/[0.08] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[24px] tracking-tight text-[#1d1d1f] mb-1">
                  {member.name}
                </h3>
                <p className="text-[15px] text-[#007aff] mb-4">{member.role}</p>
                
                <p className="text-[15px] text-[#86868b] leading-[1.5] mb-4">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black/5 rounded-full text-[13px] text-[#1d1d1f]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-black/[0.08]">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-black/5 rounded-[10px] flex items-center justify-center hover:bg-black/10 transition-colors group"
                    >
                      <Linkedin className="w-4 h-4 text-[#007aff]" strokeWidth={1.5} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-black/5 rounded-[10px] flex items-center justify-center hover:bg-black/10 transition-colors group"
                    >
                      <Twitter className="w-4 h-4 text-[#007aff]" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center ios-glass rounded-[28px] p-12 border border-black/[0.08]"
        >
          <Briefcase className="w-12 h-12 text-[#007aff] mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-3">
            Join Our Team
          </h2>
          <p className="text-[17px] text-[#86868b] leading-[1.5] mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for sports and technology. 
            Check out our open positions and become part of our mission.
          </p>
          <button className="px-6 py-3 bg-[#007aff] text-white rounded-full text-[17px] hover:bg-[#0051d5] transition-all duration-200 active:scale-95">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
}
