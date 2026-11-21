import { useState } from 'react';
import { SOFTWARE_STICKERS, type SoftwareSticker, type StickerCategory } from '../data/portfolioData';

export function SoftwareTray() {
  const [hoveredCategory, setHoveredCategory] = useState<StickerCategory | null>(null);
  const [selectedSticker, setSelectedSticker] = useState<SoftwareSticker | null>(null);
  const [pressedId, setPressedId] = useState<string | null>(null);
  const [usedMode, setUsedMode] = useState(false);

  const handleStickerClick = (sticker: SoftwareSticker) => {
    setSelectedSticker(sticker);
    setPressedId(sticker.id);
    setTimeout(() => {
      setPressedId((prev) => (prev === sticker.id ? null : prev));
    }, 400);
  };

  const calloutClass = (category: StickerCategory) =>
    hoveredCategory === category || selectedSticker?.category === category
      ? 'text-burgundy font-extrabold scale-105'
      : 'text-burgundy/80';

  return (
    <article
      className="p-6 sm:p-7 border-b-[1.5px] border-burgundy relative bg-paper overflow-hidden select-none"
      data-purpose="section-software"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bubble text-burgundy text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
          SOFTWARE
        </h2>
        <span className="font-caveat text-burgundy text-lg font-bold">
          toolkit &amp; creative gear ✦
        </span>
      </div>

      {/* Foam Bento Tray Container with App Stickers (.tray-stage) */}
      <div className="tray-stage relative py-5 flex items-center justify-center">
        {/* Tray Wrapper (Tilted rounded container) */}
        <div className="foam-tray relative w-full max-w-[430px] rounded-3xl p-5 sm:p-6 transform -rotate-3">
          {/* Garnish Lettuce accent in corner */}
          <div
            aria-hidden="true"
            className="lettuce-leaf absolute -bottom-2.5 -right-2.5 w-14 h-14 bg-emerald-600/80 rounded-full blur-[0.5px] opacity-85 pointer-events-none flex items-center justify-center text-emerald-100 text-xs font-bold border-2 border-emerald-300 z-10 shadow-md"
          >
            <span className="text-xl">🥬</span>
          </div>

          {/* Starburst Sticker "USED" top-left */}
          <div className="absolute -top-4 -left-4 z-30">
            <button
              type="button"
              onClick={() => {
                setUsedMode((prev) => !prev);
                setSelectedSticker(null);
              }}
              title="Tools regularly used in projects & coursework"
              className="starburst-badge animate-badge-wiggle bg-starburst text-burgundy w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center font-bubble font-black text-xs sm:text-sm drop-shadow-md cursor-pointer hover:scale-110 transition-transform focus-visible:outline-2 focus-visible:outline-burgundy"
            >
              {usedMode ? 'DAILY' : 'USED'}
            </button>
          </div>

          {/* Overlapping Die-Cut App Stickers Grid */}
          <div
            className="grid grid-cols-3 gap-3 sm:gap-4 items-center justify-items-center relative z-20 pt-2"
            id="sticker-grid"
          >
            {SOFTWARE_STICKERS.map((sticker) => {
              const isSelected = selectedSticker?.id === sticker.id;
              const isPressed = pressedId === sticker.id;
              return (
                <div
                  key={sticker.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCategory(sticker.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    type="button"
                    aria-label={sticker.ariaLabel}
                    aria-pressed={isSelected}
                    onFocus={() => setHoveredCategory(sticker.category)}
                    onBlur={() => setHoveredCategory(null)}
                    onClick={() => handleStickerClick(sticker)}
                    className={`app-sticker border-2 border-white rounded-xl p-2.5 shadow-md flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                      sticker.surfaceClass
                    } ${sticker.tiltClass} ${isPressed ? 'sticker-pressed' : ''} ${
                      isSelected ? 'ring-2 ring-starburst' : ''
                    }`}
                  >
                    <span className={sticker.labelClass}>{sticker.label}</span>
                    {sticker.emoji && <span className="text-lg sm:text-xl">{sticker.emoji}</span>}
                    {sticker.sublabel && (
                      <span className="text-[10px] tracking-tight uppercase text-white font-syne font-bold">
                        {sticker.sublabel}
                      </span>
                    )}
                  </button>

                  {/* Floating Tooltip Pill */}
                  <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 z-50 whitespace-nowrap bg-darkink text-white border border-starburst text-[10px] sm:text-xs font-bubble font-semibold px-2.5 py-0.5 rounded-full shadow-lg scale-90 group-hover:scale-100 group-focus-within:scale-100">
                    {sticker.tooltip}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Active Sticker Toast / Feedback Indicator */}
          <div
            aria-live="polite"
            className="mt-3 text-center transition-all duration-300 min-h-[28px]"
          >
            <div className="inline-block text-[11px] sm:text-xs font-caveat font-bold text-burgundy bg-starburst/80 px-3 py-0.5 rounded-full border border-burgundy/30 transition-all">
              {selectedSticker
                ? `★ ${selectedSticker.info} — ${selectedSticker.detail}`
                : usedMode
                  ? '★ All 6 tools actively used across ITPLN & PMR workflows!'
                  : '✦ peel & click stickers to preview skills'}
            </div>
          </div>
        </div>

        {/* Editorial Pointer Line Callouts with Dynamic Highlight hooks */}
        <div className="hidden sm:block absolute right-2 top-2 text-right pointer-events-none">
          <span
            className={`font-caveat text-sm font-bold transition-all duration-200 block ${calloutClass(
              'data-office',
            )}`}
          >
            data &amp; office ──┐
          </span>
        </div>
        <div className="hidden sm:block absolute left-2 bottom-3 text-left pointer-events-none">
          <span
            className={`font-caveat text-sm font-bold transition-all duration-200 block ${calloutClass(
              'ui-design',
            )}`}
          >
            └── ui / design &amp; code
          </span>
        </div>
        <div className="hidden sm:block absolute right-3 bottom-1 text-right pointer-events-none">
          <span
            className={`font-caveat text-sm font-bold transition-all duration-200 block ${calloutClass(
              'productivity',
            )}`}
          >
            productivity ↗
          </span>
        </div>
      </div>
    </article>
  );
}
