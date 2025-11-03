import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, Briefcase, Check } from 'lucide-react';
import { jobPostings, companyBenefits } from '../data/careers';
import { useState } from 'react';

interface CareersProps {
  onBack: () => void;
}

export function Careers({ onBack }: CareersProps) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const job = jobPostings.find(j => j.id === selectedJob);

  if (job) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] pt-14">
        <div className="ios-glass border-b border-black/[0.08] sticky top-14 z-40">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6">
            <button
              onClick={() => setSelectedJob(null)}
              className="inline-flex items-center text-[#007aff] hover:text-[#0051d5] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span className="text-[17px]">Back to Careers</span>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1.5 bg-[#007aff]/10 rounded-full text-[13px] text-[#007aff]">
                {job.department}
              </span>
              <span className="px-3 py-1.5 bg-black/5 rounded-full text-[13px] text-[#86868b]">
                <MapPin className="w-3 h-3 inline mr-1" strokeWidth={2} />
                {job.location}
              </span>
              <span className="px-3 py-1.5 bg-black/5 rounded-full text-[13px] text-[#86868b]">
                <Clock className="w-3 h-3 inline mr-1" strokeWidth={2} />
                {job.type}
              </span>
            </div>

            <h1 className="text-[48px] tracking-tight text-[#1d1d1f] mb-6">
              {job.title}
            </h1>

            <div className="ios-glass rounded-[28px] p-8 border border-black/[0.08] mb-6">
              <p className="text-[17px] text-[#86868b] leading-[1.6]">
                {job.description}
              </p>
            </div>

            <div className="ios-glass rounded-[28px] p-8 border border-black/[0.08] mb-6">
              <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#86868b] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ios-glass rounded-[28px] p-8 border border-black/[0.08] mb-6">
              <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Qualifications</h2>
              <ul className="space-y-3">
                {job.qualifications.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#86868b] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ios-glass rounded-[28px] p-8 border border-black/[0.08] mb-8">
              <h2 className="text-[28px] tracking-tight text-[#1d1d1f] mb-4">Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#5856d6] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#86868b] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full px-6 py-4 bg-[#007aff] text-white rounded-[16px] text-[17px] hover:bg-[#0051d5] transition-all duration-200 active:scale-95">
              Apply for this Position
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

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
            <div className="inline-flex items-center px-3 py-1.5 bg-[#34c759]/10 rounded-full mb-4">
              <span className="text-[13px] text-[#34c759] tracking-tight">Join Us</span>
            </div>
            <h1 className="text-[48px] tracking-tight text-[#1d1d1f] mb-3">
              Careers at SportsTech Ventures
            </h1>
            <p className="text-[19px] text-[#86868b] leading-[1.4] max-w-3xl">
              Join our team and help shape the future of sports technology. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-8">Why Join Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="ios-glass p-6 rounded-[20px] border border-black/[0.08]"
              >
                <h3 className="text-[21px] tracking-tight text-[#1d1d1f] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[15px] text-[#86868b] leading-[1.5]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobPostings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedJob(job.id)}
                className="ios-glass p-6 rounded-[20px] border border-black/[0.08] hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-[21px] tracking-tight text-[#1d1d1f] group-hover:text-[#007aff] transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-2 py-1 bg-[#007aff]/10 rounded-full text-[11px] text-[#007aff]">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#86868b]">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1" strokeWidth={2} />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" strokeWidth={2} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-[#007aff] text-white rounded-full text-[15px] hover:bg-[#0051d5] transition-all duration-200 active:scale-95 self-start md:self-center">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center ios-glass rounded-[28px] p-12 border border-black/[0.08]"
        >
          <Briefcase className="w-12 h-12 text-[#007aff] mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-[32px] tracking-tight text-[#1d1d1f] mb-3">
            Don't See the Right Role?
          </h2>
          <p className="text-[17px] text-[#86868b] leading-[1.5] mb-6 max-w-2xl mx-auto">
            We're always interested in meeting talented people. Send us your resume and tell us about yourself.
          </p>
          <button className="px-6 py-3 bg-black/5 text-[#1d1d1f] rounded-full text-[17px] hover:bg-black/10 transition-all duration-200 active:scale-95">
            Send General Application
          </button>
        </motion.div>
      </div>
    </div>
  );
}
