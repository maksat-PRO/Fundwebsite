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
                SportsTech Ventures
              </span>
            </div>
            <p className="text-[15px] text-white/60 leading-[1.5]">
              Investing in the future of sports technology, one innovation at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-[15px] text-white mb-4 tracking-tight">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-[15px] text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-[15px] text-white/60 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[15px] text-white mb-4 tracking-tight">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[15px] text-white mb-4 tracking-tight">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[15px] text-white/60 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/60 tracking-tight">
            © 2025 SportsTech Ventures. All rights reserved.
          </p>
          <p className="text-[13px] text-white/60 flex items-center tracking-tight">
            Made with <Heart className="w-3.5 h-3.5 mx-1.5 text-[#ff2d55] fill-[#ff2d55]" /> for the future of sports
          </p>
        </div>
      </div>
    </footer>
  );
}
