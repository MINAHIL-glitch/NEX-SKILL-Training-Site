import React, { useState } from 'react';
import { X, CheckCircle2, Award, Sparkles, AlertCircle, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { programs, campuses, aptitudeQuestions, Program } from '../data/mockData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  onSuccessNavigateToLms?: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  initialProgramId,
  onSuccessNavigateToLms
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedProgram, setSelectedProgram] = useState<string>(initialProgramId || programs[0].id);
  const [selectedCampus, setSelectedCampus] = useState<string>('lahore-arfa');
  const [preferredMode, setPreferredMode] = useState<'on-campus' | 'online'>('on-campus');
  const [scheduleType, setScheduleType] = useState<'weekday-evening' | 'weekend-intensive'>('weekday-evening');

  // Personal details
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Lahore',
    education: 'Bachelor in CS / SE / IT',
    experienceLevel: 'Student / Recent Grad'
  });

  // Aptitude test answers
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [testScore, setTestScore] = useState<number | null>(null);
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(0);
  const [applicationId, setApplicationId] = useState<string>('');

  if (!isOpen) return null;

  const currentProgramObj = programs.find((p) => p.id === selectedProgram) || programs[0];

  const handleAnswerSelect = (questionId: number, optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleEvaluateTest = () => {
    let score = 0;
    aptitudeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    setTestScore(score);

    // Calculate scholarship tier
    let pct = 0;
    if (score === 5) pct = 50;
    else if (score >= 4) pct = 35;
    else if (score >= 3) pct = 25;
    else pct = 15; // default early-bird
    setScholarshipPercent(pct);

    const randomId = `NX-2025-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(randomId);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b1120] border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-[#070c18]/80">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Cohort Admission &amp; Scholarship Application</h3>
              <p className="text-xs text-slate-400">Summer 2025 Accelerated Batch • 4-Step Intake</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="grid grid-cols-4 border-b border-slate-800 bg-[#0d1424] text-[11px] font-mono text-center">
          <div
            className={`py-2 px-2 border-r border-slate-800 transition-colors ${
              step === 1 ? 'bg-[#00f0ff]/15 text-[#00f0ff] font-bold' : step > 1 ? 'text-emerald-400' : 'text-slate-500'
            }`}
          >
            1. Track &amp; Campus
          </div>
          <div
            className={`py-2 px-2 border-r border-slate-800 transition-colors ${
              step === 2 ? 'bg-[#00f0ff]/15 text-[#00f0ff] font-bold' : step > 2 ? 'text-emerald-400' : 'text-slate-500'
            }`}
          >
            2. Personal Details
          </div>
          <div
            className={`py-2 px-2 border-r border-slate-800 transition-colors ${
              step === 3 ? 'bg-[#00f0ff]/15 text-[#00f0ff] font-bold' : step > 3 ? 'text-emerald-400' : 'text-slate-500'
            }`}
          >
            3. Aptitude Test
          </div>
          <div
            className={`py-2 px-2 transition-colors ${
              step === 4 ? 'bg-[#00f0ff]/15 text-[#00f0ff] font-bold' : 'text-slate-500'
            }`}
          >
            4. Confirmation
          </div>
        </div>

        {/* Body Form */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm flex-1">
          {/* STEP 1: Program & Campus */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                  Select Engineering Track
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                >
                  {programs.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.duration} • {p.tuition.upfront})
                    </option>
                  ))}
                </select>
              </div>

              {/* Campus / Mode Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Learning Campus / Mode
                  </label>
                  <select
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  >
                    {campuses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Schedule Preference
                  </label>
                  <select
                    value={scheduleType}
                    onChange={(e) => setScheduleType(e.target.value as any)}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  >
                    <option value="weekday-evening">Weekday Evening (6:30 PM - 9:30 PM)</option>
                    <option value="weekend-intensive">Weekend Intensive (Sat &amp; Sun)</option>
                  </select>
                </div>
              </div>

              {/* Program Highlight Card */}
              <div className="p-4 rounded-xl bg-[#070c18] border border-slate-800 flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{currentProgramObj.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{currentProgramObj.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {currentProgramObj.skills.slice(0, 5).map((skill, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-sm hover:bg-[#38bdf8] transition-all cursor-pointer"
                >
                  Continue to Personal Info &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Personal Info */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bilal Ahmed"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. bilal@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Resident City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lahore, Karachi, Islamabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Current Academic Level
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  >
                    <option>Bachelor in CS / SE / IT</option>
                    <option>Non-CS Engineering Graduate</option>
                    <option>Undergraduate Student (Final Year)</option>
                    <option>Intermediate / A-Levels</option>
                    <option>Masters / Professional Degree</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Tech Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  >
                    <option>Beginner (Curious to learn)</option>
                    <option>Career Switcher from other field</option>
                    <option>Intermediate (Know basics of code)</option>
                    <option>Working Developer seeking upgrade</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.fullName || !formData.email || !formData.phone) {
                      alert('Please provide your name, email, and phone number.');
                      return;
                    }
                    setStep(3);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-sm hover:bg-[#38bdf8] transition-all cursor-pointer"
                >
                  Proceed to Scholarship Aptitude Test &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Aptitude & Scholarship Test */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="p-3.5 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white">Merit Scholarship Evaluation:</span> Answer these 5 rapid engineering logic questions to qualify for up to <span className="text-[#00f0ff] font-bold">50% tuition reduction</span> for this cohort.
                </div>
              </div>

              <div className="space-y-4">
                {aptitudeQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2.5">
                    <div className="flex items-start gap-2 text-xs font-semibold text-white">
                      <span className="font-mono text-[#00f0ff]">Q{idx + 1}.</span>
                      <span>{q.question}</span>
                    </div>
                    <div className="space-y-1.5 pl-5">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswers[q.id] === optIdx;
                        return (
                          <label
                            key={optIdx}
                            onClick={() => handleAnswerSelect(q.id, optIdx)}
                            className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-white font-medium'
                                : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              checked={isSelected}
                              onChange={() => handleAnswerSelect(q.id, optIdx)}
                              className="accent-[#00f0ff]"
                            />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleEvaluateTest}
                  disabled={Object.keys(userAnswers).length < 3}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-sm hover:bg-[#38bdf8] transition-all cursor-pointer disabled:opacity-50"
                >
                  Submit &amp; Calculate Scholarship &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation & Result */}
          {step === 4 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Application Accepted &amp; Verified
                </span>
                <h3 className="text-xl font-bold text-white mt-2">Congratulations, {formData.fullName || 'Future Engineer'}!</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Your seat reservation request has been processed. Our admissions officer will contact you within 24 hours.
                </p>
              </div>

              {/* Scholarship Award Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#00f0ff]/10 via-[#0566d9]/20 to-[#00f0ff]/10 border border-[#00f0ff]/40 max-w-md mx-auto text-center space-y-1">
                <div className="text-xs font-mono text-[#00f0ff] font-bold">
                  Aptitude Score: {testScore}/5 Correct
                </div>
                <div className="text-2xl font-black text-white">
                  {scholarshipPercent}% MERIT SCHOLARSHIP GRANTED
                </div>
                <p className="text-[11px] text-slate-300">
                  Applied to {currentProgramObj.title}. Original tuition {currentProgramObj.tuition.upfront} adjusted automatically on admission invoice.
                </p>
              </div>

              {/* Application Details Summary */}
              <div className="bg-[#070c18] rounded-xl border border-slate-800 p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                  <span className="text-slate-400 font-mono">Application Reference ID:</span>
                  <span className="text-white font-mono font-bold text-[#00f0ff]">{applicationId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                  <span className="text-slate-400">Selected Program:</span>
                  <span className="text-white font-semibold">{currentProgramObj.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                  <span className="text-slate-400">Campus Location:</span>
                  <span className="text-white">{campuses.find((c) => c.id === selectedCampus)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cohort Start Date:</span>
                  <span className="text-emerald-400 font-semibold">{currentProgramObj.cohortDate}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Close Window
                </button>
                {onSuccessNavigateToLms && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSuccessNavigateToLms();
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all cursor-pointer"
                  >
                    <span>View Student LMS Demo Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
