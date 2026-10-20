import React, { useState, useEffect } from 'react';
import { Navbar, ScreenId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { ProgramsScreen } from './components/ProgramsScreen';
import { ResidencyScreen } from './components/ResidencyScreen';
import { CampusesScreen } from './components/CampusesScreen';
import { AdmissionsScreen } from './components/AdmissionsScreen';
import { StudentPortalScreen } from './components/StudentPortalScreen';
import { ApplyModal } from './components/ApplyModal';
import { TourModal } from './components/TourModal';
import { SyllabusModal } from './components/SyllabusModal';
import { Program, programs } from './data/mockData';
import { Sparkles, Layers, ChevronUp } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgramForApply, setSelectedProgramForApply] = useState<string | undefined>(undefined);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedCampusForTour, setSelectedCampusForTour] = useState<string | undefined>(undefined);
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [selectedProgramForSyllabus, setSelectedProgramForSyllabus] = useState<Program | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenApply = (programId?: string) => {
    setSelectedProgramForApply(programId);
    setApplyModalOpen(true);
  };

  const handleOpenTour = (campusId?: string) => {
    setSelectedCampusForTour(campusId);
    setTourModalOpen(true);
  };

  const handleOpenSyllabus = (prog: Program) => {
    setSelectedProgramForSyllabus(prog);
    setSyllabusModalOpen(true);
  };

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070c18] text-[#dde2f8] flex flex-col selection:bg-[#00f0ff] selection:text-[#070c18] relative">
      {/* Global Navigation Header */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenApply={() => handleOpenApply()}
        onOpenTour={() => handleOpenTour()}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
            onOpenTour={() => handleOpenTour()}
            onOpenSyllabus={handleOpenSyllabus}
          />
        )}

        {currentScreen === 'programs' && (
          <ProgramsScreen
            onOpenApply={handleOpenApply}
            onOpenSyllabus={handleOpenSyllabus}
          />
        )}

        {currentScreen === 'residency' && (
          <ResidencyScreen
            onOpenApply={handleOpenApply}
            onOpenSyllabus={handleOpenSyllabus}
          />
        )}

        {currentScreen === 'campuses' && (
          <CampusesScreen
            onOpenTour={(campusId) => handleOpenTour(campusId)}
            onOpenApply={() => handleOpenApply()}
          />
        )}

        {currentScreen === 'admissions' && (
          <AdmissionsScreen
            onOpenApply={handleOpenApply}
            onNavigateToLms={() => handleNavigate('student-portal')}
          />
        )}

        {currentScreen === 'student-portal' && (
          <StudentPortalScreen />
        )}
      </main>

      {/* Floating Fast Screen Preset Switcher Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#0b1120]/95 border border-[#38bdf8]/40 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl px-2.5 py-1.5 rounded-full hidden sm:flex items-center gap-1.5 text-xs font-mono">
        <span className="text-[10px] text-[#00f0ff] px-2 font-bold uppercase tracking-wider flex items-center gap-1">
          <Layers className="w-3 h-3" />
          <span>Screens:</span>
        </span>
        <button
          onClick={() => handleNavigate('home')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            currentScreen === 'home'
              ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          1. Home
        </button>
        <button
          onClick={() => handleNavigate('programs')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            currentScreen === 'programs'
              ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          2. Bootcamps
        </button>
        <button
          onClick={() => handleNavigate('residency')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            currentScreen === 'residency'
              ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          3. Residencies
        </button>
        <button
          onClick={() => handleNavigate('campuses')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            currentScreen === 'campuses'
              ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          4. Campuses
        </button>
        <button
          onClick={() => handleNavigate('admissions')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            currentScreen === 'admissions'
              ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          5. Admissions
        </button>
        <button
          onClick={() => handleNavigate('student-portal')}
          className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
            currentScreen === 'student-portal'
              ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          6. Student LMS
        </button>
      </div>

      {/* Back to top scroll button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-40 p-2.5 rounded-full bg-[#0f172a] border border-slate-700 text-slate-300 hover:text-white hover:border-[#00f0ff] shadow-xl transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApply={() => handleOpenApply()}
        onOpenTour={() => handleOpenTour()}
      />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialProgramId={selectedProgramForApply}
        onSuccessNavigateToLms={() => handleNavigate('student-portal')}
      />

      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        initialCampusId={selectedCampusForTour}
      />

      <SyllabusModal
        program={selectedProgramForSyllabus}
        onClose={() => setSyllabusModalOpen(false)}
        onApplyForProgram={(progId) => {
          setSelectedProgramForApply(progId);
          setApplyModalOpen(true);
        }}
      />
    </div>
  );
}
