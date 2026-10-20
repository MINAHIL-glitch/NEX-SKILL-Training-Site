// Nexskill Tech Matrix - Core Domain Data & Assets

export interface Program {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'cloud' | 'cyber' | 'design' | 'mobile' | 'data';
  categoryLabel: string;
  badge?: string;
  duration: string;
  weeks: number;
  level: string;
  rating: number;
  reviewsCount: number;
  cohortDate: string;
  seatsLeft: number;
  image: string;
  heroHeadline?: string;
  tuition: {
    upfront: string;
    monthly: string;
    currency: string;
  };
  summary: string;
  skills: string[];
  mentors: string[];
  syllabus: {
    week: string;
    title: string;
    topics: string[];
  }[];
  capstoneProject: {
    title: string;
    description: string;
    tools: string[];
  };
}

export interface Campus {
  id: string;
  name: string;
  city: string;
  locationTag: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  specs: {
    workstations: string;
    gpuRigs: string;
    internet: string;
    powerBackup: string;
    capacity: string;
  };
  highlights: string[];
  facilities: string[];
  mapEmbedUrl?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  role: string;
  avatar: string;
  trackId: string;
  trackName: string;
  cohort: string;
  progress: number;
  attendance: number;
  streakDays: number;
  currentUnit: {
    number: string;
    title: string;
    subtopics: string[];
    completedLessons: number;
    totalLessons: number;
  };
  deliverables: {
    id: string;
    title: string;
    status: 'Graded' | 'In Review' | 'Active' | 'Pending';
    score?: number;
    submittedDate: string;
    dueDate: string;
    mentorName: string;
    mentorFeedback?: string;
  }[];
  upcomingSessions: {
    id: string;
    title: string;
    date: string;
    time: string;
    instructor: string;
    type: 'Masterclass' | 'Clinic' | 'Hackathon';
  }[];
}

export interface Mentor {
  name: string;
  role: string;
  company: string;
  experience: string;
  avatar: string;
  bio: string;
}

// Mentors Catalog with high quality avatars
export const mentors: Mentor[] = [
  {
    name: 'Dr. Marcus Vance',
    role: 'Lead Cloud Architect & Principal SRE',
    company: 'Ex-Google Cloud & Kubernetes Contributor',
    experience: '14+ yrs industry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr6EXZrcIL3Bc_NpJkSaoHUkJTKYmGv_Jb4zsak14rtJrxGRIGEFGmw2eY-VkcYed7QmoqGQunR9yLzNo6bHBuPB8pBmMBFmjQfnZkPHZWcGU4g0MTAb3rvBUU2eUCHu6nwG27aezFW3OZID0ZQ7bJga2ordO9XpcgDSebBFFlfb8Y3ueA41y_Uw7ayYeszaxB8NAJ5EPA_MlODqeRWJ7ulEsrnjEUZk7TsQvtMCFQeFo61MHhZSHOYw',
    bio: 'Pioneered container orchestration pipelines and cloud governance frameworks across Fortune 500 infra.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Principal AI Researcher & RAG Specialist',
    company: 'Ex-Anthropic & DeepLearning.AI Fellow',
    experience: '9+ yrs industry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd5LeKQlWZUB9UiNOm3b2TPT8gjMZOisOlW4fMe45XIi6W1sFULx03ETHFw2DIGCaPu_Vxacq2t1jWQZGY0cvXHwVY6IXt_RWaQojfzJqQ7JAY8KjmXVED2XNvdTKhmZLh7CDOKKdREhc0_Zf6zRD9nd8m8DUbJDGBLTrPEYKmQ_XzXoxC4ry0fWC9HraU4j4ySp6VDM5Wt9njzQOH9eQ3_5YxvgIpC86WFXkMiIVrszrvPe4tEBtRrA',
    bio: 'Specializes in autonomous agent reasoning, fine-tuning open-weights models, and production RAG evaluation architectures.',
  },
  {
    name: 'Devansh Kapoor',
    role: 'Staff Cyber Defense & SOC Ops Lead',
    company: 'Certified Ethical Hacker & Bug Bounty Hall of Fame',
    experience: '11+ yrs industry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14GYSpP8xs6Y5oHItw0fcuaFdR01v5HO-DVuDIhQ9u3plkL81xX8pH1j1nZcmdbnayxqIqvr4MopuSFmUvYPxGMpnR1_PuWk548HhX9i-nt2CIrpJC_0DRbpbgQNZ1OZVKN6CGmsEwI8Rb1nhiTW3JyIrTjDJ4p3LsxBenIbseExqIVsOe0-iHrHiUhcUgWQnoq8OFZodF38LUGx3s5RdlurAXKz7uwkPT0jPLi_uiaWXlfuF6BM2Rg',
    bio: 'Secured top banking networks and discovered critical zero-days in enterprise authentication protocols.',
  },
  {
    name: 'Alex Rivera',
    role: 'Senior DevOps & Distributed Systems Specialist',
    company: 'Tech Matrix Lead Instructor',
    experience: '8+ yrs industry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiS1eHjU2b--qFjtoLcymdsSKz2CmcHAyXMVAhSufBYVL6D2V1wn1Po30dQy7lW935x_LhZznTxCZoe9FcS-itivVVadIspAWe275_Ec2xgEVvf2qu820PFC7o9_nPrjll9fg2U09BJRSEFLKCYzw3zGfWKL1LxJfSROryOWtsSew8PqyXpxerx4ljb80iGvpA0x59kUQ7ETfEI6ogiEg6l6QWocTLEXmo2xn4Fn2HyCIq6L8MHlrZ8Q',
    bio: 'Hands-on guide for continuous delivery, Terraform multi-cloud provisioning, and Kubernetes reliability engineering.',
  },
  {
    name: 'Zainab Tariq',
    role: 'Director of Product Engineering & Full Stack Lead',
    company: 'Ex-Careem & Tech Accelerator Mentor',
    experience: '10+ yrs industry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAz4OXoBJVtsRXhRgieNCZ5t4JuaD8ui2jlX8UYyFUNcpBBA4mbakd_iby9v9RRBjFG0VBB8Q-GTQbJRh2M0uRzQh5axZigDdWY3Evb9c3gby3HZHNfO89BzcSmoajdLQc9gjUMydtEa_aC_kyEep5B02eM8fEisKV7LR_UsDF7vOciRlgCpdasjT1b89lKpVaLoTCkxTvPcH5cdM32ojs5DOhdhx8UF0OkZQbLuTv8YwCVdgbT5UM5Q',
    bio: 'Architected scalable microservices supporting 10M+ daily transactions, dedicated to building world-class engineers.',
  },
  {
    name: 'Hamza Zubair',
    role: 'Staff Mobile Engineer (Flutter & iOS)',
    company: 'Senior Architect at Fintech Unicorn',
    experience: '7+ yrs industry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYVpx-fPi7MzxYqXHpEZiDw1nQPaJLdPCovfbx0R47s4aD1G',
    bio: 'Created high-performance mobile payment frameworks with offline-first local SQLite sync and on-device ML.',
  }
];

// Programs Catalog
export const programs: Program[] = [
  {
    id: 'ai-engineering',
    title: 'Full Stack Artificial Intelligence & Agentic Systems',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    badge: 'POPULAR & HIGH DEMAND',
    duration: '24 Weeks',
    weeks: 24,
    level: 'Intermediate to Advanced',
    rating: 4.95,
    reviewsCount: 382,
    cohortDate: 'June 15, 2025',
    seatsLeft: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM8p0P0fVYKwp5QnNRi3y8qLoetTZAohjLSRyz_1tWk2H45g',
    summary: 'Master Agentic AI, custom LLM fine-tuning, Vector DBs, LangChain/LlamaIndex, RAG pipelines, and enterprise AI app deployment.',
    skills: ['PyTorch', 'LangChain', 'LlamaIndex', 'Hugging Face', 'Qdrant / Milvus', 'Agentic Workflows', 'FastAPI', 'Docker'],
    mentors: ['Sarah Jenkins', 'Dr. Marcus Vance'],
    tuition: {
      upfront: 'PKR 145,000',
      monthly: 'PKR 26,000/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'Deep Learning Foundations & Transformer Architecture',
        topics: ['Neural network mechanics with PyTorch', 'Self-attention and Transformer decoders', 'Embeddings space and cosine retrieval', 'Hands-on tokenizers and model weights']
      },
      {
        week: 'Weeks 5-10',
        title: 'Advanced RAG Systems & Vector Databases',
        topics: ['Hybrid search (BM25 + Dense embeddings)', 'Context compression and reranking (Cohere)', 'Chunking heuristics and metadata filtering', 'Benchmarking RAG with RAGAS']
      },
      {
        week: 'Weeks 11-18',
        title: 'Autonomous Agents & Multi-Agent Swarms',
        topics: ['LangGraph state machines', 'CrewAI multi-agent delegation', 'Tool-calling and memory architectures', 'Function calling & schema extraction']
      },
      {
        week: 'Weeks 19-24',
        title: 'LLMOps, Quantization & Production Deployment',
        topics: ['vLLM and TensorRT-LLM serving', 'LoRA / QLoRA parameter-efficient fine tuning', 'Continuous evaluation and guardrails (NeMo)', 'Graduation Capstone Presentation']
      }
    ],
    capstoneProject: {
      title: 'Enterprise Multi-Agent Intelligence Hub',
      description: 'An autonomous multi-agent system that ingests confidential enterprise documents, runs real-time compliance audits, and generates executive briefing reports with citations.',
      tools: ['FastAPI', 'LangGraph', 'Qdrant', 'Next.js', 'Docker', 'Ollama']
    }
  },
  {
    id: 'fullstack-mern',
    title: 'Software Engineering with AI (MERN & Next.js 15 Pro)',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web',
    badge: 'FLAGSHIP BOOTCAMP',
    duration: '20 Weeks',
    weeks: 20,
    level: 'Beginner to Professional',
    rating: 4.92,
    reviewsCount: 520,
    cohortDate: 'June 01, 2025',
    seatsLeft: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfHJT89X8pIn2VT3S-qLnFFnsfua7bPtcXipAo_p89X',
    summary: 'Build high-scale full-stack applications with React 19, Next.js 15 App Router, TypeScript, Node.js, PostgreSQL/MongoDB, and AI copilot integration.',
    skills: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'GraphQL', 'Redis Caching'],
    mentors: ['Zainab Tariq', 'Alex Rivera'],
    tuition: {
      upfront: 'PKR 125,000',
      monthly: 'PKR 22,500/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'Modern TypeScript & Reactive Frontends',
        topics: ['Strict TypeScript mastery', 'React 19 Server Components & Actions', 'State management patterns with Zustand', 'Tailwind responsive layouts & micro-interactions']
      },
      {
        week: 'Weeks 5-10',
        title: 'Full Stack Next.js 15 & High-Perf Backends',
        topics: ['Next.js 15 App Router, Parallel & Intercepting routes', 'PostgreSQL database modeling & Prisma/Drizzle ORM', 'Session auth, JWT, OAuth 2.0 flows', 'RESTful API & tRPC design']
      },
      {
        week: 'Weeks 11-16',
        title: 'Scalability, Caching & AI Integrations',
        topics: ['Redis caching layer & distributed rate limiting', 'Real-time WebSockets & event streaming', 'Embedding AI streaming responses with Vercel AI SDK', 'Payment gateway integration (Stripe / Local)']
      },
      {
        week: 'Weeks 17-20',
        title: 'Production CI/CD & Cloud Deployment',
        topics: ['Dockerizing full-stack microservices', 'GitHub Actions automated testing suites', 'Deployment to AWS ECS & Vercel edge networks', 'Live Capstone Demo Day']
      }
    ],
    capstoneProject: {
      title: 'B2B Collaborative Workspace & AI Workflows Engine',
      description: 'Full-featured SaaS platform with multi-tenant authentication, collaborative real-time documents, AI workflow automations, and recurring Stripe subscriptions.',
      tools: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Redis']
    }
  },
  {
    id: 'cloud-devops',
    title: 'Enterprise Cloud Architect & Kubernetes DevOps',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    badge: 'INDUSTRY CERTIFIED',
    duration: '22 Weeks',
    weeks: 22,
    level: 'Intermediate to Advanced',
    rating: 4.96,
    reviewsCount: 310,
    cohortDate: 'June 20, 2025',
    seatsLeft: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf36f4EcBuXyhEUXZFSgWNOH_joj3ajYcDKeYn_2k3d',
    summary: 'Master Kubernetes orchestration, AWS/GCP cloud architectures, Terraform Infrastructure as Code, GitOps with ArgoCD, and enterprise observability.',
    skills: ['Kubernetes', 'AWS', 'Docker', 'Terraform', 'Helm', 'ArgoCD', 'Prometheus & Grafana', 'Linux Shell'],
    mentors: ['Dr. Marcus Vance', 'Alex Rivera'],
    tuition: {
      upfront: 'PKR 140,000',
      monthly: 'PKR 25,000/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'Linux Systems Internals & Containerization',
        topics: ['Advanced bash scripting & networking protocols', 'Docker internals, namespaces & multi-stage builds', 'Registry management & container security scanning', 'Local testing with Kind and Minikube']
      },
      {
        week: 'Weeks 5-10',
        title: 'Kubernetes Production Architecture & Helm',
        topics: ['Pods, Deployments, StatefulSets & DaemonSets', 'Ingress controllers, Cert-Manager, TLS termination', 'Packaging applications with Helm Charts', 'ConfigMaps, Secrets and Vault injection']
      },
      {
        week: 'Weeks 11-16',
        title: 'Infrastructure as Code (Terraform) & Cloud Ops',
        topics: ['Terraform modular multi-account architectures', 'AWS VPC, Subnets, Security Groups & IAM roles', 'EKS cluster deployment via Terraform', 'State management with S3 & DynamoDB locking']
      },
      {
        week: 'Weeks 17-22',
        title: 'GitOps, Observability & Chaos Engineering',
        topics: ['GitOps automation with ArgoCD', 'Prometheus telemetry & Grafana dashboards', 'Distributed tracing with OpenTelemetry', 'Site Reliability Engineering and DR drills']
      }
    ],
    capstoneProject: {
      title: 'Multi-Region High-Availability Microservices Mesh',
      description: 'Fully automated GitOps pipeline deploying a 5-microservice banking application across multiple AWS regions with automatic failover, canary deployments, and real-time SLA metrics.',
      tools: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD', 'Prometheus', 'AWS EKS']
    }
  },
  {
    id: 'cyber-security',
    title: 'Advanced Cyber Security, SOC Ops & Bug Bounty',
    category: 'cyber',
    categoryLabel: 'Cyber Security',
    badge: 'HANDS-ON LABS',
    duration: '20 Weeks',
    weeks: 20,
    level: 'Beginner to Advanced',
    rating: 4.89,
    reviewsCount: 290,
    cohortDate: 'June 10, 2025',
    seatsLeft: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBky_j1tqYpPGJLpqm2WeEpa9nHlgdpSrSzoTag_14p0',
    summary: 'Conduct red-team penetration testing, exploit OWASP Top 10 vulnerabilities, monitor SOC environments with SIEM tools, and legally hunt bug bounties.',
    skills: ['Kali Linux', 'Burp Suite Pro', 'Metasploit', 'Wireshark', 'Splunk / SIEM', 'Network Pentesting', 'Active Directory Hacking', 'OWASP Top 10'],
    mentors: ['Devansh Kapoor'],
    tuition: {
      upfront: 'PKR 135,000',
      monthly: 'PKR 24,000/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'Defensive Network Architecture & Reconnaissance',
        topics: ['TCP/IP deep dive, OSI layer attacks, Wireshark', 'Passive & active reconnaissance (OSINT, Nmap)', 'Vulnerability scanning with Nessus', 'Setting up virtual target environments']
      },
      {
        week: 'Weeks 5-10',
        title: 'Web Application Penetration Testing',
        topics: ['SQL injection, Blind SQLi and XSS exploitation', 'SSRF, CSRF, IDOR and broken object level auth', 'Burp Suite Suite Pro automation & custom extensions', 'API security testing (REST & GraphQL)']
      },
      {
        week: 'Weeks 11-16',
        title: 'Active Directory & Internal Network Attacks',
        topics: ['Kerberoasting, Pass-the-Hash, AS-REP roasting', 'Privilege escalation on Linux & Windows', 'Living off the Land (LotL) techniques', 'Evasion of EDR and antivirus agents']
      },
      {
        week: 'Weeks 17-20',
        title: 'SOC Monitoring, Incident Response & Bounty Hunting',
        topics: ['Splunk SIEM rule creation and threat detection', 'Live incident triage and memory forensics', 'Bug bounty methodology on HackerOne & Bugcrowd', 'Writing impactful proof-of-concept reports']
      }
    ],
    capstoneProject: {
      title: 'Enterprise Red Team Pentest & Vulnerability Audit',
      description: 'Perform a comprehensive black-box and white-box penetration test on a simulated multi-tier financial institution and compile an executive remediation report.',
      tools: ['Burp Suite', 'Kali Linux', 'Splunk', 'Metasploit', 'BloodHound', 'Wireshark']
    }
  },
  {
    id: 'uiux-design',
    title: 'Advanced UI/UX Product Design with AI Systems',
    category: 'design',
    categoryLabel: 'Product & Design',
    badge: 'PORTFOLIO READY',
    duration: '16 Weeks',
    weeks: 16,
    level: 'All Levels',
    rating: 4.94,
    reviewsCount: 245,
    cohortDate: 'June 05, 2025',
    seatsLeft: 7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYVpx-fPi7MzxYqXHpEZiDw1nQPaJLdPCovfbx0R47s4aD1G',
    summary: 'Craft world-class digital products using Figma design systems, tokens, AI-powered user research, interactive micro-prototyping, and design-to-code workflows.',
    skills: ['Figma Mastery', 'Design Systems', 'Design Tokens', 'User Research', 'Interactive Prototyping', 'Usability Testing', 'Framer', 'AI Asset Generation'],
    mentors: ['Sarah Jenkins', 'Zainab Tariq'],
    tuition: {
      upfront: 'PKR 110,000',
      monthly: 'PKR 20,000/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'User Psychology, Research & Product Strategy',
        topics: ['Mental models, cognitive biases & UX heuristics', 'Synthesizing qualitative user interviews with AI', 'Information architecture & user flow mapping', 'Wireframing in Figma with auto-layout']
      },
      {
        week: 'Weeks 5-8',
        title: 'Scalable Design Systems & Component Architecture',
        topics: ['Atomic design principles & component variants', 'Design tokens (color, typography, elevation, spacing)', 'Dark mode theming and WCAG AAA accessibility', 'Figma variables and interactive logic']
      },
      {
        week: 'Weeks 9-12',
        title: 'High-Fidelity Micro-interactions & Prototyping',
        topics: ['Smart animate, physics-based gesture transitions', 'Designing for responsive viewports (Mobile to 4K)', 'Interactive dashboards with rich data visualizations', 'Prototyping with Framer & web deployment']
      },
      {
        week: 'Weeks 13-16',
        title: 'Design Handoff, Design-to-Code & Portfolio',
        topics: ['Figma Dev Mode specs and token translation', 'A/B testing, heatmaps, and usability analytics', 'Building 3 complete case studies for global tech roles', 'Portfolio showcase & mock design challenge interviews']
      }
    ],
    capstoneProject: {
      title: 'Global Fintech Super-App & Enterprise Design System',
      description: 'End-to-end design of an AI-driven multi-currency wealth management application including 80+ components design system and interactive prototype.',
      tools: ['Figma', 'Framer', 'Notion', 'Midjourney', 'Storybook']
    }
  },
  {
    id: 'flutter-mobile',
    title: 'Mobile Engineering with Flutter, Dart & On-Device AI',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    badge: 'CROSS PLATFORM',
    duration: '18 Weeks',
    weeks: 18,
    level: 'Beginner to Intermediate',
    rating: 4.88,
    reviewsCount: 198,
    cohortDate: 'June 18, 2025',
    seatsLeft: 9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMzKdF77sWP2Bc0QWRd0zof7-vNmY1DWElxNGS_3f2b',
    summary: 'Architect sleek cross-platform iOS & Android mobile apps using Flutter 3, Dart, Riverpod state management, offline sync, and on-device machine learning.',
    skills: ['Flutter 3', 'Dart', 'Riverpod', 'Firebase', 'SQLite / Hive', 'REST APIs', 'App Store / Play Store Deployment', 'TFLite'],
    mentors: ['Hamza Zubair'],
    tuition: {
      upfront: 'PKR 115,000',
      monthly: 'PKR 21,000/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'Dart Object-Oriented Mastery & Flutter Widgets',
        topics: ['Null safety, async/await, streams in Dart', 'Widget lifecycle, CustomPaint, animations', 'Responsive multi-screen layouts', 'Clean architecture file organization']
      },
      {
        week: 'Weeks 5-9',
        title: 'State Management with Riverpod & Local Persistence',
        topics: ['StateNotifier, AsyncValue, code generation with riverpod_generator', 'Offline database caching with Isar / Hive', 'Secure storage & biometric login', 'Complex form validation and file uploads']
      },
      {
        week: 'Weeks 10-14',
        title: 'Cloud Integration & On-Device Machine Learning',
        topics: ['Firebase Auth, Firestore, Push Notifications', 'Integrating on-device vision with TensorFlow Lite', 'Google Maps integration and live location tracking', 'In-App purchases and subscription management']
      },
      {
        week: 'Weeks 15-18',
        title: 'Performance Profiling & Store Publishing',
        topics: ['Flutter DevTools, reducing app bundle size', 'CI/CD pipeline with GitHub Actions & Fastlane', 'Submitting to Apple App Store & Google Play Store', 'Final Production Demo Day']
      }
    ],
    capstoneProject: {
      title: 'Hyperlocal Logistics & Delivery Platform',
      description: 'A production-grade mobile app with real-time driver tracking on maps, push alerts, offline order caching, and customer chat.',
      tools: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Google Maps API']
    }
  },
  {
    id: 'data-engineering',
    title: 'Modern Data Engineering, Snowflake & Apache Spark',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    badge: 'HIGH SALARY',
    duration: '20 Weeks',
    weeks: 20,
    level: 'Intermediate',
    rating: 4.91,
    reviewsCount: 175,
    cohortDate: 'June 25, 2025',
    seatsLeft: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6VZUO4ahgG7F0UBucGckEIvBc_NZRiKUmyMHv_3j1k',
    summary: 'Build scalable data pipelines with Python, SQL, Apache Kafka, Spark, dbt, Snowflake, and orchestrate modern Lakehouse architectures.',
    skills: ['Python', 'SQL', 'Snowflake', 'Apache Spark', 'Apache Kafka', 'dbt', 'Airflow', 'AWS S3'],
    mentors: ['Dr. Marcus Vance'],
    tuition: {
      upfront: 'PKR 135,000',
      monthly: 'PKR 24,000/mo',
      currency: 'PKR'
    },
    syllabus: [
      {
        week: 'Weeks 1-4',
        title: 'Advanced SQL, Data Modeling & Lakehouse Concepts',
        topics: ['Window functions, CTEs, query optimization', 'Star schema vs snowflake dimensional modeling', 'Data lakes vs data warehouses vs Lakehouse', 'Python for data extraction and APIs']
      },
      {
        week: 'Weeks 5-10',
        title: 'Distributed Compute with Apache Spark & Databricks',
        topics: ['PySpark DataFrames & Spark SQL', 'RDD internals, memory management, shuffle partitioning', 'Delta Lake ACID transactions on cloud storage', 'Data quality validation with Great Expectations']
      },
      {
        week: 'Weeks 11-15',
        title: 'Real-Time Streaming with Kafka & Snowflake Warehousing',
        topics: ['Kafka producers, consumers, and consumer groups', 'Streaming data into Snowflake with Snowpipe', 'Zero-copy cloning, time travel, and Snowflake RBAC', 'dbt transformations and automated documentation']
      },
      {
        week: 'Weeks 16-20',
        title: 'Pipeline Orchestration & Production MLOps',
        topics: ['DAG design and orchestration with Apache Airflow', 'Monitoring data pipelines and alerting', 'Feature stores for machine learning models', 'Graduation Capstone Presentation']
      }
    ],
    capstoneProject: {
      title: 'Real-Time E-Commerce Clickstream & Fraud Pipeline',
      description: 'Stream 100,000 simulated events per minute via Kafka into Spark streaming, transform with dbt in Snowflake, and serve real-time analytics dashboards.',
      tools: ['Kafka', 'Spark', 'Snowflake', 'dbt', 'Airflow', 'Docker']
    }
  }
];

// Campuses across Pakistan and Online
export const campuses: Campus[] = [
  {
    id: 'lahore-arfa',
    name: 'Lahore - Arfa Software Technology Park',
    city: 'Lahore',
    locationTag: 'FLAGSHIP INNOVATION HUB',
    address: 'Floor 3 & 4, Arfa Software Technology Park, Ferozepur Road, Lahore, Punjab 54000',
    phone: '+92 42 111-639-755 / +92 300 1234567',
    email: 'arfa@nexskill.com',
    hours: 'Mon - Sat: 9:00 AM - 9:00 PM (Labs open 24/7 for cohort students)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-EiSJQKjNFx6hr2R-YEIwrxY0CRhgyL2GadhL-wC8-5pG_XfRAJ6bIjKAMcxCwfA7-6m7P1wFKOyQFgPfwgXUFlyGuxCR8JVmL49bZafL4bjvRCVJ1AcpBFjCXALz0_2AW_QbX5Ph0n8fVwNfKp6p42DLs4yePyP8YtHGWLn1iPsSd41dzAwsqhVo6UdQBSmhtQHoP3JJynnE2UgPdgVRkSJQJeXOflcjUXvSgJvB-Unj6B4yH8ptBA',
    specs: {
      workstations: '140+ High-Performance Workstations',
      gpuRigs: 'Dual NVIDIA RTX 4090 Dedicated AI Nodes',
      internet: '1 Gbps Dedicated Symmetric Fiber (Dual Redundant)',
      powerBackup: '100% Uninterrupted Power with Dual Generators & UPS',
      capacity: '400+ Active Cohort Engineers'
    },
    highlights: [
      'Situated in Pakistan’s premier government tech park alongside PITB & top tech MNCs',
      'Direct on-campus corporate interview booths and recruitment partner events',
      'High-speed hardware testing sandbox and IoT device lab',
      'Tech auditorium hosting weekly Silicon Valley keynote streams'
    ],
    facilities: [
      'Ergonomic Herman Miller styled developer stations',
      'Dual 4K displays per workstation',
      'Acoustic podcast & presentation recording studio',
      'Student collaboration lounge & rooftop cafeteria',
      'Metro Bus Station direct access (Ferozepur Road)'
    ]
  },
  {
    id: 'lahore-garden-town',
    name: 'Lahore - New Garden Town Hub',
    city: 'Lahore',
    locationTag: 'CENTRAL LEARNING HUB',
    address: 'Barkat Market Commercial Complex, New Garden Town, Lahore, Punjab',
    phone: '+92 42 35889901 / +92 301 8889900',
    email: 'gardentown@nexskill.com',
    hours: 'Mon - Sat: 8:30 AM - 8:30 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa371HvMxuVP4wFvFgzEdTWq3P0x7G88Y7PpIHaHQcY4-z0dI8TfleSBVXT2uAJvo-SFLtvZXu3Azc-yeoz57hxNWcXAKI0u3pyEYmyVDlLOjZLuaT5TJ-uXMnZ8Fcej2GMp-qli-g9y_Bq1SGpkG0WGvvBxA1JQdVZZIh0r33x-ftyQxkL7jQ2ribhNBYnGKfTUhcUbHPdTqQV0NNzALk0iAXTRofdIOyhbPv6zqTg8zIUyZ1SteSyQ',
    specs: {
      workstations: '95+ Interactive Coding Terminals',
      gpuRigs: 'Direct Cloud GPU Cluster Access',
      internet: '500 Mbps High-Speed Fiber Mesh',
      powerBackup: 'Zero-downtime Solar + Generator Backup',
      capacity: '250+ Students'
    },
    highlights: [
      'Walking distance from major universities (PU, FCCU, UMT transit)',
      'Specialized UI/UX design thinking labs with touch-enabled drawing tablets',
      'Vibrant student community and weekly weekend hackathons',
      'Dedicated female developer quiet study and prayer pods'
    ],
    facilities: [
      'Smart interactive touch whiteboards',
      'High-density Gigabit Wi-Fi 6 throughout campus',
      'Specialty coffee bar and brainstorming breakout pods',
      'Career advisory and resume review office'
    ]
  },
  {
    id: 'karachi-parsa',
    name: 'Karachi - PARSA Tower Hub',
    city: 'Karachi',
    locationTag: 'FINANCIAL & CYBER HUB',
    address: 'Suite 702, PARSA Tower, Main Shahrah-e-Faisal, Nursery, Karachi, Sindh',
    phone: '+92 21 34567890 / +92 333 9998877',
    email: 'karachi@nexskill.com',
    hours: 'Mon - Sat: 9:00 AM - 9:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCocWTlIq84LBKUAFjTXjJuHtEzMkx747bBEQLzDUf5g62ZIMLlCJvNEy4sovoYRw9uyZaUbKkDYMupqHUb-j8yx7sjyVs1oLUo6d-p4YHZjRF9TP7M0oRvWOV0PpfNtwhN7T5wVs_gcSUkwVh7U2J2aBljoITy87Ubqbm_8uc2ypNRQiHgkbrBjyBkfR9JAL2xNv8oGmc3C7EDRe5lZNEFBX1ZDoIt7HhzmTtDJ-12ueSeEFJFQGOnNw',
    specs: {
      workstations: '80+ Cyber & Enterprise Stations',
      gpuRigs: 'High-speed cloud sandbox gateways',
      internet: '1 Gbps Dedicated Enterprise Link',
      powerBackup: 'Triple-redundant power infrastructure',
      capacity: '200+ Students'
    },
    highlights: [
      'Located in the heart of Karachi business artery on Shahrah-e-Faisal',
      'Direct pipeline to Karachi fintech, banking, and overseas outsourcing giants',
      'Specialized Cyber Defense & SOC operations training war-room',
      'Weekend intensive executive cohorts for working professionals'
    ],
    facilities: [
      'Multi-screen SOC monitor wall for live cyber defense labs',
      'Soundproof discussion rooms for global client pitch training',
      'Secure biometric access and dedicated locker areas'
    ]
  },
  {
    id: 'mian-channu',
    name: 'Mian Channu - South Punjab Hub',
    city: 'Mian Channu',
    locationTag: 'TECH TALENT INCUBATOR',
    address: 'Near T-Square Commercial Area, GT Road, Mian Channu, Punjab',
    phone: '+92 302 4443322 / +92 300 7776655',
    email: 'mianchannu@nexskill.com',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKupkQiI-LuT1-09e2aMv5ZkXkn5qKPD2amKBzVMjKx4hYs81WUwQX6QUHi1XWOPaODCIN2N_NZPLkD19bShyNbzNszwU3b_VhMUaTopQLkQuBT4IC7AJmty1itFj5Nx6xXS4l5N3HhPmsfq3HdH4DoT6ChPbCU-yopSkmGxLRQ4NhA_TJX9bP5BMHJe4wY3Vi0ga5A-sKlchwynlbUS5PJD3krV5ZYPaGWJfsMUmuxUaXc5Gceghw2Q',
    specs: {
      workstations: '60+ Modern Computing Desks',
      gpuRigs: 'Virtual Cloud Desktop Rigs',
      internet: 'Dual 200 Mbps Optical Fiber Connections',
      powerBackup: 'Industrial Inverter & Solar Backup',
      capacity: '150+ Students'
    },
    highlights: [
      'Empowering South Punjab youth with global freelancing & remote tech careers',
      'Over 2,400+ graduates successfully working on Upwork, Fiverr, and global contracts',
      'English communication and remote client negotiation workshops',
      'Free co-working space access for top graduating students'
    ],
    facilities: [
      'Modern air-conditioned computer labs with high-speed internet',
      'Freelancing mentoring desk with veteran Top-Rated sellers',
      'Financial literacy and international remittance setup support'
    ]
  },
  {
    id: 'virtual-global',
    name: 'Virtual Global Interactive Campus',
    city: 'Online / Worldwide',
    locationTag: 'ACCESSIBLE EVERYWHERE',
    address: 'Cloud-native interactive platform with 24/7 Live Sandbox & Discord Guild',
    phone: '+92 42 111-639-755 (Global Toll-Free)',
    email: 'online@nexskill.com',
    hours: '24/7 Access (Live sessions scheduled in PKT / EST / GMT)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCojPSvQdwdaB7bFLbTgpvIL0DE8aTf5MZhSv_a0xL1',
    specs: {
      workstations: 'Browser-based Ephemeral Cloud Terminals',
      gpuRigs: 'NVIDIA A100 On-Demand Cloud Pods',
      internet: 'Global CDN with <30ms latency in 80+ countries',
      powerBackup: '100% Cloud SLA Guaranteed',
      capacity: 'Unlimited Concurrent Learners'
    },
    highlights: [
      'Interactive live lectures with two-way audio, code sharing, and instant polls',
      'Cloud sandbox pre-configured with all compilers, Docker, K8s, and Python stacks',
      'Daily mentor office hours spanning multiple time zones',
      'Active community of 15,000+ engineers on private Discord guild'
    ],
    facilities: [
      'Real-time automated code assessment engine',
      'Recorded session archive with searchable transcripts',
      'Peer-to-peer virtual study lounges with 24/7 voice channels'
    ]
  }
];

// Student Profiles for the LMS Portal
export const studentProfiles: Record<string, StudentProfile> = {
  alex: {
    id: 'alex',
    name: 'Alex Rivera',
    role: 'Cloud DevOps Cohort Student',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiS1eHjU2b--qFjtoLcymdsSKz2CmcHAyXMVAhSufBYVL6D2V1wn1Po30dQy7lW935x_LhZznTxCZoe9FcS-itivVVadIspAWe275_Ec2xgEVvf2qu820PFC7o9_nPrjll9fg2U09BJRSEFLKCYzw3zGfWKL1LxJfSROryOWtsSew8PqyXpxerx4ljb80iGvpA0x59kUQ7ETfEI6ogiEg6l6QWocTLEXmo2xn4Fn2HyCIq6L8MHlrZ8Q',
    trackId: 'cloud-devops',
    trackName: 'Enterprise Cloud Architect & Kubernetes DevOps',
    cohort: 'Cohort 24 - Alpha (Weekend)',
    progress: 68,
    attendance: 96,
    streakDays: 18,
    currentUnit: {
      number: 'Unit 07',
      title: 'Kubernetes Cluster Orchestration & Helm Charts',
      completedLessons: 14,
      totalLessons: 20,
      subtopics: [
        'Deploying State-Aware Services with StatefulSets',
        'Configuring Multi-Node Helm 3 Release Pipelines',
        'Ingress-NGINX with Automated Let’s Encrypt TLS',
        'Probing Liveness and Readiness for Self-Healing Pods'
      ]
    },
    deliverables: [
      {
        id: 'del-01',
        title: 'Multi-Region Microservices Deployment & Observability',
        status: 'Graded',
        score: 94,
        submittedDate: 'Oct 14, 2025',
        dueDate: 'Oct 15, 2025',
        mentorName: 'Dr. Marcus Vance',
        mentorFeedback: 'Exemplary Helm configuration and clean separation of staging/production values. Your Prometheus alert manager rules caught the simulated pod crash cleanly.'
      },
      {
        id: 'del-02',
        title: 'Distributed Helm Chart for High-Availability Redis',
        status: 'In Review',
        submittedDate: 'Yesterday 11:20 PM',
        dueDate: 'Oct 22, 2025',
        mentorName: 'Alex Rivera',
        mentorFeedback: 'Currently undergoing automated linting and cluster test execution in the verification sandbox.'
      },
      {
        id: 'del-03',
        title: 'Terraform Infrastructure as Code for Multi-AZ EKS',
        status: 'Active',
        submittedDate: 'In Progress',
        dueDate: 'Oct 28, 2025',
        mentorName: 'Dr. Marcus Vance'
      }
    ],
    upcomingSessions: [
      {
        id: 's-01',
        title: 'Cluster Orchestration Masterclass: Zero-Downtime Rolling Deploys',
        date: 'Tomorrow, Oct 21',
        time: '7:00 PM - 9:30 PM PKT',
        instructor: 'Dr. Marcus Vance',
        type: 'Masterclass'
      },
      {
        id: 's-02',
        title: '1-on-1 Mentor Code Clinic & Architecture Review',
        date: 'Thursday, Oct 23',
        time: '4:30 PM - 5:15 PM PKT',
        instructor: 'Alex Rivera',
        type: 'Clinic'
      },
      {
        id: 's-03',
        title: 'Regional Cloud Hackathon: SRE Incident Triage Challenge',
        date: 'Saturday, Oct 25',
        time: '10:00 AM - 6:00 PM PKT',
        instructor: 'Nexskill Core Engineering',
        type: 'Hackathon'
      }
    ]
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah Jenkins',
    role: 'AI Systems Resident',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd5LeKQlWZUB9UiNOm3b2TPT8gjMZOisOlW4fMe45XIi6W1sFULx03ETHFw2DIGCaPu_Vxacq2t1jWQZGY0cvXHwVY6IXt_RWaQojfzJqQ7JAY8KjmXVED2XNvdTKhmZLh7CDOKKdREhc0_Zf6zRD9nd8m8DUbJDGBLTrPEYKmQ_XzXoxC4ry0fWC9HraU4j4ySp6VDM5Wt9njzQOH9eQ3_5YxvgIpC86WFXkMiIVrszrvPe4tEBtRrA',
    trackId: 'ai-engineering',
    trackName: 'Full Stack Artificial Intelligence & Agentic Systems',
    cohort: 'Cohort 12 - AI Immersion',
    progress: 84,
    attendance: 98,
    streakDays: 32,
    currentUnit: {
      number: 'Unit 11',
      title: 'Autonomous Multi-Agent Swarms with LangGraph',
      completedLessons: 18,
      totalLessons: 22,
      subtopics: [
        'Defining Cyclic State Graphs in LangGraph',
        'Human-in-the-Loop Interrupt Hooks',
        'Hierarchical Supervisor vs Peer Swarm Routing',
        'Streaming Token Chunks over Server-Sent Events'
      ]
    },
    deliverables: [
      {
        id: 'del-11',
        title: 'Hybrid Dense/Sparse Vector Search Engine with Qdrant',
        status: 'Graded',
        score: 98,
        submittedDate: 'Oct 10, 2025',
        dueDate: 'Oct 12, 2025',
        mentorName: 'Sarah Jenkins',
        mentorFeedback: 'Outstanding precision metrics and recall optimization. The Cohere reranking layer reduced noise by 42%!'
      },
      {
        id: 'del-12',
        title: 'Production Evaluation Suite with RAGAS & Synthetic Queries',
        status: 'In Review',
        submittedDate: 'Oct 18, 2025',
        dueDate: 'Oct 20, 2025',
        mentorName: 'Sarah Jenkins'
      }
    ],
    upcomingSessions: [
      {
        id: 's-11',
        title: 'Agentic Workflows in Production: Error Recovery and Fallbacks',
        date: 'Wednesday, Oct 22',
        time: '6:30 PM - 8:30 PM PKT',
        instructor: 'Sarah Jenkins',
        type: 'Masterclass'
      }
    ]
  },
  devansh: {
    id: 'devansh',
    name: 'Devansh Kapoor',
    role: 'Cyber Defense Trainee',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14GYSpP8xs6Y5oHItw0fcuaFdR01v5HO-DVuDIhQ9u3plkL81xX8pH1j1nZcmdbnayxqIqvr4MopuSFmUvYPxGMpnR1_PuWk548HhX9i-nt2CIrpJC_0DRbpbgQNZ1OZVKN6CGmsEwI8Rb1nhiTW3JyIrTjDJ4p3LsxBenIbseExqIVsOe0-iHrHiUhcUgWQnoq8OFZodF38LUGx3s5RdlurAXKz7uwkPT0jPLi_uiaWXlfuF6BM2Rg',
    trackId: 'cyber-security',
    trackName: 'Advanced Cyber Security, SOC Ops & Bug Bounty',
    cohort: 'Cohort 18 - Red Team',
    progress: 58,
    attendance: 92,
    streakDays: 14,
    currentUnit: {
      number: 'Unit 06',
      title: 'Active Directory Domain Escalation & Kerberos Exploitation',
      completedLessons: 12,
      totalLessons: 18,
      subtopics: [
        'Enumerating Domain Trusts with BloodHound CE',
        'Extracting TGS Tickets for Offline Cracking (Kerberoasting)',
        'DCSync Attacks and Golden Ticket Generation',
        'Hardening Windows Server GPOs Against Pass-the-Hash'
      ]
    },
    deliverables: [
      {
        id: 'del-21',
        title: 'Simulated Financial App Penetration Test Report',
        status: 'Graded',
        score: 91,
        submittedDate: 'Oct 08, 2025',
        dueDate: 'Oct 10, 2025',
        mentorName: 'Devansh Kapoor',
        mentorFeedback: 'Detailed write-up on the IDOR flaw in the wire transfer API. Clean CVSS scoring calculation.'
      }
    ],
    upcomingSessions: [
      {
        id: 's-21',
        title: 'Live SOC CTF: Defending Against Ransomware in Real Time',
        date: 'Friday, Oct 24',
        time: '8:00 PM - 11:00 PM PKT',
        instructor: 'Devansh Kapoor',
        type: 'Hackathon'
      }
    ]
  }
};

// Corporate hiring partners
export const hiringPartners = [
  { name: 'Careem', category: 'Mobility & SuperApp', grads: '140+' },
  { name: 'Systems Limited', category: 'Global IT Giant', grads: '320+' },
  { name: 'NetSol Technologies', category: 'Enterprise Fintech', grads: '180+' },
  { name: 'Arbisoft', category: 'Software Engineering', grads: '115+' },
  { name: 'Devsinc', category: 'Silicon Valley Engineering', grads: '210+' },
  { name: 'Folio3', category: 'Digital Solutions', grads: '95+' },
  { name: '10Pearls', category: 'End-to-End Digital', grads: '130+' },
  { name: 'VentureDive', category: 'Product Innovation', grads: '85+' },
  { name: 'Afiniti', category: 'Enterprise AI', grads: '65+' },
  { name: 'TRG Global', category: 'Tech Operations', grads: '175+' }
];

// Aptitude & Scholarship Test Questions
export const aptitudeQuestions = [
  {
    id: 1,
    question: 'In a distributed system, what does the CAP theorem state regarding consistency, availability, and partition tolerance?',
    options: [
      'A system can simultaneously provide all three guarantees under network partitioning.',
      'A distributed data store can simultaneously provide at most two out of the three guarantees.',
      'Consistency is always prioritized over availability in relational databases.',
      'Partition tolerance is optional in modern cloud architectures.'
    ],
    correctIndex: 1,
    explanation: 'The CAP theorem states that in the event of a network partition, a system must choose between Consistency and Availability.'
  },
  {
    id: 2,
    question: 'Which vector similarity metric is most commonly used to measure the cosine angle between two normalized high-dimensional text embeddings?',
    options: [
      'Manhattan Distance (L1 norm)',
      'Cosine Similarity',
      'Hamming Distance',
      'Mahalanobis Distance'
    ],
    correctIndex: 1,
    explanation: 'Cosine similarity measures the cosine of the angle between two multi-dimensional vectors, evaluating directional alignment regardless of magnitude.'
  },
  {
    id: 3,
    question: 'In Kubernetes, which controller is best suited for deploying stateless web servers with rolling updates and auto-scaling?',
    options: [
      'StatefulSet',
      'DaemonSet',
      'Deployment',
      'CronJob'
    ],
    correctIndex: 2,
    explanation: 'Deployments are designed for stateless applications where pods are interchangeable and support declarative rolling updates.'
  },
  {
    id: 4,
    question: 'What vulnerability occurs when an application receives untrusted data and sends it to a web browser without proper validation or escaping?',
    options: [
      'Cross-Site Scripting (XSS)',
      'Server-Side Request Forgery (SSRF)',
      'Insecure Deserialization',
      'XML External Entity (XXE)'
    ],
    correctIndex: 0,
    explanation: 'XSS flaws allow attackers to execute scripts in the victim browser which can hijack user sessions or deface web sites.'
  },
  {
    id: 5,
    question: 'In modern React 19 / Next.js, what is the primary benefit of React Server Components (RSC)?',
    options: [
      'They eliminate the need for client-side JavaScript bundle weight for static content and fetch data directly on the server.',
      'They replace standard CSS with server-rendered inline styling.',
      'They disable client-side interactivity completely.',
      'They allow React to run exclusively without a browser.'
    ],
    correctIndex: 0,
    explanation: 'RSC executes exclusively on the server, streaming pre-rendered UI without adding component code to the client bundle.'
  }
];
