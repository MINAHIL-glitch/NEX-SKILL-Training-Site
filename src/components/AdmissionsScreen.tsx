import React, { useState } from 'react';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  FileText,
  Users,
  Briefcase,
  Shield,
  ArrowRight,
  Sparkles,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import { programs, hiringPartners } from '../data/mockData';

interface AdmissionsScreenProps {
  onOpenApply: (programId?: string) => void;
  onNavigateToLms: () => void;
}

export const AdmissionsScreen: React.FC<AdmissionsScreenProps> = ({
  onOpenApply,
  onNavigateToLms
}) => {
  const [selectedTrack, setSelectedTrack] = useState<'ai' | 'devops' | 'fullstack' | 'cyber'>('ai');

  const salaryData = {
    ai: {
      title: 'Full Stack AI & Agentic Systems',
      growth: '+180%',
      startingSalaryPKR: 'PKR 180,000 - 350,000 / month',
      globalRemoteUSD: '$35,000 - $65,000 / year',
      topRole: 'AI Application Engineer / LLMOps Specialist',
      keyHiring: 'Careem, Afiniti, Systems Ltd, Remote US Startups'
    },
    devops: {
      title: 'Enterprise Cloud & Kubernetes DevOps',
      growth: '+165%',
      startingSalaryPKR: 'PKR 160,000 - 320,000 / month',
      globalRemoteUSD: '$30,000 - $55,000 / year',
      topRole: 'Site Reliability Engineer / Cloud Architect',
      keyHiring: 'Devsinc, Arbisoft, NetSol, UK Cloud Consultancies'
    },
    fullstack: {
      title: 'Software Engineering (MERN & Next.js 15 Pro)',
      growth: '+150%',
      startingSalaryPKR: 'PKR 130,000 - 260,000 / month',
      globalRemoteUSD: '$24,000 - $48,000 / year',
      topRole: 'Full Stack Product Engineer / React Specialist',
      keyHiring: '10Pearls, VentureDive, Folio3, Dubizzle Lab'
    },
    cyber: {
      title: 'Advanced Cyber Security & Bug Bounty',
      growth: '+140%',
      startingSalaryPKR: 'PKR 150,000 - 300,000 / month',
      globalRemoteUSD: '$28,000 - $52,000 / year',
      topRole: 'SOC Analyst L2 / Junior Pentester',
      keyHiring: 'Bank Alfalah, HBL, TRG, Middle East MSSPs'
    }
  };

  const currentSalary = salaryData[selectedTrack];

  return (
    <div className="space-y-16 pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff]">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>CAREER ACCELERATION &amp; AUDITED OUTCOMES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Your Pathway from Classroom to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#38bdf8]">
            Silicon Valley Career
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Nexskill bridges the gap between academic education and industry expectations. Through audited outcome metrics, resume engineering, and continuous interview simulations, our graduates land top-tier tech roles.
        </p>
      </div>

      {/* 4 STAGE ADMISSION PIPELINE TRACKER */}
      <div className="p-8 rounded-3xl bg-[#0f172a] border border-[#38bdf8]/20 shadow-xl space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
            ADMISSIONS PIPELINE
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">4-Stage Selective Intake Funnel</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            We maintain selective cohort sizes (max 25-30 engineers per batch) to ensure intensive mentor attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stage 1 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative group hover:border-[#00f0ff]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#00f0ff]/20 text-[#00f0ff] font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Step 1</span>
            </div>
            <h3 className="text-sm font-bold text-white">Online Application</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Submit your academic background, preferred tech track, and campus choice (Arfa Tower or Global Online).
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Avg Time: 3 Minutes
            </div>
          </div>

          {/* Stage 2 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative group hover:border-[#00f0ff]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#00f0ff]/20 text-[#00f0ff] font-mono font-bold text-xs flex items-center justify-center">
                02
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Step 2</span>
            </div>
            <h3 className="text-sm font-bold text-white">Aptitude Assessment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete a rapid 5-question cognitive &amp; logic assessment. Determines your merit scholarship tier (up to 50%).
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Instant Scoring
            </div>
          </div>

          {/* Stage 3 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative group hover:border-[#00f0ff]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#00f0ff]/20 text-[#00f0ff] font-mono font-bold text-xs flex items-center justify-center">
                03
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Step 3</span>
            </div>
            <h3 className="text-sm font-bold text-white">Mentor Fit Interview</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              A 15-minute dialogue with a lead instructor to align on your weekly time commitment and graduation goals.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Google Meet / In-Person
            </div>
          </div>

          {/* Stage 4 */}
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3 relative group hover:border-[#00f0ff]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#00f0ff]/20 text-[#00f0ff] font-mono font-bold text-xs flex items-center justify-center">
                04
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Step 4</span>
            </div>
            <h3 className="text-sm font-bold text-white">Enrollment &amp; Pre-Prep</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Seat confirmation, invoice generation, Discord guild invitation, and access to preparatory reading kits.
            </p>
            <div className="pt-2 text-[11px] font-mono text-emerald-400">
              Day 1 Ready
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenApply()}
            className="px-6 py-3 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] cursor-pointer"
          >
            Start Your Application Now &rarr;
          </button>
        </div>
      </div>

      {/* AUDITED OUTCOMES & COMPENSATION TELEMETRY */}
      <div className="rounded-3xl bg-[#0b1120] border border-slate-800 p-8 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
              CAREER ROI &amp; SALARY BENCHMARKS
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Audited Placement &amp; Outcome Metrics
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Source: 2024-2025 Nexskill Alumni Placement Audit (Hiring across 14 countries)
          </div>
        </div>

        {/* Track Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTrack('ai')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === 'ai'
                ? 'bg-[#00f0ff] text-[#070c18] font-bold'
                : 'bg-[#070c18] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            AI &amp; Agentic Systems (+180%)
          </button>
          <button
            onClick={() => setSelectedTrack('devops')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === 'devops'
                ? 'bg-[#00f0ff] text-[#070c18] font-bold'
                : 'bg-[#070c18] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Cloud &amp; DevOps (+165%)
          </button>
          <button
            onClick={() => setSelectedTrack('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === 'fullstack'
                ? 'bg-[#00f0ff] text-[#070c18] font-bold'
                : 'bg-[#070c18] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Full Stack MERN &amp; Next.js (+150%)
          </button>
          <button
            onClick={() => setSelectedTrack('cyber')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedTrack === 'cyber'
                ? 'bg-[#00f0ff] text-[#070c18] font-bold'
                : 'bg-[#070c18] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Cyber Security &amp; SOC (+140%)
          </button>
        </div>

        {/* Selected Track Detailed Metrics Card */}
        <div className="rounded-2xl bg-[#070c18] border border-[#38bdf8]/20 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-[#00f0ff] font-bold">
              AVERAGE COMPENSATION GROWTH
            </span>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00f0ff]">
              {currentSalary.growth}
            </div>
            <p className="text-xs text-slate-400">
              Measured 180 days post-graduation compared to entry baseline.
            </p>
          </div>

          <div className="space-y-3 md:border-l md:border-r border-slate-800 md:px-6">
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">LOCAL PAKISTAN HIRING RANGE</div>
              <div className="text-base font-bold text-white mt-0.5">{currentSalary.startingSalaryPKR}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">OVERSEAS / REMOTE USD SALARY</div>
              <div className="text-base font-bold text-[#00f0ff] mt-0.5">{currentSalary.globalRemoteUSD}</div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">PRIMARY TARGET ROLE</div>
              <div className="text-xs font-bold text-white mt-0.5">{currentSalary.topRole}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">PROMINENT EMPLOYERS</div>
              <div className="text-xs text-slate-300 mt-0.5">{currentSalary.keyHiring}</div>
            </div>
          </div>
        </div>
      </div>

      {/* THE 4 PILLARS OF NEXSKILL CAREER ECOSYSTEM */}
      <div className="rounded-3xl bg-[#0f172a] border border-slate-800 p-8 sm:p-10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
            CAREER SERVICES
          </span>
          <h2 className="text-2xl font-bold text-white">
            The 4 Pillars of Nexskill Career Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dedicated career acceleration services embedded in the final 4 weeks of every bootcamp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">GitHub &amp; Resume Re-Engineering</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Transform amateur portfolios into professional repositories with clean READMEs, architectural diagrams, Dockerfiles, and CI/CD status badges.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Mock Whiteboard Interviews</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rigorous live coding simulations and system design whiteboard drills with staff engineers from Careem, Systems Ltd, and US companies.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Direct Referral Network</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct resume routing to HR leads at 120+ partnered tech firms across Lahore, Karachi, Islamabad, Dubai, and Riyadh.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Post-Hiring Mentorship</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continued guidance during your first 90 days on the job to help you pass probation reviews and stand out as an indispensable engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
