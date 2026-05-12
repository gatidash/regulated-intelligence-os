import React from 'react'
import {
  Terminal,
  Layers,
  ShieldCheck,
  Cpu,
  Workflow,
  Database,
  Users,
  FileCheck2,
  GitBranch,
  Activity,
  Gauge,
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CircuitBoard,
  Scale,
  Lock,
  AlertTriangle,
  Sparkles,
  Compass,
  Binary,
  TrendingUp,
  Globe2,
  Zap,
  Radio,
  Award,
  Target,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// DATA — edit copy here without touching JSX
// ─────────────────────────────────────────────────────────────

const NAV = [
  { id: 'boot', label: '00 / Boot' },
  { id: 'stack', label: '01 / Stack' },
  { id: 'proof', label: '02 / Proof' },
  { id: 'kernel', label: '03 / Kernel' },
  { id: 'governance', label: '04 / Governance' },
  { id: 'metrics', label: '05 / Metrics' },
  { id: 'manifesto', label: '06 / Manifesto' },
  { id: 'manual', label: '07 / Manual' },
]

// Re-ordered to lead with the most asymmetric proofs first
const PROOF_CHIPS = [
  { v: 'Patent filed', l: 'agentic AI for regulated workflows' },
  { v: '$10B+', l: 'revenue exposure protected' },
  { v: '$4B', l: 'revenue opportunity enabled' },
  { v: '60+ reports', l: 'onboarded across 3 markets in 3 months' },
  { v: '60% ↓', l: 'manual intervention' },
  { v: '50% ↑', l: 'workflow turnaround' },
]

const STACK_LAYERS = [
  {
    n: '06',
    title: 'Auditability & Trust Layer',
    tagline: 'Every decision is reviewable. Every artifact is defensible.',
    icon: ShieldCheck,
    desc: 'Controls, traceability, explainability, governance, and compliance-grade execution for regulated environments.',
    tone: 'trust',
  },
  {
    n: '05',
    title: 'Human Judgment Interface',
    tagline: 'Designed escalation. Not bolted-on review queues.',
    icon: Users,
    desc: 'Intervention points where human expertise, escalation, and policy interpretation remain accountable.',
    tone: 'trust',
  },
  {
    n: '04',
    title: 'Intelligence Orchestration Layer',
    tagline: 'LLMs operate under contract — not on vibes.',
    icon: Cpu,
    desc: 'LLM agents, MCP connectors, orchestration, structured outputs, validation layers, retries, and human-in-the-loop overrides.',
    tone: 'cyan',
  },
  {
    n: '03',
    title: 'Platform Execution Layer',
    tagline: 'One platform. N reports. M markets. Compounding leverage.',
    icon: Workflow,
    desc: 'Unified regulatory reporting platforms, common-platform transformation, report onboarding, market scaling, and operational readiness.',
    tone: 'cyan',
  },
  {
    n: '02',
    title: 'Regulatory Control Plane',
    tagline: 'Compliance as a product surface — not a tax line item.',
    icon: Scale,
    desc: 'AML, SAR, GDPR, privacy, tax, fraud, KYC, Customer Risk Rating, and cross-border regulatory workflows.',
    tone: 'cyan',
  },
  {
    n: '01',
    title: 'Data Substrate',
    tagline: 'Without lineage, no AI claim survives an audit.',
    icon: Database,
    desc: 'ETL, BI, data governance, validation, lineage, and scalable reporting foundations.',
    tone: 'slate',
  },
]

const PROOF_MODULES = [
  {
    code: 'PM-01',
    title: 'Intelligence Orchestration in Regulated Workflows',
    icon: Cpu,
    headlineMetric: '60% manual ↓',
    headlineLine: 'Agentic AI shipped inside a regulated environment — and held its audit trail.',
    systemSignal: 'Manual review queues bottlenecking compliance throughput across multi-jurisdiction operations.',
    constraint: 'Regulated environments demanding traceability, deterministic execution, and zero tolerance for hallucinated outputs.',
    intervention: 'Built AI-driven workflow automation platforms using LLM agents, MCP-based connectors, and orchestration layers.',
    governance: 'Structured outputs, validation layers, retry mechanisms, and human-in-the-loop overrides on policy-sensitive steps.',
    scaleLever: 'Integrated systems across 5 jurisdictions on reusable orchestration primitives.',
    operatingShift: '60% manual intervention reduced · 50% processing turnaround improvement.',
    leadership: 'Submitted a patent application on agentic AI systems for regulated workflow automation.',
    proves: 'Agentic AI is shippable in regulated stacks — when orchestration is designed for audit before speed.',
  },
  {
    code: 'PM-02',
    title: 'Regulatory Reporting Platform Control Plane',
    icon: Workflow,
    headlineMetric: '60+ reports · 3 markets · 3 months',
    headlineLine: 'Replaced per-report tooling with a control plane that compounds across markets.',
    systemSignal: 'Fragmented per-report tooling preventing scale across markets and regulatory regimes.',
    constraint: 'Post-Brexit regulatory readiness, jurisdiction-specific reporting obligations, fixed delivery windows.',
    intervention: 'Led unified Regulatory Reporting Platform transformation — replaced point tools with a common-platform model.',
    governance: 'Onboarding playbooks, control attestations, and regulator-grade traceability across the reporting lifecycle.',
    scaleLever: '60+ regulatory reports onboarded across 3 markets within 3 months on a shared platform.',
    operatingShift: '60%+ operational efficiency gain · 80% reporting turnaround reduction.',
    leadership: 'Supported post-Brexit regulatory readiness across product, ops, and compliance stakeholders.',
    proves: 'Per-report tooling never compounds. Reporting becomes a product when you build the platform underneath it.',
  },
  {
    code: 'PM-03',
    title: 'Compliance-Led Market Expansion',
    icon: Globe2,
    headlineMetric: '$4B unlocked',
    headlineLine: 'Compliance reporting infrastructure positioned as a revenue lever, not a gating cost.',
    systemSignal: 'Revenue ambition blocked by missing AML/CTF and jurisdictional reporting infrastructure.',
    constraint: 'AML, SAR, and crypto transfer reporting obligations across emerging market expansion lanes.',
    intervention: 'Launched AML/SAR reporting capabilities, online-payment expansion support in China, and crypto transfer reporting in the U.S.',
    governance: 'Operationalized AML/CTF controls, regulatory metric reporting, and Go/No-Go forum participation.',
    scaleLever: 'Compliance reporting infrastructure positioned as a market-expansion enabler.',
    operatingShift: 'Helped unlock a $4B revenue opportunity through compliance-ready market entry.',
    leadership: 'Member of Business Advisory Group and Go/No-Go forums for cross-border expansion.',
    proves: 'The fastest path to new markets is the compliance surface most teams treat as a blocker.',
  },
  {
    code: 'PM-04',
    title: 'Risk, Privacy & Data Governance Foundations',
    icon: ShieldCheck,
    headlineMetric: '$10B+ protected',
    headlineLine: 'Risk scoring inside 24 hours of onboarding. 100+ privacy rules monitored at global scale.',
    systemSignal: 'Delayed customer risk scoring and fragmented privacy enforcement across international markets.',
    constraint: 'GDPR, privacy obligations, and KYC requirements at global scale with strict revenue exposure stakes.',
    intervention: 'Built Customer Risk Rating model with global ramp; led GDPR and privacy platform strategy for international markets.',
    governance: 'Auto-triggered policy enforcement, monitoring of 100+ privacy rules, and lineage across regulated data flows.',
    scaleLever: 'Risk scoring within 24 hours of onboarding; reusable governance primitives across BI/ETL foundations.',
    operatingShift: '$10B+ exposure protected · 30% OpEx savings · 30% governance & lineage improvement · 20% ETL runtime · 20% validation errors ↓.',
    leadership: 'Earlier execution in data engineering, BI, ETL (Teradata, Informatica), Tableau, validation, and governance.',
    proves: 'Strong data substrate is the precondition for AI-native operating models. Governance executes through it — or not at all.',
  },
]

const DECISIONS = [
  {
    n: '01',
    title: 'Automate vs. keep human-in-the-loop',
    icon: Users,
    tension: 'Speed and scale versus accountability in regulated workflows.',
    judgment: 'Automate deterministic steps. Preserve human escalation for policy-sensitive decisions.',
    antiPattern: 'Most teams automate the easy path and leave escalation as an afterthought ticket queue.',
  },
  {
    n: '02',
    title: 'LLM autonomy vs. auditable execution',
    icon: Binary,
    tension: 'AI flexibility versus regulatory traceability.',
    judgment: 'Structured outputs, validation layers, retries, and auditable checkpoints — every call.',
    antiPattern: 'Most teams ship freeform LLM output and discover the audit gap during the regulator review.',
  },
  {
    n: '03',
    title: 'One-off tools vs. platform primitives',
    icon: Layers,
    tension: 'Immediate delivery pressure versus long-term scalability.',
    judgment: 'Build reusable platform primitives. Refuse per-report tooling once the second jurisdiction lands.',
    antiPattern: 'Most teams ship five "fast" tools and inherit five backlogs that never converge.',
  },
  {
    n: '04',
    title: 'Market speed vs. regulatory readiness',
    icon: Compass,
    tension: 'Business urgency versus post-Brexit and jurisdiction-specific compliance obligations.',
    judgment: 'Align platform execution with control readiness and market-specific requirements.',
    antiPattern: 'Most teams launch first, retrofit controls second, and absorb the post-Brexit reopen cost.',
  },
  {
    n: '05',
    title: 'Expansion ambition vs. compliance infrastructure',
    icon: TrendingUp,
    tension: 'Revenue opportunity versus AML/CTF and regulatory obligations.',
    judgment: 'Treat compliance reporting infrastructure as the market-expansion enabler, not a gating cost.',
    antiPattern: 'Most teams scope compliance as last-mile and discover it is the critical path.',
  },
  {
    n: '06',
    title: 'Data pipelines vs. intelligent systems',
    icon: CircuitBoard,
    tension: 'Traditional reporting execution versus AI-native operating models.',
    judgment: 'Evolve from data movement and dashboards into governed intelligence orchestration.',
    antiPattern: 'Most teams add an "AI feature" on top of a brittle pipeline and ship demos, not systems.',
  },
]

// Grouped into 3 operating themes
const PROTOCOL_GROUPS = [
  {
    group: 'Execution Controls',
    desc: 'How agents are made deterministic enough to ship.',
    items: [
      { title: 'Structured outputs', icon: Binary, desc: 'JSON-schema bound generation so agents emit machine-verifiable artifacts.' },
      { title: 'Validation layers', icon: FileCheck2, desc: 'Schema, semantic, and policy validation gates before any downstream action.' },
      { title: 'Retry logic', icon: GitBranch, desc: 'Bounded retries with backoff for transient failures and degraded model output.' },
      { title: 'Human-in-the-loop design', icon: Users, desc: 'Intervention points engineered into AI workflows for policy-sensitive judgment.' },
    ],
  },
  {
    group: 'Audit Surfaces',
    desc: 'What regulators, auditors, and reviewers actually inspect.',
    items: [
      { title: 'Audit trails', icon: Activity, desc: 'End-to-end traceability from input through decision to regulatory artifact.' },
      { title: 'Explainability', icon: Sparkles, desc: 'Decision rationale captured so reviewers and regulators can follow the logic.' },
      { title: 'Policy enforcement', icon: Lock, desc: 'Auto-triggered policy execution tied to risk signals and customer context.' },
      { title: 'Jurisdiction-specific controls', icon: Globe2, desc: 'Region-aware rule engines for AML, SAR, GDPR, tax, and reporting regimes.' },
    ],
  },
  {
    group: 'Operational Posture',
    desc: 'What keeps the system trustworthy under load and over time.',
    items: [
      { title: 'Failure handling', icon: AlertTriangle, desc: 'Graceful degradation paths that fail safe — never silently — under load or anomaly.' },
      { title: 'Operational readiness', icon: Gauge, desc: 'Runbooks, SLAs, observability, and go/no-go protocols for production AI systems.' },
      { title: 'Executive governance', icon: Scale, desc: 'Forum-level oversight from Business Advisory and Go/No-Go committees.' },
    ],
  },
]

const HEADLINE_NUMBERS = [
  { v: '$10B+', l: 'Revenue exposure protected', tone: 'trust' },
  { v: '$4B', l: 'Revenue opportunity enabled', tone: 'cyan' },
  { v: '60+', l: 'Regulatory reports onboarded · 3 markets · 3 months', tone: 'cyan' },
]

const METRIC_GROUPS = [
  {
    group: 'Automation Throughput',
    icon: Zap,
    metrics: [
      { value: '60%', label: 'Manual intervention reduction' },
      { value: '50%', label: 'Processing turnaround improvement' },
    ],
  },
  {
    group: 'Reporting Cycle Compression',
    icon: Activity,
    metrics: [
      { value: '80%', label: 'Reporting turnaround reduction' },
      { value: '60%+', label: 'Operational efficiency gain' },
    ],
  },
  {
    group: 'Market Readiness',
    icon: Globe2,
    metrics: [
      { value: '60+', label: 'Regulatory reports onboarded' },
      { value: '3', label: 'Markets scaled' },
      { value: '3 mo', label: 'Onboarding timeline' },
    ],
  },
  {
    group: 'Revenue Enablement',
    icon: TrendingUp,
    metrics: [
      { value: '$4B', label: 'Revenue opportunity enabled' },
      { value: '$10B+', label: 'Revenue exposure protected' },
    ],
  },
  {
    group: 'Governance Coverage',
    icon: ShieldCheck,
    metrics: [
      { value: '100+', label: 'Privacy rules monitored' },
      { value: '30%', label: 'Data governance & lineage improvement' },
    ],
  },
  {
    group: 'Data Foundation Strength',
    icon: Database,
    metrics: [
      { value: '30%', label: 'OpEx savings' },
      { value: '20%', label: 'ETL runtime improvement' },
      { value: '20%', label: 'Validation error reduction' },
    ],
  },
]

// Trimmed to 5 sharper principles
const MANIFESTO_LINES = [
  'AI operates inside constraints — or it does not operate in production.',
  'Enterprise AI needs deterministic execution paths. LLM autonomy is not an architecture.',
  'Structured outputs, validation, retries, audit trails — these are the contract, not the polish.',
  'Human judgment must be designed into the system. Bolted on, it becomes a queue.',
  'The future of enterprise AI is governed orchestration — not uncontrolled autonomy.',
]

// Role-fit cards — replaces generic engagement vectors list
const ROLE_FITS = [
  {
    if: 'If you lead a regulated platform org',
    bring: 'I bring a control-plane operating model that compresses report onboarding 5–10× and turns compliance into a market lever.',
  },
  {
    if: 'If you are scaling AI inside the enterprise',
    bring: 'I bring an agentic execution pattern that ships under audit — patent-filed, validated in production across 5 jurisdictions.',
  },
  {
    if: 'If you are entering new regulated markets',
    bring: 'I bring the Go/No-Go playbook that has unlocked $4B in revenue opportunity without rebuilding the stack per region.',
  },
]

// ─────────────────────────────────────────────────────────────
// UI PRIMITIVES
// ─────────────────────────────────────────────────────────────

function SectionHeader({ kicker, title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className="section-eyebrow">{kicker}</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-ink-950/75 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#boot" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-cyanos-500/30 bg-cyanos-500/10">
            <Terminal className="h-3.5 w-3.5 text-cyanos-400" />
            <span className="absolute inset-0 rounded-md ring-1 ring-cyanos-400/20 animate-pulse-slow" />
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-slate-300 group-hover:text-white transition">
            RI-OS<span className="text-cyanos-400"> // </span>GATIKRISHNA.DASH
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider text-slate-400 hover:text-cyanos-400 hover:bg-white/[0.03] transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#manual"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-cyanos-500/30 bg-cyanos-500/10 px-3 py-1.5 text-xs font-semibold text-cyanos-300 hover:bg-cyanos-500/20 transition"
        >
          Operator Manual <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────

function BootSequence() {
  return (
    <section id="boot" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_30%,#000_30%,transparent_75%)]" />
      <div className="absolute inset-x-0 -top-32 h-96 bg-radial-cyan pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status pill */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]">
          <span className="inline-flex items-center gap-2 rounded-full border border-trust-500/30 bg-trust-500/[0.08] px-3 py-1 text-trust-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-trust-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-trust-400" />
            </span>
            Open to Sr. Director / VP Product roles
          </span>
          <span className="text-slate-500">AI platforms · RegTech · Governed AI</span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.04]">
          I build operating systems for{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyanos-400 via-cyan-300 to-trust-400 bg-clip-text text-transparent">
              regulated intelligence
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyanos-500/0 via-cyanos-400/60 to-trust-400/0" />
          </span>
          .
        </h1>

        {/* Plain-English anchor */}
        <p className="mt-5 max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed">
          Translation: I take compliance-heavy enterprise workflows — AML, SAR, GDPR, regulatory reporting,
          KYC, risk — and turn them into governed AI-native platforms. Agentic where it earns its keep.
          Auditable everywhere it doesn't.
        </p>

        {/* Identity strip */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="font-semibold text-white">Gatikrishna Dash</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300">Senior Product Leader</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">15+ years across product, data, AI & platforms</span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 text-slate-400"><MapPin className="h-3.5 w-3.5 text-cyanos-400" /> Hyderabad, India</span>
        </div>

        {/* Proof chips — re-ordered, leading with asymmetric proofs */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {PROOF_CHIPS.map((c, i) => (
            <div
              key={c.l}
              className={`panel p-3 ${i < 3 ? 'border-cyanos-500/20' : ''}`}
            >
              <div className={`text-sm font-semibold ${i < 3 ? 'text-cyanos-300' : 'text-white'}`}>
                {c.v}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500 leading-snug">{c.l}</div>
            </div>
          ))}
        </div>

        {/* CTAs — one primary, two secondary */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#proof" className="btn-primary">
            See the Proof Modules <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/GatiDash_SF.pdf" download className="btn-ghost">
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/gati-dash"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Linkedin className="h-4 w-4" /> Connect
          </a>
        </div>

        {/* Current State tile — replaces the boot.log */}
        <div className="mt-14 grid lg:grid-cols-2 gap-4 max-w-4xl">
          <div className="panel p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="label-mono">Current State</div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-trust-400">
                <span className="h-1.5 w-1.5 rounded-full bg-trust-400 animate-pulse" /> live
              </span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><Radio className="h-4 w-4 text-cyanos-400 flex-shrink-0 mt-0.5" /><span className="text-slate-300">Shipping agentic workflows for regulated reporting — patent filed.</span></li>
              <li className="flex gap-3"><GitBranch className="h-4 w-4 text-cyanos-400 flex-shrink-0 mt-0.5" /><span className="text-slate-300">Scaling reusable orchestration primitives across 5 jurisdictions.</span></li>
              <li className="flex gap-3"><ShieldCheck className="h-4 w-4 text-trust-400 flex-shrink-0 mt-0.5" /><span className="text-slate-300">Governance-by-design: structured outputs, validation, human-in-the-loop.</span></li>
            </ul>
          </div>

          <div className="panel p-5 sm:p-6 bg-gradient-to-br from-cyanos-500/[0.05] to-transparent border-cyanos-500/20">
            <div className="label-mono mb-4">Built For</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                'FinTech & PayTech',
                'RegTech & ComplianceTech',
                'Enterprise AI platforms',
                'Data & risk platforms',
                'AML / KYC / GDPR / tax',
                'Cross-border expansion',
              ].map((x) => (
                <div key={x} className="flex items-center gap-2 text-slate-300">
                  <ChevronRight className="h-3.5 w-3.5 text-cyanos-400 flex-shrink-0" />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OSStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="01 / OS Stack"
          title="The Regulated Intelligence OS Stack"
          subtitle="Six layers that turn compliance pressure into platform leverage. Each layer is independently governed, instrumented, and replaceable. Read top-down — that is how regulators and auditors do."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Layered architecture */}
          <div className="lg:col-span-8 space-y-3">
            {STACK_LAYERS.map((layer) => {
              const Icon = layer.icon
              const accent =
                layer.tone === 'trust'
                  ? 'border-trust-500/30 from-trust-500/10'
                  : layer.tone === 'cyan'
                  ? 'border-cyanos-500/30 from-cyanos-500/10'
                  : 'border-white/10 from-white/[0.04]'
              const iconColor =
                layer.tone === 'trust' ? 'text-trust-400' : layer.tone === 'cyan' ? 'text-cyanos-400' : 'text-slate-300'
              return (
                <div
                  key={layer.n}
                  className={`panel panel-hover ${accent} bg-gradient-to-r to-transparent p-5 sm:p-6 flex gap-5 items-start`}
                >
                  <div className="hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-900/70">
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="label-mono">LAYER {layer.n}</span>
                      <span className="h-px flex-1 bg-white/5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{layer.title}</h3>
                    <p className="mt-1 text-sm font-medium text-cyanos-300/90 italic">{layer.tagline}</p>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Operator's Read panel */}
          <aside className="lg:col-span-4">
            <div className="panel p-6 sm:p-7 h-full bg-gradient-to-br from-cyanos-500/[0.06] to-trust-500/[0.04] border-cyanos-500/20">
              <div className="label-mono mb-3">Operator's Read</div>
              <h3 className="text-2xl font-semibold text-white leading-tight">
                The stack is the strategy.
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Most enterprise AI fails at the seam between Layer 4 (the agent) and Layer 6 (the audit).
                Build the seam first. Speed compounds after.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { v: '60%', l: 'Manual ↓' },
                  { v: '80%', l: 'Cycle time ↓' },
                  { v: '$4B', l: 'Unlocked' },
                  { v: '$10B+', l: 'Protected' },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg border border-white/5 bg-ink-900/60 p-3">
                    <div className="text-xl font-semibold text-cyanos-400">{m.v}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-500">{m.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-trust-400 animate-pulse" />
                stack.status = governed
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ProofModules() {
  return (
    <section id="proof" className="relative py-24 sm:py-32 border-y border-white/5 bg-ink-950/40">
      <div className="absolute inset-0 bg-tech-grid opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_80%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="02 / Proof Modules"
          title="Shipped systems. Measured shifts."
          subtitle="Four modules. Headline result up top — full structure below. Read for the killer line first, then drill in."
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {PROOF_MODULES.map((m) => {
            const Icon = m.icon
            return (
              <article
                key={m.code}
                className="panel panel-hover p-6 sm:p-7 flex flex-col group"
              >
                <header className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-lg border border-cyanos-500/30 bg-cyanos-500/10">
                    <Icon className="h-4 w-4 text-cyanos-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="label-mono">{m.code}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mt-0.5">
                      {m.title}
                    </h3>
                  </div>
                </header>

                {/* Headline result strip */}
                <div className="mb-5 rounded-xl border border-cyanos-500/20 bg-gradient-to-r from-cyanos-500/[0.08] to-transparent p-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-br from-cyanos-300 to-cyanos-500 bg-clip-text text-transparent">
                      {m.headlineMetric}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-200 leading-snug">
                    {m.headlineLine}
                  </p>
                </div>

                <dl className="space-y-3 text-sm">
                  <Row label="System signal" value={m.systemSignal} />
                  <Row label="Constraint environment" value={m.constraint} />
                  <Row label="Product intervention" value={m.intervention} />
                  <Row label="Governance mechanism" value={m.governance} />
                  <Row label="Scale lever" value={m.scaleLever} />
                  <Row label="Measured operating shift" value={m.operatingShift} accent />
                  <Row label="Leadership proof" value={m.leadership} />
                </dl>

                <footer className="mt-5 pt-5 border-t border-white/5">
                  <div className="label-mono mb-1.5">What this proves</div>
                  <p className="text-sm text-cyanos-300 leading-relaxed font-medium">{m.proves}</p>
                </footer>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Row({ label, value, accent = false }) {
  return (
    <div>
      <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">{label}</dt>
      <dd className={`mt-0.5 leading-relaxed ${accent ? 'text-trust-300 font-medium' : 'text-slate-300'}`}>
        {value}
      </dd>
    </div>
  )
}

function DecisionKernel() {
  return (
    <section id="kernel" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="03 / Decision Kernel"
          title="Product judgment. Not just outcomes."
          subtitle="The non-obvious calls that define how a regulated intelligence platform actually gets built. Each card includes the trap most teams fall into."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DECISIONS.map((d) => {
            const Icon = d.icon
            return (
              <div key={d.n} className="panel panel-hover p-6 group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] group-hover:border-cyanos-500/40 transition">
                    <Icon className="h-4 w-4 text-cyanos-400" />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-slate-600">DK-{d.n}</span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">{d.title}</h3>
                <div className="mt-4 space-y-3 flex-1">
                  <div>
                    <div className="label-mono text-slate-500/80">Tension</div>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">{d.tension}</p>
                  </div>
                  <div className="rounded-lg border border-cyanos-500/15 bg-cyanos-500/[0.04] p-3">
                    <div className="label-mono">Judgment</div>
                    <p className="mt-1 text-sm text-cyanos-200 leading-relaxed">{d.judgment}</p>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400/70">Anti-pattern</div>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">{d.antiPattern}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GovernanceProtocols() {
  return (
    <section id="governance" className="relative py-24 sm:py-32 border-y border-white/5 bg-ink-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="04 / Governance Protocols"
          title="Governance Protocols for Enterprise AI"
          subtitle="The discipline that lets agentic systems ship inside regulated environments — without becoming a liability. Grouped by what they actually do in production."
        />

        <div className="space-y-10">
          {PROTOCOL_GROUPS.map((g) => (
            <div key={g.group}>
              <div className="flex flex-wrap items-baseline gap-3 mb-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white">{g.group}</h3>
                <span className="h-px flex-1 min-w-[2rem] bg-white/5" />
                <span className="text-sm text-slate-500">{g.desc}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {g.items.map((p) => {
                  const Icon = p.icon
                  return (
                    <div key={p.title} className="panel panel-hover p-5 flex gap-3 items-start">
                      <div className="h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-lg border border-trust-500/25 bg-trust-500/[0.08]">
                        <Icon className="h-4 w-4 text-trust-400" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 panel p-5 max-w-3xl mx-auto text-center">
          <p className="text-sm text-slate-300">
            <span className="text-trust-400 font-mono text-xs uppercase tracking-widest">Operating principle · </span>
            Responsible AI is not a policy document. It is a set of executable controls wired into product surfaces.
          </p>
        </div>
      </div>
    </section>
  )
}

function ScaleMetrics() {
  return (
    <section id="metrics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="05 / Scale Metrics"
          title="Scale Metrics"
          subtitle="A live dashboard of the operating shifts this system has delivered across regulated, multi-jurisdiction environments."
        />

        {/* Headline numbers strip */}
        <div className="mb-10 grid md:grid-cols-3 gap-4">
          {HEADLINE_NUMBERS.map((h) => {
            const accent = h.tone === 'trust' ? 'border-trust-500/30 from-trust-500/[0.08]' : 'border-cyanos-500/30 from-cyanos-500/[0.08]'
            const color = h.tone === 'trust' ? 'from-trust-300 to-trust-500' : 'from-cyanos-300 to-cyanos-500'
            return (
              <div key={h.l} className={`panel p-6 ${accent} bg-gradient-to-br to-transparent`}>
                <div className={`text-4xl sm:text-5xl font-semibold bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
                  {h.v}
                </div>
                <div className="mt-2 text-xs sm:text-sm text-slate-300 leading-snug">{h.l}</div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {METRIC_GROUPS.map((g) => {
            const Icon = g.icon
            return (
              <div key={g.group} className="panel p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 flex items-center justify-center rounded-lg border border-cyanos-500/25 bg-cyanos-500/[0.06]">
                    <Icon className="h-4 w-4 text-cyanos-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    {g.group}
                  </h3>
                </div>
                <div className="space-y-3">
                  {g.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between gap-3 rounded-lg border border-white/5 bg-ink-900/60 px-4 py-3"
                    >
                      <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-br from-cyanos-300 to-cyanos-500 bg-clip-text text-transparent">
                        {m.value}
                      </span>
                      <span className="text-xs text-slate-400 text-right leading-snug max-w-[60%]">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 sm:py-32 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_30%,transparent_80%)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] bg-radial-cyan pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="section-eyebrow justify-center inline-flex">06 / AI-Native Operator Manifesto</div>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
          AI does not replace governance.
          <br />
          <span className="bg-gradient-to-r from-cyanos-400 to-trust-400 bg-clip-text text-transparent">
            It makes governance executable.
          </span>
        </h2>

        <div className="mt-12 space-y-3 max-w-2xl mx-auto text-left">
          {MANIFESTO_LINES.map((line, i) => (
            <div
              key={i}
              className="flex items-start gap-4 panel p-4 sm:p-5"
            >
              <span className="font-mono text-xs text-cyanos-400/80 mt-1 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">{line}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl mx-auto text-sm sm:text-base text-slate-400 italic">
          The teams that win the next decade will not be the fastest with LLMs.
          They will be the most disciplined.
        </p>
      </div>
    </section>
  )
}

function OperatorManual() {
  return (
    <section id="manual" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="07 / Operator Manual"
          title="Let's build the operating model."
          subtitle="If your organization is moving from manual operations to governed AI-native execution, this is the operating model I build."
        />

        {/* Role-fit cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {ROLE_FITS.map((r, i) => (
            <div key={i} className="panel panel-hover p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-cyanos-400" />
                <span className="label-mono">ROLE FIT 0{i + 1}</span>
              </div>
              <p className="text-sm font-semibold text-white leading-snug">{r.if}</p>
              <div className="mt-3 pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-trust-400/80">I bring</span>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{r.bring}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact card */}
          <div className="lg:col-span-2 panel p-7 sm:p-9 bg-gradient-to-br from-cyanos-500/[0.05] to-transparent border-cyanos-500/20">
            <div className="label-mono mb-3">DIRECT CHANNEL</div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Gatikrishna Dash
            </h3>
            <p className="mt-1 text-slate-400">
              Senior Product Leader · AI, Automation & Strategy · Product Vision & Roadmap
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <a href="mailto:gati4dash@gmail.com" className="panel panel-hover p-4 flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-cyanos-500/30 bg-cyanos-500/10">
                  <Mail className="h-4 w-4 text-cyanos-400" />
                </div>
                <div className="min-w-0">
                  <div className="label-mono">Email</div>
                  <div className="text-sm text-white truncate">gati4dash@gmail.com</div>
                </div>
              </a>

              <a href="tel:+918939664483" className="panel panel-hover p-4 flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-cyanos-500/30 bg-cyanos-500/10">
                  <Phone className="h-4 w-4 text-cyanos-400" />
                </div>
                <div className="min-w-0">
                  <div className="label-mono">Phone</div>
                  <div className="text-sm text-white">+91 8939664483</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gati-dash"
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover p-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-cyanos-500/30 bg-cyanos-500/10">
                  <Linkedin className="h-4 w-4 text-cyanos-400" />
                </div>
                <div className="min-w-0">
                  <div className="label-mono">LinkedIn</div>
                  <div className="text-sm text-white">Gati Dash</div>
                </div>
              </a>

              <div className="panel p-4 flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-trust-500/30 bg-trust-500/10">
                  <MapPin className="h-4 w-4 text-trust-400" />
                </div>
                <div className="min-w-0">
                  <div className="label-mono">Location</div>
                  <div className="text-sm text-white">Hyderabad, India</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/GatiDash_SF.pdf" download className="btn-primary">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href="mailto:gati4dash@gmail.com" className="btn-ghost">
                <Mail className="h-4 w-4" /> Start a Conversation
              </a>
            </div>
          </div>

          {/* Distinction card */}
          <div className="panel p-7 bg-gradient-to-br from-trust-500/[0.06] to-transparent border-trust-500/20 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-4 w-4 text-trust-400" />
              <span className="label-mono text-trust-400/80">DISTINCTION</span>
            </div>
            <h3 className="text-xl font-semibold text-white leading-snug">
              Not another AI product leader.
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Most AI product leaders ship features. I ship the operating model the features run inside —
              audit-grade, multi-jurisdiction, revenue-bearing, patent-filed.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-semibold text-trust-300">15+</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">Years</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-trust-300">5</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">Jurisdictions</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-trust-300">1</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">Patent filed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 panel p-6 sm:p-8 text-center bg-gradient-to-r from-cyanos-500/[0.04] via-transparent to-trust-500/[0.04]">
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            <span className="text-cyanos-400 font-mono text-xs uppercase tracking-[0.28em] block mb-3">Closing statement</span>
            If your organization is moving from manual operations to governed AI-native execution,
            this is the operating model I build.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-trust-400 animate-pulse" />
          RI-OS // session.active · uptime: governed
        </div>
        <p className="text-xs sm:text-sm text-slate-500 text-center">
          Designed as a Regulated Intelligence Operating System.
        </p>
        <p className="text-xs text-slate-600 font-mono">
          © {new Date().getFullYear()} Gatikrishna Dash
        </p>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <BootSequence />
        <OSStack />
        <ProofModules />
        <DecisionKernel />
        <GovernanceProtocols />
        <ScaleMetrics />
        <Manifesto />
        <OperatorManual />
      </main>
      <Footer />
    </div>
  )
}
