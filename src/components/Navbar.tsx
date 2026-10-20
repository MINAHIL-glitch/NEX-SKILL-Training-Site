import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Building2,
  GraduationCap,
  Sparkles,
  UserCheck,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Laptop,
  CheckCircle2
} from 'lucide-react';

export type ScreenId = 'home' | 'programs' | 'residency' | 'campuses' | 'admissions' | 'student-portal';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenApply,
  onOpenTour
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [presetDropdownOpen, setPresetDropdownOpen] = useState(false);

  const screenPresets = [
    { id: 'home', label: 'Screen 1: Main Platform Landing', badge: 'Flagship' },
    { id: 'programs', label: 'Screen 2: All Programs & Bootcamps', badge: 'Catalog' },
    { id: 'residency', label: 'Screen 3: AI & Cloud Residency', badge: 'Specializations' },
    { id: 'campuses', label: 'Screen 4: Physical Campuses & Labs', badge: 'Arfa Tower' },
    { id: 'admissions', label: 'Screen 5: Admissions & Career Pipeline', badge: 'Outcomes' },
    { id: 'student-portal', label: 'Screen 6: Student LMS Portal (Alex)', badge: 'Live LMS' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#38bdf8]/15 bg-[#070c18]/90 backdrop-blur-xl transition-all">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-[#00f0ff]/10 via-[#0566d9]/20 to-[#00f0ff]/10 border-b border-[#00f0ff]/20 px-4 py-1.5 text-xs text-center text-[#dde2f8] flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 font-semibold text-[#00f0ff]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
          </span>
          ADMISSIONS OPEN FOR SUMMER 2025
        </span>
        <span className="hidden sm:inline text-slate-400">|</span>
        <span className="hidden sm:inline text-slate-300">
          Up to 50% Merit Scholarships via Assessment Test • Arfa Tower Lahore &amp; Global Online
        </span>
        <button
          onClick={onOpenApply}
          className="ml-2 font-bold text-[#00f0ff] hover:underline underline-offset-2 flex items-center gap-0.5 cursor-pointer"
        >
          Apply Today &rarr;
        </button>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center h-11 w-11 rounded-lg bg-[#0f172a] border border-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] group-hover:border-[#00f0ff] transition-all">
            <img
              src="/assets/aistudio/Image_17_3d6c4153.jpeg"
              alt="Nexskill Logo"
              className="h-8 w-auto object-contain rounded"
              onError={(e) => {
                // fallback if asset path differs
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <Terminal className="w-5 h-5 text-[#00f0ff] absolute opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#00f0ff] transition-colors">
                NEXSKILL
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 px-1.5 py-0.5 rounded">
                TECH MATRIX
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 tracking-tight">
              Premier AI &amp; Tech Training Institute
            </p>
          </div>
        </button>

        {/* Desktop Screen Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          <button
            onClick={() => onNavigate('home')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentScreen === 'home'
                ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('programs')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentScreen === 'programs'
                ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            All Programs
          </button>
          <button
            onClick={() => onNavigate('residency')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentScreen === 'residency'
                ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            AI Residencies
          </button>
          <button
            onClick={() => onNavigate('campuses')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentScreen === 'campuses'
                ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Campuses &amp; Labs
          </button>
          <button
            onClick={() => onNavigate('admissions')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              currentScreen === 'admissions'
                ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Admissions &amp; Career
          </button>
          <button
            onClick={() => onNavigate('student-portal')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              currentScreen === 'student-portal'
                ? 'bg-[#0566d9] text-white border border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                : 'text-[#38bdf8] hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <Laptop className="w-4 h-4 text-[#00f0ff]" />
            Student LMS
          </button>
        </nav>

        {/* Right Actions & Screen Switcher */}
        <div className="flex items-center gap-2.5">
          {/* Screen Preset Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPresetDropdownOpen(!presetDropdownOpen)}
              className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-[#0f172a] border border-slate-700 hover:border-[#00f0ff]/50 text-slate-300 hover:text-[#00f0ff] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Screens</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {presetDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-72 rounded-xl bg-[#0b1120] border border-[#38bdf8]/30 shadow-2xl p-2 z-50 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2"
                onClick={() => setPresetDropdownOpen(false)}
              >
                <div className="px-2 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1">
                  Design Screen Views
                </div>
                {screenPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => onNavigate(preset.id as ScreenId)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      currentScreen === preset.id
                        ? 'bg-[#00f0ff]/20 text-[#00f0ff] font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    }`}
                  >
                    <span>{preset.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {preset.badge}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book Tour CTA */}
          <button
            onClick={onOpenTour}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-500 hover:text-white transition-all cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
            Book Tour
          </button>

          {/* Primary Apply CTA */}
          <button
            onClick={onOpenApply}
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-[#00f0ff] text-[#070c18] hover:bg-[#38bdf8] shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95 transition-all cursor-pointer"
          >
            <span>Enroll Now</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse"></span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#070c18]/95 backdrop-blur-xl px-4 py-4 space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 pt-1">
            Navigation Screens
          </div>
          {screenPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                onNavigate(preset.id as ScreenId);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer ${
                currentScreen === preset.id
                  ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{preset.label}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {preset.badge}
              </span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTour();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
            >
              Schedule Campus Visit
            </button>
            <button
              onClick={() => {
                onOpenApply();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs"
            >
              Apply for Batch &amp; Scholarship Test
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
