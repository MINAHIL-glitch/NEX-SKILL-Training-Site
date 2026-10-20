import React, { useState } from 'react';
import { X, MapPin, Calendar, Clock, CheckCircle2, Building, ShieldCheck, Sparkles } from 'lucide-react';
import { campuses } from '../data/mockData';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCampusId?: string;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose, initialCampusId }) => {
  const [selectedCampus, setSelectedCampus] = useState(initialCampusId || 'lahore-arfa');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('4:00 PM - 5:30 PM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [trackInterest, setTrackInterest] = useState('Full Stack AI');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCampus = campuses.find((c) => c.id === selectedCampus) || campuses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b1120] border border-[#38bdf8]/30 shadow-[0_0_50px_rgba(56,189,248,0.25)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-[#070c18]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Schedule Campus &amp; Lab Visit</h3>
              <p className="text-xs text-slate-400">Experience our GPU infrastructure &amp; meet lead mentors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                  Choose Physical Campus
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {campuses.filter(c => c.id !== 'virtual-global').map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCampus(c.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        selectedCampus === c.id
                          ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-white font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold">{c.city}</div>
                      <div className="text-[10px] text-slate-400 truncate">{c.name.split('-')[1]?.trim() || c.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Campus Preview mini card */}
              <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800 text-xs space-y-1">
                <div className="text-slate-400 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>{currentCampus.address}</span>
                </div>
                <div className="text-[11px] text-[#00f0ff] font-mono pl-5">
                  {currentCampus.specs.workstations} • {currentCampus.specs.internet}
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                    Preferred Day
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                  >
                    <option>Today Afternoon</option>
                    <option>Tomorrow</option>
                    <option>This Wednesday</option>
                    <option>This Friday</option>
                    <option>This Saturday (Open House)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                    Time Window
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                  >
                    <option>11:00 AM - 12:30 PM</option>
                    <option>2:00 PM - 3:30 PM</option>
                    <option>4:00 PM - 5:30 PM</option>
                    <option>6:00 PM - 7:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Personal Contact */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Hamza Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#070c18] border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1 font-semibold">
                  Program You Wish to Tour
                </label>
                <select
                  value={trackInterest}
                  onChange={(e) => setTrackInterest(e.target.value)}
                  className="w-full bg-[#070c18] border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                >
                  <option>Full Stack AI &amp; Agentic Systems</option>
                  <option>Enterprise Cloud &amp; Kubernetes DevOps</option>
                  <option>MERN &amp; Next.js 15 Pro</option>
                  <option>Advanced Cyber Security &amp; SOC</option>
                  <option>UI/UX Product Design</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
                >
                  Confirm Campus Tour Booking
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Tour Confirmed for {name}!</h4>
                <p className="text-xs text-slate-400 mt-1">
                  We look forward to hosting you at {currentCampus.name}.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#070c18] border border-slate-800 text-xs text-left max-w-sm mx-auto space-y-1.5 font-mono">
                <div className="text-slate-400">Date: <span className="text-white font-bold">{selectedDate}</span></div>
                <div className="text-slate-400">Slot: <span className="text-[#00f0ff] font-bold">{selectedSlot}</span></div>
                <div className="text-slate-400">Coordinator: <span className="text-white">Admissions Desk Floor 3</span></div>
                <div className="text-slate-400">Contact Pass Sent to: <span className="text-emerald-400">{phone}</span></div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
