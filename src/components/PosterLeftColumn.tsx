import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface PosterLeftColumnProps {
  onOpenConnect: () => void;
}

export function PosterLeftColumn({ onOpenConnect }: PosterLeftColumnProps) {
  const [wordmarkError, setWordmarkError] = useState(false);
  const [portraitError, setPortraitError] = useState(false);
  const [colorReveal, setColorReveal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      onOpenConnect();
    }
  };

  return (
    <section
      className="lg:col-span-5 relative p-6 sm:p-8 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-burgundy flex flex-col justify-between overflow-hidden"
      data-purpose="left-identity-column"
    >
      {/* Background Stippled Halftone Texture Area */}
      <div
        aria-hidden="true"
        className="absolute inset-0 halftone-bg opacity-12 pointer-events-none"
      />

      {/* Upper Header Area */}
      <div className="relative z-10">
        {/* Hand-drawn Style "hello!" */}
        <div className="relative inline-block mb-1">
          <span className="font-bubble text-burgundy text-6xl sm:text-7xl font-extrabold tracking-tight transform -rotate-3 block origin-bottom-left select-none drop-shadow-sm">
            hello!
          </span>
          <span
            aria-hidden="true"
            className="absolute -top-3 -right-6 font-caveat text-2xl text-burgundy rotate-12 font-bold select-none"
          >
            ✦
          </span>
        </div>

        {/* "i'm" with double underline and Display Name WAWA */}
        <div className="flex items-center gap-3 mt-1 mb-2">
          <div className="relative">
            <span className="font-bubble text-burgundy text-2xl sm:text-3xl font-bold tracking-tight">
              i&apos;m
            </span>
            <div className="w-full border-b-[2.5px] border-burgundy mt-[-2px]" />
            <div className="w-full border-b-[1.5px] border-burgundy mt-[2px]" />
          </div>

          {!wordmarkError ? (
            <img
              alt="Wawa Wordmark Logo"
              className="h-16 sm:h-20 w-auto object-contain select-none -rotate-1 hover:rotate-1 transition-transform"
              referrerPolicy="no-referrer"
              src={PROFILE.wordmarkUrl}
              onError={() => setWordmarkError(true)}
            />
          ) : (
            <span className="font-syne text-4xl sm:text-5xl font-extrabold tracking-tight text-burgundy -rotate-1 select-none">
              WAWA
            </span>
          )}
        </div>

        {/* Role Subtitle */}
        <div className="mt-2 inline-flex flex-wrap items-center gap-1.5 bg-burgundy text-white px-3 py-1 rounded-sm text-xs sm:text-sm font-semibold tracking-wide">
          <span>{PROFILE.role}</span>
          <span aria-hidden="true">·</span>
          <span className="text-starburst font-bold">{PROFILE.institutionShort}</span>
        </div>
      </div>

      {/* Mid Section: Framed B&W Portrait with Editorial Graphic Pointers */}
      <div className="relative z-10 my-8 flex flex-col items-center">
        {/* Graphic Label with pointer line */}
        <div className="self-start ml-2 mb-1 flex items-end gap-1">
          <span className="font-bubble text-burgundy text-sm sm:text-base font-bold tracking-wider uppercase">
            INFORMATION
          </span>
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-burgundy"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M4 4 L18 18 M18 18 L10 18 M18 18 L18 10" />
          </svg>
        </div>

        {/* Portrait Photo with white mat border & shadow */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => setColorReveal((prev) => !prev)}
            title="Click to toggle monochrome / color print finish"
            className="text-left bg-white p-2.5 sm:p-3 pb-7 border border-burgundy/40 shadow-xl rounded-sm transition-transform duration-300 group-hover:rotate-0 -rotate-1 w-[260px] sm:w-[300px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy cursor-pointer"
          >
            {!portraitError ? (
              <img
                alt="Black and white candid portrait photo of Nazwa Sharifa Aprilia Patty (Wawa)"
                className={`w-full aspect-square object-cover rounded-none border border-burgundy/20 transition-all duration-300 ${
                  colorReveal ? 'grayscale-0 contrast-105' : 'grayscale contrast-125'
                }`}
                referrerPolicy="no-referrer"
                src={PROFILE.portraitUrl}
                onError={() => setPortraitError(true)}
              />
            ) : (
              <div className="w-full aspect-square bg-paper-panel border border-burgundy/25 flex flex-col items-center justify-center p-4 text-center">
                <span className="font-syne text-3xl font-extrabold text-burgundy">WAWA</span>
                <span className="font-caveat text-base text-darkink/80 mt-1">
                  Information System · ITPLN
                </span>
              </div>
            )}
            <div className="mt-2 text-center flex items-center justify-center gap-2">
              <span className="font-caveat text-sm font-bold text-burgundy">
                Nazwa Sharifa (Wawa) · 2026
              </span>
            </div>
          </button>
        </div>

        {/* System Label with pointer line */}
        <div className="self-end mr-4 mt-1 flex items-start gap-1">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-burgundy"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M20 20 L6 6 M6 6 L14 6 M6 6 L6 14" />
          </svg>
          <span className="font-bubble text-burgundy text-sm sm:text-base font-bold tracking-wider uppercase leading-tight">
            {colorReveal ? (
              <>
                color
                <br />
                print
              </>
            ) : (
              <>
                loving
                <br />b &amp; w
              </>
            )}
          </span>
        </div>
      </div>

      {/* Bottom: Contact Details Section */}
      <div className="relative z-10 pt-4 border-t-[1.5px] border-burgundy/60">
        <h2 className="font-bubble text-burgundy text-xl font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          CONTACT
          <span className="h-0.5 flex-1 bg-burgundy/40" />
        </h2>

        <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
          <li className="flex items-center justify-between gap-2 text-darkink">
            <div className="flex items-center gap-2 min-w-0">
              <span aria-hidden="true" className="font-caveat text-base text-burgundy font-bold">
                ✉
              </span>
              <a
                className="font-semibold underline decoration-burgundy/50 underline-offset-2 hover:text-burgundy hover:decoration-burgundy truncate"
                href={`mailto:${PROFILE.email}`}
              >
                {PROFILE.email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-burgundy hover:bg-starburst/60 px-2 py-0.5 rounded-sm border border-burgundy/25 transition-colors shrink-0 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </li>

          <li className="flex items-center gap-2 text-darkink">
            <span aria-hidden="true" className="font-caveat text-base text-burgundy font-bold">
              📍
            </span>
            <span>{PROFILE.location}</span>
          </li>

          <li className="flex items-center gap-2 text-darkink">
            <span aria-hidden="true" className="font-caveat text-base text-burgundy font-bold">
              ★
            </span>
            <span>
              Instagram:{' '}
              <a
                href={PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-burgundy hover:underline underline-offset-2"
              >
                {PROFILE.instagramHandle}
              </a>
            </span>
          </li>
        </ul>

        {/* Graphic red bar accent from original inspiration */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-burgundy tabular-nums">
            {PROFILE.phoneDisplay}
          </span>
          <div className="h-3 w-16 bg-burgundy rounded-xs" />
        </div>
      </div>
    </section>
  );
}
