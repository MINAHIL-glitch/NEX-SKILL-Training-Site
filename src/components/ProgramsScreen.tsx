import React, { useState } from 'react';
import {
  Search,
  Filter,
  Star,
  Clock,
  Calendar,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { programs, Program } from '../data/mockData';

interface ProgramsScreenProps {
  onOpenApply: (programId?: string) => void;
  onOpenSyllabus: (program: Program) => void;
}

export const ProgramsScreen: React.FC<ProgramsScreenProps> = ({
  onOpenApply,
  onOpenSyllabus
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rating' | 'duration' | 'popular'>('popular');

  const categories = [
    { id: 'all', label: 'All Bootcamps (8)' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'fullstack', label: 'Full Stack Web' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'cyber', label: 'Cyber Security' },
    { id: 'design', label: 'UI/UX Product Design' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'data', label: 'Data Engineering' }
  ];

  // Filtering & Sorting
  const filteredPrograms = programs.filter((prog) => {
    const matchesCategory = selectedCategory === 'all' || prog.category === selectedCategory;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (sortBy === 'rating') {
    filteredPrograms.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'duration') {
    filteredPrograms.sort((a, b) => b.weeks - a.weeks);
  }

  return (
    <div className="space-y-12 pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CURRICULUM 2025 // ACCREDITED TECH COHORTS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Explore Industry-Aligned{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#38bdf8]">
            Tech &amp; AI Programs
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Master in-demand technical competencies designed alongside senior staff engineers from Silicon Valley, Careem, and global enterprises. Each cohort is strictly hands-on, terminal-driven, and capstone-oriented.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 rounded-2xl bg-[#0f172a]/80 border border-slate-800 space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_12px_rgba(0,240,255,0.35)]'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search bar & Sort selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech (e.g. Next.js, PyTorch, K8s)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#070c18] border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end text-xs text-slate-400">
            <span className="font-mono text-slate-400">
              Showing <span className="text-white font-bold">{filteredPrograms.length}</span> programs
            </span>
            <div className="flex items-center gap-1.5 ml-4">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00f0ff]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#070c18] border border-slate-700 text-xs text-slate-200 rounded-md px-2 py-1 focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Longest Duration</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrograms.map((prog) => (
          <div
            key={prog.id}
            className="rounded-2xl bg-[#0f172a]/70 border border-[#38bdf8]/15 hover:border-[#00f0ff]/40 transition-all p-6 space-y-4 flex flex-col justify-between group shadow-lg"
          >
            <div className="space-y-4">
              {/* Header meta */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 px-2 py-0.5 rounded">
                      {prog.categoryLabel}
                    </span>
                    {prog.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded">
                        {prog.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {prog.title}
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-white bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md">
                    {prog.duration}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">{prog.weeks} Weeks Total</div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {prog.summary}
              </p>

              {/* Skills Matrix */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  Key Skills &amp; Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {prog.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070c18] text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone brief preview */}
              <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800/80 text-xs space-y-1">
                <div className="text-[11px] font-bold text-slate-200 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>Capstone: {prog.capstoneProject.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {prog.capstoneProject.description}
                </p>
              </div>
            </div>

            {/* Footer with Tuition, Cohort date & Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#00f0ff]">{prog.tuition.upfront}</span>
                  <span className="text-xs text-slate-400 font-mono">({prog.tuition.monthly})</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 mt-0.5">
                  Next Cohort: {prog.cohortDate} ({prog.seatsLeft} seats)
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenSyllabus(prog)}
                  className="px-3 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500 cursor-pointer"
                >
                  View Syllabus
                </button>
                <button
                  onClick={() => onOpenApply(prog.id)}
                  className="px-4 py-2 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Need Guidance Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00f0ff]/10 via-[#0566d9]/15 to-[#00f0ff]/10 border border-[#00f0ff]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Unsure which track fits your career background?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Book a 15-minute 1-on-1 counseling session with our senior faculty at Arfa Software Technology Park or over Google Meet.
          </p>
        </div>
        <button
          onClick={() => onOpenApply()}
          className="px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] shrink-0"
        >
          Take Tech Career Assessment
        </button>
      </div>
    </div>
  );
};
