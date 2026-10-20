import React from 'react';
import { Terminal, Shield, Award, MapPin, Mail, Phone, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScreenId } from './Navbar';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApply, onOpenTour }) => {
  return (
    <footer className="border-t border-[#38bdf8]/15 bg-[#050811] text-slate-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0566d9]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Accreditations Strip */}
      <div className="border-b border-slate-800/80 bg-[#080d1a] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Government Recognized &amp; Globally Accredited
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> PSEB Registered
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> NAVTTC Recognized
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Google Cloud Education Partner
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> AWS Academy Member
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0f172a] border border-[#00f0ff]/40">
                <Terminal className="w-5 h-5 text-[#00f0ff]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">NEXSKILL</span>
                <span className="ml-2 text-[10px] font-bold tracking-widest uppercase bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 px-1.5 py-0.5 rounded">
                  TECH MATRIX
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Pakistan's flagship AI and advanced tech training institute. Operating production-grade sandboxes, high-performance GPU labs at Arfa Software Technology Park, and high-placement bootcamps mentored by Silicon Valley veterans.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 98% Placement Rate
              </span>
              <span>•</span>
              <span>35,000+ Alumni</span>
              <span>•</span>
              <span>120+ Corporate Partners</span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-4 font-bold">
              Programs &amp; Bootcamps
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Full Stack Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Software Engineering (MERN &amp; Next.js 15)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Enterprise Cloud &amp; Kubernetes DevOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cyber Security &amp; SOC Bug Bounty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Advanced UI/UX Product Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Flutter &amp; Mobile App Engineering
                </button>
              </li>
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-4 font-bold">
              Campuses &amp; Hubs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('campuses')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-[#00f0ff]" /> Arfa Software Park, Lahore
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campuses')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-[#00f0ff]" /> New Garden Town, Lahore
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campuses')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-[#00f0ff]" /> PARSA Tower, Karachi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campuses')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-[#00f0ff]" /> GT Road, Mian Channu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campuses')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#00f0ff]" /> Global Virtual Cloud Campus
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenTour}
                  className="text-xs text-[#00f0ff] font-semibold hover:underline"
                >
                  Schedule Guided Lab Tour &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-4 font-bold">
              Admissions Hotline
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">+92 42 111-639-755</div>
                  <div className="text-[11px] text-slate-500">UAN Helpline (9 AM - 9 PM)</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">admissions@nexskill.com</div>
                  <div className="text-[11px] text-slate-500">Official inquiries</div>
                </div>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('student-portal')}
                  className="w-full py-2 px-3 rounded-lg bg-[#0f172a] border border-slate-700 hover:border-[#00f0ff]/50 text-slate-200 text-xs font-mono text-center block transition-all"
                >
                  Student Portal Login
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nexskill Tech Matrix. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Curriculum Integrity</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Verification Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
