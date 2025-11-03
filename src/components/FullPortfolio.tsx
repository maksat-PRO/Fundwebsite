import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { portfolioCompanies, PortfolioCompany } from '../data/portfolio';

interface FullPortfolioProps {
  onBack: () => void;
  onSelectProject: (project: PortfolioCompany) => void;
}

export function FullPortfolio({ onBack, onSelectProject }: FullPortfolioProps) {
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
            <div className="inline-flex items-center px-3 py-1.5 bg-[#5856d6]/10 rounded-full mb-4">
              <span className="text-[13px] text-[#5856d6] tracking-tight">Full Portfolio</span>
            </div>
            <h1 className="text-[48px] tracking-tight text-[#1d1d1f] mb-3">
              All Portfolio Companies
            </h1>
            <p className="text-[19px] text-[#86868b] leading-[1.4] max-w-3xl">
              Discover our complete portfolio of innovative SportsTech companies transforming the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
      </div>
    </div>
  );
}
