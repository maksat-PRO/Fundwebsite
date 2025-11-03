import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, MapPin, Calendar, Users, DollarSign, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PortfolioCompany } from '../data/portfolio';

interface ProjectDetailProps {
  project: PortfolioCompany;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-14">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
            <button
              onClick={onBack}
              className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span className="text-[17px]">Back</span>
            </button>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="px-3 py-1.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
                <span className="text-[13px] text-white tracking-tight">{project.stage}</span>
              </div>
              <div className="px-3 py-1.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
                <span className="text-[13px] text-white tracking-tight">{project.category}</span>
              </div>
            </div>
            
            <h1 className="text-[56px] md:text-[72px] tracking-tight text-white mb-4 leading-[1.05]">
              {project.name}
            </h1>
            <p className="text-[21px] text-white/90 leading-[1.4] max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="ios-glass p-5 rounded-[20px] border border-black/[0.08]">
            <Calendar className="w-6 h-6 text-[#007aff] mb-3" strokeWidth={1.5} />
            <div className="text-[13px] text-[#86868b] mb-1">Founded</div>
            <div className="text-[21px] tracking-tight text-[#1d1d1f]">{project.founded}</div>
          </div>
          
          <div className="ios-glass p-5 rounded-[20px] border border-black/[0.08]">
            <MapPin className="w-6 h-6 text-[#007aff] mb-3" strokeWidth={1.5} />
            <div className="text-[13px] text-[#86868b] mb-1">Headquarters</div>
            <div className="text-[17px] tracking-tight text-[#1d1d1f]">{project.headquarters}</div>
          </div>
          
          <div className="ios-glass p-5 rounded-[20px] border border-black/[0.08]">
            <DollarSign className="w-6 h-6 text-[#007aff] mb-3" strokeWidth={1.5} />
            <div className="text-[13px] text-[#86868b] mb-1">Funding</div>
            <div className="text-[21px] tracking-tight text-[#1d1d1f]">{project.funding}</div>
          </div>
          
          <div className="ios-glass p-5 rounded-[20px] border border-black/[0.08]">
            <Users className="w-6 h-6 text-[#007aff] mb-3" strokeWidth={1.5} />
            <div className="text-[13px] text-[#86868b] mb-1">Team Size</div>
            <div className="text-[21px] tracking-tight text-[#1d1d1f]">{project.team}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass p-8 rounded-[28px] border border-black/[0.08]"
            >
              <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-4">About</h2>
              <p className="text-[17px] text-[#86868b] leading-[1.6]">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass p-8 rounded-[28px] border border-black/[0.08]"
            >
              <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#34c759]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#34c759]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] text-[#1d1d1f] leading-[1.5]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-6">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-[20px] overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={image}
                      alt={`${project.name} ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass p-6 rounded-[28px] border border-black/[0.08]"
            >
              <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-6">Key Metrics</h3>
              <div className="space-y-5">
                {project.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-[28px] tracking-tight text-[#1d1d1f] mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[13px] text-[#86868b]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="ios-glass p-6 rounded-[28px] border border-black/[0.08]"
            >
              <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-4">Website</h3>
              <a
                href={`https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-black/5 rounded-[16px] hover:bg-black/10 transition-colors group"
              >
                <span className="text-[17px] text-[#007aff]">{project.website}</span>
                <ExternalLink className="w-5 h-5 text-[#007aff] group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </a>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-[#007aff] to-[#5856d6] p-6 rounded-[28px] text-white"
            >
              <h3 className="text-[21px] tracking-tight mb-2">Interested in {project.name}?</h3>
              <p className="text-[15px] text-white/80 mb-4 leading-[1.5]">
                Get in touch to learn more about this portfolio company.
              </p>
              <button className="w-full px-6 py-3 bg-white text-[#007aff] rounded-[12px] text-[17px] hover:bg-white/90 transition-all duration-200 active:scale-95">
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
