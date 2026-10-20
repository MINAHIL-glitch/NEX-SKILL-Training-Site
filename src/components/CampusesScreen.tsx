import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  Cpu,
  Wifi,
  Zap,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { campuses, Campus } from '../data/mockData';

interface CampusesScreenProps {
  onOpenTour: (campusId?: string) => void;
  onOpenApply: () => void;
}

export const CampusesScreen: React.FC<CampusesScreenProps> = ({
  onOpenTour,
  onOpenApply
}) => {
  const [selectedCampusId, setSelectedCampusId] = useState<string>('lahore-arfa');

  const selectedCampus = campuses.find((c) => c.id === selectedCampusId) || campuses[0];

  return (
    <div className="space-y-16 pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff]">
          <Building2 className="w-3.5 h-3.5" />
          <span>NATIONWIDE TECH HUBS // HYBRID &amp; ON-CAMPUS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Visit Our Campuses or{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#38bdf8]">
            Join Online Learning
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From the iconic Arfa Software Technology Park in Lahore to executive suites on Shahrah-e-Faisal Karachi and our South Punjab incubator — experience world-class physical labs, high-spec workstations, and uninterrupted Gigabit connectivity.
        </p>
      </div>

      {/* Campus Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
        {campuses.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCampusId(c.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              selectedCampusId === c.id
                ? 'bg-[#00f0ff] text-[#070c18] shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                : 'bg-[#0f172a] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      {/* Active Campus Feature Spotlight */}
      <div className="rounded-3xl bg-[#0f172a]/90 border border-[#38bdf8]/20 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Visual Column */}
          <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[340px] bg-slate-900 overflow-hidden">
            <img
              src={selectedCampus.image}
              alt={selectedCampus.name}
              className="w-full h-full object-cover transition-all duration-700"
              onError={(e) => {
                // fallback
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f172a]" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#070c18]/90 text-[#00f0ff] text-xs font-mono font-bold border border-[#00f0ff]/30 backdrop-blur-md">
                {selectedCampus.locationTag}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-[#070c18]/85 p-3 rounded-xl border border-slate-700 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>{selectedCampus.hours}</span>
              </div>
              <span className="text-emerald-400 font-bold">Open for Visits</span>
            </div>
          </div>

          {/* Right Details Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  {selectedCampus.city} CAMPUS
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  {selectedCampus.name}
                </h2>
                <p className="text-xs text-slate-300 mt-2 flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>{selectedCampus.address}</span>
                </p>
              </div>

              {/* Hardware & Infrastructure Specs */}
              <div className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2.5">
                <div className="text-[11px] font-mono text-[#00f0ff] font-bold uppercase tracking-wider">
                  Hardware &amp; Network Infrastructure
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-slate-500 font-mono text-[10px]">WORKSTATIONS</div>
                    <div className="font-semibold text-white mt-0.5">{selectedCampus.specs.workstations}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px]">AI / GPU NODES</div>
                    <div className="font-semibold text-white mt-0.5">{selectedCampus.specs.gpuRigs}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px]">FIBER CONNECTIVITY</div>
                    <div className="font-semibold text-white mt-0.5">{selectedCampus.specs.internet}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px]">POWER RESILIENCE</div>
                    <div className="font-semibold text-white mt-0.5">{selectedCampus.specs.powerBackup}</div>
                  </div>
                </div>
              </div>

              {/* Campus Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Campus Facilities
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedCampus.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <button
                onClick={() => onOpenTour(selectedCampus.id)}
                className="flex-1 py-3 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] text-center cursor-pointer"
              >
                Schedule Free Lab Tour
              </button>
              <button
                onClick={onOpenApply}
                className="px-4 py-3 rounded-xl border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white"
              >
                Enroll for this Hub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4-STEP ADMISSION JOURNEY */}
      <div className="rounded-3xl bg-[#0b1120] border border-slate-800 p-8 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
            SIMPLE ONBOARDING
          </span>
          <h3 className="text-2xl font-bold text-white">4-Step Admission Journey</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            How aspiring developers transition from initial inquiry to Day 1 inside our production sandboxes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] font-mono font-bold flex items-center justify-center text-sm border border-[#00f0ff]/30">
              01
            </div>
            <h4 className="font-bold text-white text-sm">Choose Program &amp; Campus</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Select your specialization (AI, Full Stack, Cloud, Cyber) and preferred campus or online live stream.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] font-mono font-bold flex items-center justify-center text-sm border border-[#00f0ff]/30">
              02
            </div>
            <h4 className="font-bold text-white text-sm">Free Counseling Session</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Meet our senior tech counselors at Arfa Tower or via Google Meet to evaluate your career roadmap.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] font-mono font-bold flex items-center justify-center text-sm border border-[#00f0ff]/30">
              03
            </div>
            <h4 className="font-bold text-white text-sm">Skill Assessment &amp; Scholarship</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete the rapid 5-question logic assessment to unlock up to 50% merit tuition discount.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] font-mono font-bold flex items-center justify-center text-sm border border-[#00f0ff]/30">
              04
            </div>
            <h4 className="font-bold text-white text-sm">Onboarding &amp; Sandbox Setup</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive your student email, Discord pass, GitHub repository access, and start prep-modules before Day 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
