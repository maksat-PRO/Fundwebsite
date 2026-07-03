import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007aff] to-[#5856d6] mr-3" />
              <span className="text-[17px] tracking-tight text-white">
                Maksat.PRO
              </span>
            </div>
            <p className="text-[15px] text-white/60 leading-[1.5]">
              AI-native product and venture infrastructure built on engineering experience since 2016.
            </p>
          </div>
          
          <div>
            <h4 className="text-[15px] text-white mb-4 tracking-tight">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-[15px] text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-[15px] text-white/60 hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#focus" className="text-[15px] text-white/60 hover:text-white transition-colors">Operating Areas</a></li>
              <li><a href="#contact" className="text-[15px] text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[15px] text-white mb-4 tracking-tight">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-[15px] text-white/60 hover:text-white transition-colors">Track Record</a></li>
              <li><a href="#portfolio" className="text-[15px] text-white/60 hover:text-white transition-colors">Case Notes</a></li>
              <li><a href="#contact" className="text-[15px] text-white/60 hover:text-white transition-colors">Private Access</a></li>
              <li><a href="#contact" className="text-[15px] text-white/60 hover:text-white transition-colors">LP Materials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[15px] text-white mb-4 tracking-tight">Disclosure</h4>
            <p className="text-[15px] text-white/60 leading-[1.5]">
              Public materials may use anonymized project references. Specific names and documents are shared only where appropriate.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/60 tracking-tight">
            © 2026 Maksat.PRO. All rights reserved.
          </p>
          <p className="text-[13px] text-white/60 flex items-center tracking-tight">
            Built with <Heart className="w-3.5 h-3.5 mx-1.5 text-[#ff2d55] fill-[#ff2d55]" /> for practical infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
