import React, { useState } from 'react';
import {
  Laptop,
  Terminal as TerminalIcon,
  CheckCircle2,
  Clock,
  Calendar,
  Flame,
  Award,
  BookOpen,
  Send,
  Play,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Users,
  ChevronRight,
  ShieldCheck,
  Video
} from 'lucide-react';
import { studentProfiles, StudentProfile } from '../data/mockData';

export const StudentPortalScreen: React.FC = () => {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('alex');
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'kubectl get nodes -o wide',
      output: `NAME                    STATUS   ROLES    AGE   VERSION   INTERNAL-IP    OS-IMAGE\npk-arfa-gpu-node-01     Ready    worker   18d   v1.29.2   10.240.0.11    Ubuntu 22.04 LTS\npk-arfa-gpu-node-02     Ready    worker   18d   v1.29.2   10.240.0.12    Ubuntu 22.04 LTS\npk-arfa-control-plane   Ready    master   18d   v1.29.2   10.240.0.10    Ubuntu 22.04 LTS`
    },
    {
      command: 'helm list -n production',
      output: `NAME             NAMESPACE    REVISION  UPDATED                   STATUS    CHART               APP VERSION\napi-gateway      production   3         2025-10-19 14:22:01 PKT   deployed  gateway-v1.4.2      1.4.2\nauth-service     production   5         2025-10-18 09:15:33 PKT   deployed  auth-svc-v2.1.0     2.1.0\nqdrant-cluster   production   2         2025-10-17 11:04:19 PKT   deployed  qdrant-chart-v0.9   1.7.4`
    }
  ]);
  const [liveStreamModalOpen, setLiveStreamModalOpen] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  const currentStudent: StudentProfile = studentProfiles[selectedStudentId] || studentProfiles['alex'];

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    let out = '';
    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (lower === 'help') {
      out = `Available commands in Nexskill Sandbox:\n  - kubectl get nodes\n  - kubectl get pods -n production\n  - helm list -n production\n  - helm upgrade microservices ./chart\n  - docker ps\n  - nvidia-smi\n  - clear`;
    } else if (lower.includes('get pods')) {
      out = `NAME                             READY   STATUS    RESTARTS   AGE\napi-gateway-7f9b8c6d4-v2k8l      1/1     Running   0          4h12m\napi-gateway-7f9b8c6d4-p9x1z      1/1     Running   0          4h12m\nauth-service-58d7c8d9c-m4j7w     1/1     Running   0          2d\nqdrant-cluster-0                 1/1     Running   0          3d\nqdrant-cluster-1                 1/1     Running   0          3d\nqdrant-cluster-2                 1/1     Running   0          3d`;
    } else if (lower.includes('get nodes')) {
      out = `NAME                    STATUS   ROLES    AGE   VERSION   INTERNAL-IP\npk-arfa-gpu-node-01     Ready    worker   18d   v1.29.2   10.240.0.11\npk-arfa-gpu-node-02     Ready    worker   18d   v1.29.2   10.240.0.12\npk-arfa-control-plane   Ready    master   18d   v1.29.2   10.240.0.10`;
    } else if (lower.includes('docker ps')) {
      out = `CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS\n8a7b9c1d2e3f   nexskill/ragas-eval:v2   "python3 eval_suite…"   45 minutes ago   Up 45 minutes   0.0.0.0:8080->8080/tcp\n4b5c6d7e8f9a   redis:7.2-alpine         "docker-entrypoint.s…"   3 hours ago      Up 3 hours      0.0.0.0:6379->6379/tcp`;
    } else if (lower.includes('nvidia-smi')) {
      out = `+-----------------------------------------------------------------------------------------+\n| NVIDIA-SMI 550.54.14              Driver Version: 550.54.14      CUDA Version: 12.4     |\n| GPU  Name                  Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| 0    NVIDIA GeForce RTX 4090         On  | 00000000:01:00.0 Off |                  Off |\n| 32%   48C    P2             180W / 450W |   9840MiB / 24564MiB |      Default         |\n+-----------------------------------------------------------------------------------------+`;
    } else if (lower.includes('helm')) {
      out = `Release "microservices" has been upgraded. Happy Helming!\nSTATUS: deployed\nREVISION: 4\nTEST SUITE: None\nNOTES: Synthetic workload ingress traffic routing enabled at https://alex.sandbox.nexskill.internal`;
    } else {
      out = `bash: ${cmd}: command executed in container sandbox. Output stream verified OK (code 0).`;
    }

    setTerminalHistory((prev) => [...prev, { command: cmd, output: out }]);
    setTerminalInput('');
  };

  return (
    <div className="space-y-10 pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Banner & Student Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0f172a] border border-[#38bdf8]/20">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={currentStudent.avatar}
              alt={currentStudent.name}
              className="w-14 h-14 rounded-xl object-cover border-2 border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#070c18]"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white">
                Welcome back, {currentStudent.name.split(' ')[0]}!
              </h1>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                ACTIVE COHORT
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {currentStudent.trackName} • <span className="text-slate-300 font-mono">{currentStudent.cohort}</span>
            </p>
          </div>
        </div>

        {/* Profile Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">Switch Student:</span>
          <div className="flex items-center gap-1.5 bg-[#070c18] p-1.5 rounded-xl border border-slate-800">
            {Object.values(studentProfiles).map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedStudentId(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedStudentId === s.id
                    ? 'bg-[#00f0ff] text-[#070c18] font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {s.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS STRIP: Progress, Attendance, Streak */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              CURRICULUM COMPLETION
            </div>
            <div className="text-2xl font-black text-white mt-1">
              {currentStudent.progress}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
              {currentStudent.currentUnit.completedLessons} of {currentStudent.currentUnit.totalLessons} lessons completed
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-[#00f0ff] border-t-transparent flex items-center justify-center text-xs font-mono font-bold text-[#00f0ff]">
            {currentStudent.progress}%
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              LAB ATTENDANCE
            </div>
            <div className="text-2xl font-black text-emerald-400 mt-1">
              {currentStudent.attendance}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Arfa Tower Lab + Synchronous Live
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              CODE &amp; COMMIT STREAK
            </div>
            <div className="text-2xl font-black text-amber-400 mt-1 flex items-center gap-1.5">
              <Flame className="w-6 h-6 fill-amber-400 text-amber-400" />
              <span>{currentStudent.streakDays} Days</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Top 5% Cohort Activity
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono font-bold">
            🔥
          </div>
        </div>
      </div>

      {/* ACTIVE CURRICULUM UNIT SPOTLIGHT */}
      <div className="rounded-2xl bg-[#0b1120] border border-[#00f0ff]/30 p-6 sm:p-8 space-y-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 px-2.5 py-0.5 rounded">
                CURRENT MODULE
              </span>
              <span className="text-xs font-mono text-slate-400">
                {currentStudent.currentUnit.number}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentStudent.currentUnit.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiveStreamModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              <Video className="w-4 h-4" />
              <span>Join Live Class Broadcast</span>
            </button>
          </div>
        </div>

        {/* Subtopics Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentStudent.currentUnit.subtopics.map((topic, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#070c18] border border-slate-800 flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs text-slate-300 font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TWO COLUMN GRID: LIVE CLOUD SANDBOX & CAPSTONES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Cloud Sandbox Engine */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-[#00f0ff]" />
              <h3 className="text-base font-bold text-white">Live Cloud Sandbox Engine</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Cluster: <span className="text-[#00f0ff]">pk-arfa-prod-01</span>
            </span>
          </div>

          {/* Terminal Window */}
          <div className="rounded-2xl bg-[#070c18] border border-slate-800 overflow-hidden shadow-2xl flex flex-col h-[420px]">
            {/* Terminal Title Bar */}
            <div className="px-4 py-2.5 bg-[#0d1424] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-slate-400 ml-2">student@{currentStudent.id}-sandbox:~</span>
              </div>
              <button
                onClick={() => setTerminalHistory([])}
                className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            </div>

            {/* Terminal Output Body */}
            <div className="p-4 font-mono text-xs text-slate-300 overflow-y-auto flex-1 space-y-3 font-mono-code">
              <div className="text-slate-500">
                # Nexskill Ephemeral Linux Sandbox initialized. Type "help" for sample commands.
              </div>
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <span>student@{currentStudent.id}:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] pl-3 whitespace-pre-wrap leading-relaxed text-slate-400 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60">
                    {item.output}
                  </pre>
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleCommandSubmit}
              className="p-3 bg-[#0d1424] border-t border-slate-800 flex items-center gap-2 font-mono text-xs"
            >
              <span className="text-[#00f0ff] font-bold">$&gt;</span>
              <input
                type="text"
                placeholder="Type command: kubectl get pods, helm list, docker ps, nvidia-smi..."
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs hover:bg-[#38bdf8] cursor-pointer"
              >
                Run
              </button>
            </form>
          </div>
        </div>

        {/* Right: Capstone & Active Deliverables */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00f0ff]" />
              <h3 className="text-base font-bold text-white">Capstone &amp; Active Deliverables</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {currentStudent.deliverables.length} Units
            </span>
          </div>

          <div className="space-y-3">
            {currentStudent.deliverables.map((del) => (
              <div
                key={del.id}
                className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-white leading-snug">
                    {del.title}
                  </h4>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ${
                      del.status === 'Graded'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : del.status === 'In Review'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40'
                    }`}
                  >
                    {del.status} {del.score ? `(${del.score}/100)` : ''}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center justify-between font-mono">
                  <span>Mentor: {del.mentorName}</span>
                  <span>Due: {del.dueDate}</span>
                </div>

                {del.mentorFeedback && (
                  <div className="p-2.5 rounded-lg bg-[#070c18] border border-slate-800 text-[11px] text-slate-300 italic">
                    "{del.mentorFeedback}"
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Submit Deliverable Box */}
          <div className="p-4 rounded-xl bg-[#070c18] border border-dashed border-slate-700 space-y-2 text-center">
            <div className="text-xs font-bold text-white">Submit New Code Pull Request</div>
            <p className="text-[11px] text-slate-400">
              Paste your GitHub PR link or container artifact registry URL for automated test evaluation.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder="https://github.com/nexskill-cohort/capstone-repo/pull/14"
                className="flex-1 bg-[#0d1424] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setSubmissionFeedback('PR submitted to CI/CD pipeline! Automated linting & tests in progress.');
                  setTimeout(() => setSubmissionFeedback(null), 4000);
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-600 cursor-pointer"
              >
                Submit
              </button>
            </div>
            {submissionFeedback && (
              <p className="text-[11px] text-emerald-400 font-mono pt-1">{submissionFeedback}</p>
            )}
          </div>
        </div>
      </div>

      {/* COHORT WEEKLY SCHEDULE */}
      <div className="rounded-2xl bg-[#0f172a] border border-slate-800 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#00f0ff]" />
            <h3 className="text-base font-bold text-white">Upcoming Cohort Live Schedule</h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Sync Timezone: Asia/Karachi (PKT)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentStudent.upcomingSessions.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-xl bg-[#070c18] border border-slate-800 space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2 py-0.5 rounded">
                  {s.type}
                </span>
                <h4 className="text-xs font-bold text-white leading-snug mt-1.5">
                  {s.title}
                </h4>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  {s.date} • {s.time}
                </div>
                <div className="text-[11px] text-slate-400">
                  Lead: <span className="text-white font-medium">{s.instructor}</span>
                </div>
              </div>

              <button
                onClick={() => setLiveStreamModalOpen(true)}
                className="w-full mt-2 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00f0ff]/50 text-xs text-[#00f0ff] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Join Broadcast Room</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Broadcast Modal Mock */}
      {liveStreamModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-xl rounded-2xl bg-[#0b1120] border border-[#00f0ff]/40 p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 flex items-center justify-center mx-auto">
              <Video className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Live Broadcast &amp; Mentor Room</h3>
              <p className="text-xs text-slate-400 mt-1">
                Connecting to Nexskill High-Definition Classroom Audio/Video Stream (Arfa Tower Studio 01).
              </p>
            </div>
            <div className="p-3 bg-[#070c18] rounded-xl border border-slate-800 text-xs font-mono text-emerald-400">
              Live Stream Status: Connected • Latency 18ms • 1080p 60fps
            </div>
            <button
              onClick={() => setLiveStreamModalOpen(false)}
              className="px-6 py-2.5 rounded-lg bg-[#00f0ff] text-[#070c18] font-bold text-xs"
            >
              Exit Studio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
