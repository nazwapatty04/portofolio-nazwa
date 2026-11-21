import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onConnect: () => void;
}

export function ProjectModal({ project, onClose, onConnect }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-darkink/60 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-paper border-2 border-burgundy shadow-[8px_8px_0px_#8E0E2B] rounded-sm max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border-[1.5px] border-burgundy text-burgundy hover:bg-burgundy hover:text-paper rounded-sm transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-3 pr-10">
          <span className="inline-block bg-starburst text-burgundy px-2.5 py-0.5 text-xs font-bold rounded-full uppercase tracking-wider font-bubble">
            {project.category}
          </span>
          <span className="text-xs font-mono font-semibold text-burgundy tabular-nums">
            {project.year}
          </span>
        </div>

        <h3
          id="project-modal-title"
          className="font-syne text-2xl sm:text-3xl font-extrabold text-burgundy tracking-tight mb-2"
        >
          {project.title}
        </h3>

        <p className="text-xs font-semibold text-darkink/75 uppercase tracking-wider mb-4">
          Role: {project.role} · {project.tools}
        </p>

        <div className="space-y-4 border-t-[1.5px] border-burgundy/30 pt-4">
          <div>
            <h4 className="font-bubble text-sm uppercase tracking-wider text-burgundy font-bold mb-1">
              Overview
            </h4>
            <p className="text-sm text-darkink/90 leading-relaxed">{project.overview}</p>
          </div>

          <div>
            <h4 className="font-bubble text-sm uppercase tracking-wider text-burgundy font-bold mb-1.5">
              Key Deliverables
            </h4>
            <ul className="space-y-1.5">
              {project.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-darkink/85">
                  <span aria-hidden="true" className="text-burgundy font-bold mt-0.5">
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-[1.5px] border-burgundy/40 p-3.5 rounded-sm">
            <span className="font-bubble text-xs uppercase tracking-wider text-burgundy font-bold block mb-1">
              Outcome &amp; Impact
            </span>
            <p className="text-sm font-medium text-darkink">{project.outcome}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-burgundy/25 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onConnect();
            }}
            className="bg-starburst hover:bg-yellow-300 text-burgundy font-bubble font-black text-sm px-5 py-2 rounded-full border-2 border-white shadow-[3px_3px_0px_#2B1117] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Inquire About This Project ↗
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border-[1.5px] border-burgundy text-burgundy hover:bg-burgundy hover:text-paper font-bubble font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
