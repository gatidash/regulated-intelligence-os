import React, { useState } from 'react'
import { ArrowUpRight, Mail, Linkedin, MapPin } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// CONTENT — edit copy here without touching JSX
// ─────────────────────────────────────────────────────────────

const NAV = [
  { id: 'profile', label: 'Profile' },
  { id: 'work', label: 'Work' },
  { id: 'judgment', label: 'Judgment' },
  { id: 'impact', label: 'Impact' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

const PROOF_LINES = [
  '15+ years across data, platform product, regulatory systems, and AI automation.',
  'Led platforms and workflows supporting global reporting, AML, privacy, risk, and compliance operations.',
  'Built AI-enabled automation that reduced manual intervention by 60% and improved turnaround by 50%.',
]

const PILLARS = [
  {
    n: '01',
    title: 'Trusted AI Workflows',
    body: 'AI-enabled automation built with validation, structured outputs, intentional human review, and the operational controls that regulated environments require.',
  },
  {
    n: '02',
    title: 'Regulatory Platforms',
    body: 'Common platforms for reporting, compliance, AML, SAR, privacy, KYC, risk, and global regulatory readiness — designed for the long arc of regulatory change.',
  },
  {
    n: '03',
    title: 'Enterprise Product Transformation',
    body: 'Turning fragmented, manual workflows into scalable platform capabilities with measurable adoption, efficiency, and a clear path from pilot to production.',
  },
  {
    n: '04',
    title: 'Data-to-AI Foundations',
    body: 'Bringing deep data engineering, governance, lineage, and reporting experience directly into AI product execution. The substrate is the strategy.',
  },
]

const WORK = [
  {
    n: '01',
    title: 'AI-enabled workflow automation for regulated operations',
    meta: 'Workflow automation · Multi-jurisdiction',
    context:
      'Manual review queues and policy-interpretation steps were bottlenecking throughput across compliance operations spanning multiple jurisdictions, with no acceptable path to add headcount.',
    move:
      'I led the build of AI-driven workflow automation — combining LLM agents, orchestration patterns, structured outputs, validation layers, retry logic, and explicit human-in-the-loop overrides. The design treated auditability as a first-class requirement, not a downstream concern.',
    proves:
      'Agentic AI is shippable inside regulated environments — when the execution layer is designed for auditability before it is optimized for speed.',
    metrics: [
      { v: '60%', l: 'Reduction in manual intervention' },
      { v: '50%', l: 'Faster processing turnaround' },
      { v: '5', l: 'Jurisdictions integrated' },
      { v: '1', l: 'Patent application submitted' },
    ],
  },
  {
    n: '02',
    title: 'Unified regulatory reporting platform',
    meta: 'Platform strategy · Common-platform transformation',
    context:
      'Fragmented per-report tooling was preventing scale across markets and regulatory regimes during a period of significant regulatory change, including post-Brexit readiness obligations.',
    move:
      'I defined and led the strategic vision for a unified regulatory reporting platform, replacing point tools with a common-platform model and codifying report onboarding into a repeatable lifecycle — usable across markets without rebuilding per-jurisdiction.',
    proves:
      'Per-report tooling never compounds. Reporting becomes a product the moment you commit to the platform underneath it.',
    metrics: [
      { v: '60+', l: 'Regulatory reports onboarded' },
      { v: '3 markets', l: 'Scaled in 3 months' },
      { v: '80%', l: 'Reduction in reporting turnaround' },
      { v: '60%+', l: 'Operational efficiency gain' },
    ],
  },
  {
    n: '03',
    title: 'Compliance infrastructure for market expansion',
    meta: 'AML / SAR / Crypto reporting · Cross-border',
    context:
      'Revenue ambition into new geographies was blocked by missing AML/CTF and jurisdiction-specific reporting infrastructure. Compliance was being scoped as a gating cost rather than as a market enabler.',
    move:
      'I delivered AML and SAR reporting capabilities, online payment processing expansion support in China, and crypto transfer reporting infrastructure in the United States. I operationalized AML/CTF controls and regulatory metric reporting, and contributed to Business Advisory Group and Go/No-Go forums for cross-border launches.',
    proves:
      'Compliance reporting infrastructure is the fastest path to new markets — when it is treated as product, not paperwork.',
    metrics: [
      { v: '$4B', l: 'Revenue opportunity enabled' },
      { v: 'AML · SAR · Crypto', l: 'Reporting capabilities delivered' },
      { v: 'Go/No-Go', l: 'Cross-border launch forums' },
    ],
  },
  {
    n: '04',
    title: 'Risk, privacy, and data governance foundations',
    meta: 'Customer risk · GDPR · Data substrate',
    context:
      'Customer risk scoring was delayed and privacy enforcement fragmented across international markets, with substantial revenue exposure at stake and a need for governance that could execute, not just exist on paper.',
    move:
      'I built Customer Risk Rating capabilities with a global ramp — enabling risk scoring within 24 hours of onboarding and auto-triggered policy enforcement — and led GDPR and privacy platform strategy for international markets. Earlier hands-on foundations across ETL, BI, governance, lineage, Teradata, Informatica, Tableau, and reporting automation made the rest of this work possible.',
    proves:
      'Strong data foundations are the precondition for AI-native operating models. Governance executes through them, or it does not execute at all.',
    metrics: [
      { v: '$10B+', l: 'Revenue exposure protected' },
      { v: '100+', l: 'Privacy rules monitored' },
      { v: '24 hr', l: 'Risk scoring at onboarding' },
    ],
  },
]

const JUDGMENT = [
  {
    n: '01',
    title: 'Automation with accountability',
    tension: 'Speed and scale versus accountability in regulated workflows.',
    judgment:
      'Automate the deterministic steps. Design human escalation explicitly for policy-sensitive decisions, rather than discovering it later as a backlog.',
    why: 'It kept review velocity high without quietly delegating accountability to a model.',
  },
  {
    n: '02',
    title: 'AI workflows with auditability',
    tension: 'LLM flexibility versus regulatory traceability.',
    judgment:
      'Structured outputs, validation layers, retries, and auditable checkpoints — on every call, not just the demo path.',
    why: 'It was the difference between a working prototype and a production system regulators could actually inspect.',
  },
  {
    n: '03',
    title: 'Platforms over fragmented tools',
    tension: 'Immediate delivery pressure versus long-term scalability.',
    judgment:
      'Resist per-report tooling once the second jurisdiction lands. Build the platform primitives instead, even when it is slower in the first quarter.',
    why: 'It compressed report onboarding from quarters to weeks and made every later market nearly free.',
  },
  {
    n: '04',
    title: 'Market speed with regulatory readiness',
    tension: 'Business urgency versus jurisdiction-specific compliance obligations.',
    judgment:
      'Align platform execution with control readiness — not the other way around. Sequence the launch around what can be governed.',
    why: 'It avoided the post-launch retrofits that quietly consume engineering capacity for years.',
  },
  {
    n: '05',
    title: 'Compliance as business enablement',
    tension: 'Revenue opportunity versus AML/CTF and reporting obligations.',
    judgment:
      'Treat compliance reporting infrastructure as the market-expansion enabler, not the gating cost. Build it as product.',
    why: 'It reframed the conversation from cost center to revenue lever, and helped unlock new markets without rebuilding.',
  },
  {
    n: '06',
    title: 'Data foundations before intelligence',
    tension: 'Traditional reporting execution versus AI-native operating models.',
    judgment:
      'Invest in the data substrate first — lineage, validation, governance — and only then build intelligent systems on top of it.',
    why: 'Every AI claim that lasted in production sat on a strong data foundation underneath. The ones that did not, did not last.',
  },
]

const IMPACT = [
  {
    group: 'Automation',
    items: [
      'Reduced manual intervention by 60%',
      'Improved workflow turnaround by 50%',
    ],
  },
  {
    group: 'Platform scale',
    items: [
      '60+ regulatory reports onboarded',
      '3 markets scaled in 3 months',
      '80% reduction in reporting turnaround',
    ],
  },
  {
    group: 'Business enablement',
    items: [
      '$4B revenue opportunity enabled',
      '$10B+ revenue exposure protected',
    ],
  },
  {
    group: 'Governance',
    items: [
      '100+ privacy rules monitored',
      'AML, SAR, GDPR, privacy, KYC, crypto reporting, risk, and regulatory reporting capabilities delivered',
    ],
  },
  {
    group: 'Data foundations',
    items: [
      '30% OpEx savings through platform automation',
      '30% improvement in data governance and lineage',
      '20% ETL runtime improvement',
      '20% reduction in validation errors',
    ],
  },
]

const POV_IDEAS = [
  'Enterprise AI earns trust through reliability, traceability, and adoption — not benchmarks.',
  'In regulated workflows, governance is not a blocker. It is part of the product.',
  'Human review should be designed intentionally, not added as an afterthought ticket queue.',
  'LLM-based systems need structured outputs, validation, failure handling, and clear operating boundaries.',
  'The most valuable AI products improve operating discipline, not just productivity.',
]

const ARTICLES = [
  { title: 'Building AI products in regulated environments', status: 'Forthcoming' },
  { title: 'Human-in-the-loop is a product design choice', status: 'Forthcoming' },
  { title: 'From reporting platforms to intelligent workflow systems', status: 'Forthcoming' },
]

const LINKS = {
  email: 'gati4dash@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gati-dash',
  resume: '/GatiDash_SF.pdf',
  photo: '/profile.jpg', // place your photo at public/profile.jpg
  location: 'Hyderabad, India',
}

// ─────────────────────────────────────────────────────────────
// PRIMITIVES
// ─────────────────────────────────────────────────────────────

function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-serif text-base text-accent">{n}</span>
      <span className="h-px w-8 bg-ink/20" />
      <span className="eyebrow">{children}</span>
    </div>
  )
}

function Avatar({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="w-48 h-48 sm:w-52 sm:h-52 rounded-md border border-sand bg-paper-dark flex items-center justify-center"
        aria-label={alt}
      >
        <span className="font-serif text-5xl text-accent leading-none">GD</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-48 h-48 sm:w-52 sm:h-52 rounded-md object-cover border border-sand grayscale-[8%]"
      loading="eager"
    />
  )
}

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/85 backdrop-blur-md border-b border-sand/60">
      <Container className="h-16 flex items-center justify-between">
        <a href="#profile" className="font-serif text-lg text-ink tracking-editorial hover:text-accent transition-colors">
          Gatikrishna Dash
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-smoke hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={LINKS.resume}
          download
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors"
        >
          Résumé
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Container>
    </header>
  )
}

// ─────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────

function Profile() {
  return (
    <section id="profile" className="relative pt-36 pb-28 sm:pt-44 sm:pb-36 lg:pt-52">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main column */}
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">Senior Product Leader · AI, Automation & Strategy</p>

            <h1 className="display-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.04] max-w-prose-wide">
              I build trusted AI products for complex, regulated enterprise workflows.
            </h1>

            <p className="mt-8 text-xl sm:text-2xl text-smoke leading-snug max-w-prose-wide font-serif font-normal">
              I help enterprise teams turn manual, compliance-heavy operations into scalable platforms that improve speed, accuracy, governance, and business readiness.
            </p>

            <p className="mt-10 text-base sm:text-lg text-ink-soft leading-relaxed max-w-prose-tight">
              I started in data engineering, moved into regulatory and governance platforms, and now lead AI-native workflow automation in high-stakes enterprise environments. My work sits at the intersection of product strategy, regulated execution, data foundations, and intelligent automation.
            </p>

            {/* Restrained proof — three short lines with hairline dividers */}
            <ul className="mt-12 max-w-prose-wide divide-y divide-sand">
              {PROOF_LINES.map((p, i) => (
                <li key={i} className="flex items-start gap-5 py-4">
                  <span className="font-serif text-sm text-accent mt-1 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base text-ink-soft leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#work" className="btn-quiet font-medium">
                View selected work
              </a>
              <a href={LINKS.resume} download className="btn-quiet font-medium">
                Download résumé
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right-aligned profile card */}
          <aside className="lg:col-span-4 lg:pl-8 lg:border-l border-sand">
            <div className="lg:sticky lg:top-28">
              <Avatar src={LINKS.photo} alt="Portrait of Gatikrishna Dash" />
              <dl className="mt-7 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow mb-1.5">Name</dt>
                  <dd className="text-ink">Gatikrishna Dash</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5">Role</dt>
                  <dd className="text-ink-soft leading-relaxed">
                    Senior Product Leader<br />
                    AI, Automation &amp; Strategy<br />
                    Product Vision &amp; Roadmap
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5">Location</dt>
                  <dd className="text-ink-soft inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-dust" />
                    {LINKS.location}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5">Email</dt>
                  <dd>
                    <a href={`mailto:${LINKS.email}`} className="link-underline text-ink">
                      {LINKS.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5">LinkedIn</dt>
                  <dd>
                    <a
                      href={LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-ink"
                    >
                      gati-dash
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

function WhatIBuild() {
  return (
    <section id="what" className="py-24 sm:py-32 border-t border-sand">
      <Container>
        <SectionLabel n="—">What I build</SectionLabel>
        <h2 className="display-serif mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-[1.1]">
          Four areas where I do my best work.
        </h2>
        <p className="mt-5 text-lg text-smoke max-w-2xl leading-relaxed">
          The thread is the same across all of them: turning compliance pressure into platform leverage, without losing the human judgment regulated work requires.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-y-12 gap-x-16">
          {PILLARS.map((p) => (
            <div key={p.n} className="border-t border-sand pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-accent">{p.n}</span>
                <h3 className="font-serif text-xl sm:text-2xl text-ink tracking-editorial">
                  {p.title}
                </h3>
              </div>
              <p className="mt-4 text-base text-ink-soft leading-relaxed max-w-md">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32 border-t border-sand">
      <Container>
        <SectionLabel n="01">Work</SectionLabel>
        <h2 className="display-serif mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-[1.1]">
          Selected work.
        </h2>
        <p className="mt-5 text-lg text-smoke max-w-2xl leading-relaxed">
          Four product stories from regulated, multi-jurisdiction enterprise environments. Sanitized of proprietary detail; the operating shifts are real.
        </p>

        <div className="mt-20 space-y-24">
          {WORK.map((w, i) => (
            <article
              key={w.n}
              className={`grid lg:grid-cols-12 gap-y-10 gap-x-16 ${i > 0 ? 'pt-24 border-t border-sand' : ''}`}
            >
              {/* Left — narrative */}
              <div className="lg:col-span-8">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-serif text-sm text-accent">{w.n}</span>
                  <span className="eyebrow">{w.meta}</span>
                </div>

                <h3 className="display-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.15] max-w-prose-wide">
                  {w.title}
                </h3>

                <div className="mt-8 space-y-6 max-w-prose-wide">
                  <Paragraph label="Context" body={w.context} />
                  <Paragraph label="Product move" body={w.move} />
                  <Paragraph label="What it proves" body={w.proves} accent />
                </div>
              </div>

              {/* Right — metrics column */}
              <aside className="lg:col-span-4 lg:pl-8 lg:border-l border-sand">
                <div className="eyebrow mb-6">Operating impact</div>
                <dl className="divide-y divide-sand">
                  {w.metrics.map((m) => (
                    <div key={m.l} className="py-4 first:pt-0">
                      <dt className="font-serif text-2xl sm:text-3xl text-ink leading-none">
                        {m.v}
                      </dt>
                      <dd className="mt-1.5 text-sm text-smoke leading-snug">{m.l}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Paragraph({ label, body, accent = false }) {
  return (
    <div>
      <div className={`eyebrow mb-2 ${accent ? 'text-accent' : ''}`}>{label}</div>
      <p className={`text-base sm:text-lg leading-relaxed ${accent ? 'text-ink font-medium font-serif' : 'text-ink-soft'}`}>
        {body}
      </p>
    </div>
  )
}

function Judgment() {
  return (
    <section id="judgment" className="py-24 sm:py-32 border-t border-sand">
      <Container>
        <SectionLabel n="02">Judgment</SectionLabel>
        <h2 className="display-serif mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-[1.1]">
          Product judgment under constraint.
        </h2>
        <p className="mt-5 text-lg text-smoke max-w-2xl leading-relaxed">
          The most important product decisions in regulated environments are rarely about features. They are about where to standardize, where to preserve human judgment, how to manage risk, and how to build systems that can scale without losing control.
        </p>

        <div className="mt-20 max-w-prose-wide divide-y divide-sand">
          {JUDGMENT.map((j) => (
            <div key={j.n} className="grid grid-cols-12 gap-6 py-10 first:pt-0">
              <div className="col-span-12 sm:col-span-2">
                <span className="font-serif text-3xl text-accent leading-none">{j.n}</span>
              </div>
              <div className="col-span-12 sm:col-span-10">
                <h3 className="font-serif text-xl sm:text-2xl text-ink tracking-editorial mb-5">
                  {j.title}
                </h3>
                <dl className="space-y-3 text-base leading-relaxed">
                  <div className="grid sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-1">
                    <dt className="eyebrow pt-1">Tension</dt>
                    <dd className="text-ink-soft">{j.tension}</dd>
                  </div>
                  <div className="grid sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-1">
                    <dt className="eyebrow pt-1">Judgment</dt>
                    <dd className="text-ink">{j.judgment}</dd>
                  </div>
                  <div className="grid sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-1">
                    <dt className="eyebrow pt-1">Why it mattered</dt>
                    <dd className="text-smoke italic">{j.why}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Impact() {
  return (
    <section id="impact" className="py-24 sm:py-32 bg-paper-dark border-t border-sand">
      <Container>
        <SectionLabel n="03">Impact</SectionLabel>
        <h2 className="display-serif mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-[1.1]">
          Selected impact.
        </h2>
        <p className="mt-5 text-lg text-smoke max-w-2xl leading-relaxed">
          A consolidated view of the operating shifts behind the work above — grouped by where the leverage came from.
        </p>

        <div className="mt-20 divide-y divide-sand">
          {IMPACT.map((g) => (
            <div key={g.group} className="grid lg:grid-cols-12 gap-y-5 gap-x-12 py-10 first:pt-0">
              <div className="lg:col-span-3">
                <h3 className="eyebrow text-ink">{g.group}</h3>
              </div>
              <ul className="lg:col-span-9 space-y-3">
                {g.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-base sm:text-lg text-ink-soft leading-relaxed">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Writing() {
  return (
    <section id="writing" className="py-24 sm:py-32 border-t border-sand">
      <Container>
        <SectionLabel n="04">Writing</SectionLabel>
        <h2 className="display-serif mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-[1.1]">
          My point of view.
        </h2>

        {/* Pull quote */}
        <figure className="mt-16 max-w-4xl">
          <blockquote className="display-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-ink">
            <span className="text-accent">&ldquo;</span>AI should reduce friction without removing accountability.<span className="text-accent">&rdquo;</span>
          </blockquote>
        </figure>

        {/* Supporting ideas */}
        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Operating beliefs</p>
            <p className="text-base text-smoke leading-relaxed max-w-xs">
              Five working principles that guide how I build AI products inside regulated environments.
            </p>
          </div>
          <ol className="lg:col-span-8 divide-y divide-sand">
            {POV_IDEAS.map((idea, i) => (
              <li key={i} className="flex items-start gap-6 py-5 first:pt-0">
                <span className="font-serif text-sm text-accent mt-1 w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base sm:text-lg text-ink-soft leading-relaxed">{idea}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Articles — placeholders */}
        <div className="mt-20">
          <p className="eyebrow mb-6">Essays in progress</p>
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((a) => (
              <div
                key={a.title}
                className="border-t border-ink/15 pt-6 group"
              >
                <h3 className="font-serif text-xl text-ink leading-snug tracking-editorial">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-dust">{a.status}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-sand">
      <Container>
        <SectionLabel n="05">Contact</SectionLabel>

        <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="display-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Let&apos;s connect.
            </h2>
            <p className="mt-8 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-prose-tight">
              I&apos;m interested in senior product leadership opportunities at the intersection of AI, enterprise platforms, regulatory systems, and workflow transformation.
            </p>
          </div>

          <div className="lg:col-span-5">
            <dl className="divide-y divide-sand">
              <ContactRow
                icon={Mail}
                label="Email"
                value={LINKS.email}
                href={`mailto:${LINKS.email}`}
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/gati-dash"
                href={LINKS.linkedin}
                external
              />
              <ContactRow
                icon={ArrowUpRight}
                label="Résumé"
                value="Download PDF"
                href={LINKS.resume}
                download
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value={LINKS.location}
              />
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href, external, download }) {
  const content = (
    <>
      <div className="flex items-center gap-2.5">
        <Icon className="h-3.5 w-3.5 text-dust" />
        <span className="eyebrow">{label}</span>
      </div>
      <span className="font-serif text-xl sm:text-2xl text-ink mt-1 inline-flex items-center gap-2">
        {value}
        {href && <ArrowUpRight className="h-4 w-4 text-dust group-hover:text-accent transition-colors" />}
      </span>
    </>
  )

  if (!href) {
    return (
      <div className="py-5 flex flex-col first:pt-0">{content}</div>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download ? '' : undefined}
      className="py-5 flex flex-col first:pt-0 group hover:text-accent transition-colors"
    >
      {content}
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-sand py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-smoke max-w-xl leading-relaxed">
            Gatikrishna Dash — Product leadership for trusted AI and regulated enterprise platforms.
          </p>
          <p className="text-xs text-dust">
            © {new Date().getFullYear()} · Hyderabad, India
          </p>
        </div>
      </Container>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <NavBar />
      <main>
        <Profile />
        <WhatIBuild />
        <SelectedWork />
        <Judgment />
        <Impact />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
