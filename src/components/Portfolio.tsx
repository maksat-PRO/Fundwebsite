import { motion } from 'motion/react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { portfolioCompanies, PortfolioCompany } from '../data/portfolio';

interface PortfolioProps {
  onViewAll: () => void;
  onSelectProject: (project: PortfolioCompany) => void;
}

export function Portfolio({ onViewAll, onSelectProject }: PortfolioProps) {
  const featuredCompanies = portfolioCompanies.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-[#5856d6]/10 rounded-full mb-4">
            <span className="text-[13px] text-[#5856d6] tracking-tight">Our Portfolio</span>
          </div>
          <h2 className="text-[48px] tracking-tight text-[#1d1d1f] mb-4">
            Building Tomorrow's Champions
          </h2>
          <p className="text-[19px] text-[#86868b] max-w-2xl mx-auto leading-[1.4]">
            We're proud to partner with innovative companies reshaping the sports industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {featuredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(company)}
              className="ios-glass rounded-[20px] overflow-hidden border border-black/[0.08] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <ImageWithFallback
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 ios-glass rounded-full border border-black/[0.08]">
                  <span className="text-[13px] text-[#1d1d1f] tracking-tight">{company.stage}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[21px] tracking-tight text-[#1d1d1f]">
                    {company.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-[#86868b] group-hover:text-[#007aff] transition-colors flex-shrink-0" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] text-[#007aff] mb-2 tracking-tight">{company.category}</p>
                <p className="text-[15px] text-[#86868b] mb-4 leading-[1.5]">
                  {company.description}
                </p>
                <div className="flex items-center space-x-2 text-[13px] text-[#34c759]">
                  <TrendingUp className="w-4 h-4" strokeWidth={2} />
                  <span className="tracking-tight">{company.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[17px] text-[#86868b] mb-4">
            And {portfolioCompanies.length - 3}+ more innovative companies across the SportsTech ecosystem
          </p>
          <button 
            onClick={onViewAll}
            className="inline-flex items-center text-[17px] text-[#007aff] hover:text-[#0051d5] transition-colors group"
          >
            <span>View Full Portfolio</span>
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
