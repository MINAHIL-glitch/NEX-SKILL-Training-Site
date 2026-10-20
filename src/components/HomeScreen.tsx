import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Cpu,
  GraduationCap,
  Users,
  Award,
  Star,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Building2,
  ChevronRight,
  Laptop
} from 'lucide-react';
import { programs, hiringPartners, Program } from '../data/mockData';
import { ScreenId } from './Navbar';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenApply: (programId?: string) => void;
  onOpenTour: () => void;
  onOpenSyllabus: (program: Program) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
  onOpenSyllabus
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-[#38bdf8]/15 bg-gradient-to-b from-[#070c18] via-[#0b1120] to-[#070c18]">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#0566d9]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
                </span>
                <span>PAKISTAN'S PREMIER AI &amp; TECH MATRIX</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Transform Your Career with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#0566d9]">
                  AI-Powered Tech Education
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Master high-demand tech skills through production-grade engineering bootcamps. From deep generative AI swarms to Kubernetes cloud orchestration and offensive cyber defense — built inside Arfa Software Technology Park and streamed globally.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('programs')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-sm hover:bg-[#38bdf8] shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
                >
                  <span>Explore 2025 Bootcamps</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenTour}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-semibold text-sm hover:border-[#00f0ff]/40 hover:text-white transition-all cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>Visit Arfa Tower Lab</span>
                </button>
                <button
                  onClick={() => onNavigate('student-portal')}
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl border border-blue-500/30 text-blue-300 text-sm font-mono hover:bg-blue-950/40 transition-colors"
                >
                  <Laptop className="w-4 h-4" />
                  <span>Try Student LMS</span>
                </button>
              </div>

              {/* Telemetry Metric Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">
                    35,000+
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                    Graduates Trained
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">
                    98.4%
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                    Hiring Rate
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">
                    120+
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                    Corporate Partners
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">
                    4.9 / 5
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                    Student Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-[#0f172a]/90 border border-[#38bdf8]/30 shadow-2xl p-5 backdrop-blur-2xl space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">nexskill-cloud-shell // v24.8</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    GPU ONLINE
                  </span>
                </div>

                {/* Simulated Code/Terminal Execution */}
                <div className="bg-[#070c18] rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 border border-slate-800/80">
                  <div className="text-slate-500"># Deploying production Kubernetes agent cluster</div>
                  <div className="text-[#00f0ff]">$ nexctl cluster init --region pk-arfa-gpu --nodes 8</div>
                  <div className="text-emerald-400 pl-3">&gt; [OK] Provisioned 8x NVIDIA RTX 4090 AI Compute Nodes</div>
                  <div className="text-emerald-400 pl-3">&gt; [OK] Mounted Qdrant Vector Engine on 1Gbps Fiber</div>
                  <div className="text-[#38bdf8]">$ helm install microservices ./enterprise-chart</div>
                  <div className="text-slate-400 pl-3">&gt; Release "microservices" has been deployed to production.</div>
                  <div className="text-amber-400 pl-3">&gt; Latency: 4.2ms | Pods: 18/18 Running | Traffic: 100% OK</div>
                </div>

                {/* Interactive Feature highlight inside hero visual */}
                <div className="p-3.5 rounded-xl bg-[#0b1120] border border-[#00f0ff]/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Next Cohort Starts: June 15, 2025</div>
                    <div className="text-[11px] text-slate-400">Arfa Tower Labs &amp; Online Virtual Studio</div>
                  </div>
                  <button
                    onClick={() => onOpenApply()}
                    className="px-3 py-1.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all cursor-pointer"
                  >
                    Reserve Seat
                  </button>
                </div>
              </div>

              {/* Decorative Floating Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 rounded-xl bg-[#0b1120]/95 border border-[#38bdf8]/40 p-3 shadow-xl items-center gap-3 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Silicon Valley Standard</div>
                  <div className="text-[10px] text-slate-400">100% Verified Production Capstones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIRING PARTNERS MARQUEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold">
            TOP EMPLOYERS HIRING NEXSKILL GRADUATES
          </p>
          <h3 className="text-lg font-bold text-white">
            From Arfa Tower Classrooms to Global Unicorns &amp; MNCs
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {hiringPartners.map((partner, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0f172a]/60 border border-slate-800 hover:border-[#00f0ff]/40 transition-all text-center group cursor-default"
            >
              <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] font-mono text-[#00f0ff] mt-1">{partner.grads} Hired</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{partner.category}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FLAGSHIP BOOTCAMPS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-semibold mb-1">
              FLAGSHIP BOOTCAMPS &amp; TRACKS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Accelerated Tech Cohorts (2025 Sessions)
            </h2>
          </div>
          <button
            onClick={() => onNavigate('programs')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#00f0ff] hover:underline cursor-pointer"
          >
            <span>View All 8+ Programs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Flagship Bootcamps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 6).map((prog) => (
            <div
              key={prog.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between glass-panel-hover border border-[#38bdf8]/15 group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-44 w-full bg-[#0d1322] overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-[#070c18]/90 text-[#00f0ff] border border-[#00f0ff]/30 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                      {prog.categoryLabel}
                    </span>
                    {prog.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-[#ef4444]/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded-full backdrop-blur-md">
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-white bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-700">
                    {prog.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {prog.rating} ({prog.reviewsCount})
                    </span>
                    <span className="font-mono text-emerald-400 font-medium">
                      Next: {prog.cohortDate}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {prog.summary}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prog.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                    {prog.skills.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        +{prog.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-3 border-t border-slate-800/80 bg-[#0b1120]/50 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono text-slate-400">TUITION FEE</div>
                  <div className="text-sm font-bold text-[#00f0ff]">{prog.tuition.upfront}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenSyllabus(prog)}
                    className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:text-white hover:border-slate-500 cursor-pointer"
                  >
                    Syllabus
                  </button>
                  <button
                    onClick={() => onOpenApply(prog.id)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.25)]"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PAKISTAN'S TOP TECH TALENTS CHOOSE NEXSKILL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#070c18] border border-[#38bdf8]/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
              <Shield className="w-4 h-4" />
              <span>THE NEXSKILL ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Pakistan's Top Tech Talents Choose Nexskill Over Traditional Universities
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We eliminated outdated academic theory in favor of production-grade software delivery. When you graduate, you don't just hold a certificate — you possess real deployed repositories, live cloud infrastructures, and verifiable corporate code reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#070c18]/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">100% Production Sandboxes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No simulated toy assignments. Students deploy real Dockerized microservices, build vector databases with Qdrant, and orchestrate live AWS clusters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070c18]/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Silicon Valley &amp; UAE Mentors</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Taught directly by Principal Engineers, Google Cloud Architects, and Bug Bounty Hall-of-Famers with 10+ years real industry shipping experience.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070c18]/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Arfa Software Park Labs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct physical access to RTX 4090 AI nodes, dual 1Gbps symmetric fiber internet, and immersive technical spaces right in Lahore's tech epicenter.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070c18]/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Dedicated Placement Cell</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resume rewriting, mock technical interviews, GitHub portfolio polishing, and direct referrals into 120+ partnered corporate hiring pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CAMPUS HUBS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
              PHYSICAL HUBS ACROSS PAKISTAN
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Can't study online? Join our physical tech hubs in Lahore, Karachi &amp; Mian Channu
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              High-spec computer workstations, air-conditioned developer halls, 24/7 power backup, and in-person mentor desks.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('campuses')}
              className="px-5 py-3 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all cursor-pointer"
            >
              Explore Campuses
            </button>
            <button
              onClick={onOpenTour}
              className="px-4 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold text-xs hover:text-white"
            >
              Book Lab Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
