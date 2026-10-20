import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Terminal,
  Server,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Clock,
  Award,
  Zap,
  Users
} from 'lucide-react';
import { programs, mentors, Program } from '../data/mockData';

interface ResidencyScreenProps {
  onOpenApply: (programId?: string) => void;
  onOpenSyllabus: (program: Program) => void;
}

export const ResidencyScreen: React.FC<ResidencyScreenProps> = ({
  onOpenApply,
  onOpenSyllabus
}) => {
  const [activeSpecializationId, setActiveSpecializationId] = useState<string>('ai-engineering');

  const specializations = [
    { id: 'ai-engineering', name: 'Applied Generative AI & Deep Learning', icon: Sparkles, tag: 'High-Demand' },
    { id: 'fullstack-mern', name: 'Full Stack MERN & Next.js Bootcamp', icon: Code2, tag: 'Production Core' },
    { id: 'cloud-devops', name: 'Enterprise Cloud Architect & DevOps', icon: Server, tag: 'SRE & Infra' },
    { id: 'cyber-security', name: 'Offensive Security & Ethical Hacking', icon: ShieldCheck, tag: 'Red Team' },
    { id: 'data-engineering', name: 'Modern Data Engineering & Snowflake', icon: Layers, tag: 'Lakehouse' },
    { id: 'flutter-mobile', name: 'Mobile Engineering with Flutter', icon: Cpu, tag: 'Multiplatform' }
  ];

  const currentProgram = programs.find((p) => p.id === activeSpecializationId) || programs[0];

  return (
    <div className="space-y-16 pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Hero Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff]">
          <Zap className="w-3.5 h-3.5" />
          <span>ADVANCED FELLOWSHIP &amp; RESIDENCY TRACKS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Accelerated Tech Bootcamps &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#38bdf8]">
            Professional Certifications
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Full-immersion technical residencies for ambitious engineers seeking mastery over complex systems. Build, ship, and defend industrial distributed architectures with guided mentorship.
        </p>
      </div>

      {/* Featured Residency Spotlight Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#111c35] to-[#0f172a] border border-[#00f0ff]/30 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-bold border border-[#00f0ff]/40">
                FLAGSHIP 2025 RESIDENCY
              </span>
              <span className="text-xs text-emerald-400 font-mono font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Cohort 12 Accepting Applications
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Autonomous AI Systems &amp; Distributed Architecture Residency
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              An elite 24-week engineering immersion. Go beyond wrapper APIs: train custom LoRA weights, architect multi-agent state machines with LangGraph, deploy high-throughput vLLM clusters on NVIDIA GPUs, and build production evaluation pipelines with RAGAS.
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Clock className="w-4 h-4 text-[#00f0ff]" />
                <span>24 Weeks Intensive (450+ Hours)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Cpu className="w-4 h-4 text-[#00f0ff]" />
                <span>Dual RTX 4090 Lab Rigs Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Award className="w-4 h-4 text-[#00f0ff]" />
                <span>Direct Corporate Placement Referral</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenApply('ai-engineering')}
                className="px-6 py-3 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] cursor-pointer"
              >
                Apply for AI Residency
              </button>
              <button
                onClick={() => onOpenSyllabus(currentProgram)}
                className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/80 text-xs font-semibold text-slate-200 hover:text-white"
              >
                Download Residency Syllabus
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#070c18] border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2">
              Residency Deliverables
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>3 Enterprise Microservice Capstones</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Custom Fine-Tuned Open LLM Weights</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Multi-Agent Swarm with LangGraph</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Kubernetes Ingress &amp; Helm Auto-Scaling</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Admission: Technical Screening + Portfolio
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Specialization Browser */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
            CURRICULUM BREAKDOWN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Select Your Engineering Specialization
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Toggle between tracks to inspect unit breakdowns, tools, and mentors.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {specializations.map((spec) => {
            const Icon = spec.icon;
            const isActive = activeSpecializationId === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveSpecializationId(spec.id)}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between gap-3 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'bg-[#0f172a]/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#00f0ff]' : 'text-slate-400'}`} />
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                    {spec.tag}
                  </span>
                </div>
                <div className="text-xs font-bold leading-snug line-clamp-2">
                  {spec.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Specialization Detailed View */}
        <div className="rounded-2xl bg-[#0f172a]/90 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#00f0ff] font-bold bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2 py-0.5 rounded">
                {currentProgram.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                {currentProgram.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {currentProgram.duration} • Next cohort starting on <span className="text-white font-semibold">{currentProgram.cohortDate}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400">TUITION</div>
                <div className="text-base font-bold text-[#00f0ff]">{currentProgram.tuition.upfront}</div>
              </div>
              <button
                onClick={() => onOpenApply(currentProgram.id)}
                className="px-5 py-2.5 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.25)]"
              >
                Apply for Batch
              </button>
            </div>
          </div>

          {/* Syllabus Roadmap */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
              Complete Modular Syllabus
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentProgram.syllabus.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#00f0ff]">{item.week}</span>
                    <span className="font-bold text-white">{item.title}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-400 pl-2">
                    {item.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-1.5">
                        <span className="text-[#00f0ff]">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Mentors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                Production Stack &amp; Tools Mastered
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentProgram.skills.map((s, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                Senior Mentors Assigned
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {mentors.filter(m => currentProgram.mentors.includes(m.name)).map((m, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover border border-[#00f0ff]/40" />
                    <div className="text-xs">
                      <div className="font-bold text-white">{m.name}</div>
                      <div className="text-[10px] text-slate-400">{m.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
