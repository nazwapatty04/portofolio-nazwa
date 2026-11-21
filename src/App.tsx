import { useState } from 'react';
import {
  COMPETENCIES,
  EDUCATIONS,
  EXPERIENCES,
  PROFILE,
  PROJECTS,
  type ProjectItem,
} from './data/portfolioData';
import { PosterLeftColumn } from './components/PosterLeftColumn';
import { SoftwareTray } from './components/SoftwareTray';
import { ProjectModal } from './components/ProjectModal';
import { ConnectModal } from './components/ConnectModal';

type ProjectFilter = 'all' | 'financial' | 'uiux' | 'media';

const FILTER_OPTIONS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'financial', label: 'Financial System' },
  { id: 'uiux', label: 'UI/UX Prototype' },
  { id: 'media', label: 'Digital Media' },
];

export default function App() {
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [connectOpen, setConnectOpen] = useState(false);

  const visibleProjects =
    projectFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterKey === projectFilter);

  return (
    <div className="bg-paper text-darkink font-jakarta antialiased min-h-screen selection:bg-starburst selection:text-burgundy">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Top Editorial Poster Sheet */}
        <main
          className="bg-paper border-[2px] border-burgundy shadow-[0_12px_36px_rgba(142,14,43,0.12)] rounded-sm overflow-hidden mb-12"
          data-purpose="editorial-cv-poster"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 relative">
            {/* LEFT COLUMN: Identity, Contact, Portrait Photo */}
            <PosterLeftColumn onOpenConnect={() => setConnectOpen(true)} />

            {/* RIGHT COLUMN: Stacked Zine Editorial Panels */}
            <section
              className="lg:col-span-7 flex flex-col justify-between"
              data-purpose="right-content-panels"
            >
              {/* PANEL 1: PERSONAL SUMMARY */}
              <article
                className="p-6 sm:p-7 border-b-[1.5px] border-burgundy bg-paper relative"
                data-purpose="section-personal"
              >
                <h2 className="font-bubble text-burgundy text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-3 flex items-center gap-3">
                  PERSONAL
                  <span className="w-12 h-1 bg-burgundy rounded-full hidden sm:inline-block" />
                </h2>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-darkink font-normal text-justify">
                  Hi, I&apos;m{' '}
                  <strong className="font-semibold text-burgundy">{PROFILE.fullName}</strong> — feel
                  free to call me{' '}
                  <strong className="font-semibold text-burgundy">{PROFILE.nickname}</strong>!
                  Undergraduate student in the Information System study program at the Faculty of
                  Telematics and Energy,{' '}
                  <strong className="font-semibold">
                    Institut Teknologi PLN (ITPLN) Jakarta
                  </strong>
                  . Passionate about bridging technology, structured organization, and creative
                  digital solutions. Experienced in managing organizational budgeting, analytical
                  administration, and visual media communication.
                </p>
              </article>

              {/* PANEL 2: SOFTWARE & TOOLS (FOAM TRAY ZINE ARTIFACT) */}
              <SoftwareTray />

              {/* PANEL 3: EXPERIENCE */}
              <article
                className="p-6 sm:p-7 border-b-[1.5px] border-burgundy relative bg-paper"
                data-purpose="section-experience"
              >
                <h2 className="font-bubble text-burgundy text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-4">
                  EXPERIENCE
                </h2>

                {/* Timeline Structure with Starburst Nodes */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-burgundy space-y-6 ml-3 my-2">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="relative group">
                      {/* Starburst Badge Node */}
                      <div className="absolute -left-[35px] sm:-left-[43px] top-0">
                        <div className="starburst-badge bg-starburst text-burgundy w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bubble font-black text-[10px] sm:text-xs drop-shadow-sm group-hover:scale-110 transition-transform">
                          {exp.badgeLabel}
                        </div>
                      </div>

                      <div className="bg-white/80 border border-burgundy/30 p-3.5 rounded-sm shadow-sm">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h3 className="font-bubble text-base sm:text-lg text-burgundy font-bold">
                            {exp.organization}
                          </h3>
                          <span className="text-xs font-bold text-burgundy/80 font-mono tabular-nums">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-darkink/90 mt-0.5">
                          {exp.role}
                        </p>
                        <p className="text-xs sm:text-sm text-darkink/80 mt-1.5 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* PANEL 4: EDUCATION */}
              <article
                className="p-6 sm:p-7 relative bg-paper"
                data-purpose="section-education"
              >
                <h2 className="font-bubble text-burgundy text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-4">
                  EDUCATION
                </h2>

                <div className="space-y-4">
                  {EDUCATIONS.map((edu, index) => (
                    <div key={edu.id}>
                      <div className="flex items-start gap-4">
                        <div className="font-bubble text-burgundy text-sm sm:text-base font-extrabold whitespace-nowrap min-w-[100px] tabular-nums">
                          {edu.period}
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-burgundy mt-2 flex-shrink-0" />
                        <div>
                          <h3 className="font-bubble text-sm sm:text-base font-bold text-darkink">
                            {edu.institution}
                          </h3>
                          <p className="text-xs sm:text-sm text-darkink/80">{edu.program}</p>
                        </div>
                      </div>
                      {index < EDUCATIONS.length - 1 && (
                        <div className="ml-12 mt-4 border-l border-dashed border-burgundy/50 h-3" />
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>
        </main>

        {/* BELOW THE FOLD: Editorial Bands & Projects */}
        <section className="mb-14" data-purpose="selected-projects">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 pb-3 border-b-2 border-burgundy">
            <div>
              <span className="font-caveat text-xl text-burgundy font-bold block mb-1">
                academic &amp; creative builds ✦
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-burgundy tracking-tight">
                SELECTED WORK &amp; PROJECTS
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-xs sm:text-sm text-darkink/70 font-medium max-w-sm">
                A showcase of enterprise analysis, interactive mockups, and organizational
                initiatives.
              </p>

              {/* Interactive Project Category Filter Tabs */}
              <div
                className="inline-flex flex-wrap items-center gap-1 bg-paper-panel border border-burgundy/30 p-1 rounded-sm shrink-0"
                role="tablist"
                aria-label="Filter projects by category"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = projectFilter === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setProjectFilter(option.id)}
                      className={`px-2.5 py-1 text-xs font-bubble font-bold rounded-xs whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-burgundy text-paper'
                          : 'text-burgundy/80 hover:text-burgundy hover:bg-white/70'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white border-[1.5px] border-burgundy p-5 rounded-sm shadow-[4px_4px_0px_#8E0E2B] flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-starburst text-burgundy px-2.5 py-0.5 text-xs font-bold rounded-full uppercase tracking-wider font-bubble">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-burgundy tabular-nums">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-bubble text-xl font-bold text-darkink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-darkink/80 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-burgundy/20 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-burgundy">{project.tools}</span>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="font-bubble text-xs font-bold text-burgundy hover:text-darkink transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-burgundy"
                  >
                    VIEW DETAILS ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Core Competencies & Highlights */}
        <section className="mb-14" data-purpose="achievements-and-competencies">
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-burgundy">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-burgundy tracking-tight uppercase">
              CORE COMPETENCIES &amp; HIGHLIGHTS
            </h2>
            <span className="font-caveat text-lg font-bold text-burgundy hidden sm:inline-block">
              skills verified ✦
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COMPETENCIES.map((item, index) => (
              <div
                key={item.id}
                className="bg-paper border-[1.5px] border-burgundy p-5 rounded-sm relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="starburst-badge bg-starburst text-burgundy w-9 h-9 flex items-center justify-center font-bold text-sm shrink-0">
                    ★
                  </div>
                  <h3
                    className={`font-bubble text-lg font-bold text-burgundy ${
                      index === 0 ? 'leading-[27px]' : ''
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-darkink/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Connect Footer */}
        <footer
          className="bg-burgundy text-paper p-8 sm:p-12 rounded-sm shadow-xl relative overflow-hidden"
          data-purpose="footer-call-to-action"
          id="contact-footer"
        >
          {/* Decorative Halftone Dots in Footer */}
          <div
            aria-hidden="true"
            className="absolute inset-0 halftone-bg opacity-20 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="font-caveat text-starburst text-2xl sm:text-3xl font-bold block mb-1">
                Let&apos;s build something impactful together! ✦
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
                LET&apos;S CONNECT!
              </h2>
              <p className="mt-2 text-paper/85 text-xs sm:text-sm max-w-md">
                Open for academic collaborations, information systems research, student organization
                projects, and digital design work.
              </p>
            </div>

            {/* Interactive Sticker Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setConnectOpen(true)}
                className="bg-starburst hover:bg-yellow-300 text-burgundy font-bubble font-black text-sm sm:text-base px-6 py-3 rounded-full shadow-[3px_3px_0px_#2B1117] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#2B1117] transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span aria-hidden="true">✉</span> Email Me
              </button>
              <a
                className="bg-white/10 hover:bg-white/20 text-white border-[1.5px] border-white/60 font-bubble text-sm sm:text-base px-5 py-3 rounded-full transition-all inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                href={PROFILE.instagramUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{PROFILE.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Bottom Line & Copyright */}
          <div className="relative z-10 mt-10 pt-6 border-t border-paper/20 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/70 font-medium">
            <p>
              © 2026 {PROFILE.fullName} ({PROFILE.nickname}) · Information System ·{' '}
              {PROFILE.institutionShort}
            </p>
            <p className="mt-2 sm:mt-0 font-caveat text-starburst text-base">
              Inspired by Editorial Zine &amp; Graphic Poster Aesthetics
            </p>
          </div>
        </footer>
      </div>

      {/* Interactive Case Study & Contact Modals */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onConnect={() => setConnectOpen(true)}
      />
      <ConnectModal isOpen={connectOpen} onClose={() => setConnectOpen(false)} />
    </div>
  );
}
