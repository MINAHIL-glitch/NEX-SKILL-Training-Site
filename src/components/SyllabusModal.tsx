import React, { useState } from 'react';
import { X, BookOpen, Clock, Calendar, CheckCircle2, Award, Download, ArrowRight, UserCheck } from 'lucide-react';
import { Program, mentors } from '../data/mockData';

interface SyllabusModalProps {
  program: Program | null;
  onClose: () => void;
  onApplyForProgram: (programId: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  program,
  onClose,
  onApplyForProgram
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!program) return null;

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const programMentors = mentors.filter(m => program.mentors.includes(m.name));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0b1120] border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 px-6 py-5 bg-[#070c18]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#00f0ff] font-bold bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2 py-0.5 rounded">
                {program.categoryLabel}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {program.duration} • {program.level}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{program.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">TOTAL DURATION</div>
              <div className="text-base font-bold text-white mt-0.5">{program.duration} ({program.weeks} Wks)</div>
            </div>
            <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">NEXT BATCH</div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">{program.cohortDate}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">SEATS REMAINING</div>
              <div className="text-base font-bold text-[#ef4444] mt-0.5">{program.seatsLeft} Seats Left</div>
            </div>
            <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">TUITION FEE</div>
              <div className="text-base font-bold text-[#00f0ff] mt-0.5">{program.tuition.upfront}</div>
            </div>
          </div>

          {/* Program Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold mb-2">
              Curriculum Overview &amp; Learning Objectives
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {program.summary}
            </p>
          </div>

          {/* Skills & Technologies Matrix */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2.5">
              Production Stack &amp; Tools Mastered
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs text-slate-200 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Week by Week Syllabus */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold mb-3">
              Week-by-Week Modular Roadmap
            </h4>
            <div className="space-y-3">
              {program.syllabus.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#00f0ff]">{item.week}</span>
                    <span className="font-bold text-white text-sm">{item.title}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 text-xs text-slate-400">
                    {item.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Project Showcase */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#00f0ff]/10 via-[#0566d9]/15 to-[#00f0ff]/10 border border-[#00f0ff]/30 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00f0ff]" />
              <h4 className="font-bold text-white text-sm">Graduation Capstone: {program.capstoneProject.title}</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {program.capstoneProject.description}
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[10px] font-mono text-slate-400">Stack:</span>
              {program.capstoneProject.tools.map((tool, i) => (
                <span key={i} className="text-[10px] font-mono bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Assigned Faculty & Mentors */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
              Lead Mentors for this Track
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {programMentors.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#070c18] border border-slate-800 flex items-center gap-3">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#00f0ff]/30 shrink-0"
                  />
                  <div>
                    <h5 className="font-bold text-white text-xs">{m.name}</h5>
                    <p className="text-[11px] text-[#00f0ff] font-medium">{m.role}</p>
                    <p className="text-[10px] text-slate-400 truncate">{m.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-800 px-6 py-4 bg-[#070c18] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDownloadBrochure}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>{downloadSuccess ? 'Brochure PDF Generated!' : 'Download Syllabus PDF'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApplyForProgram(program.id);
              }}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              <span>Apply for this Cohort</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
