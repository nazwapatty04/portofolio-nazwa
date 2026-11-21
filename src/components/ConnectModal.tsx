import { useEffect, useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('Collaboration Inquiry');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `${subject}${senderName ? ` — from ${senderName}` : ''}`,
    );
    const mailtoBody = encodeURIComponent(message || 'Hi Wawa, I saw your portfolio and would love to connect!');
    window.location.href = `mailto:${PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-darkink/60 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-paper border-2 border-burgundy shadow-[8px_8px_0px_#8E0E2B] rounded-sm max-w-lg w-full p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border-[1.5px] border-burgundy text-burgundy hover:bg-burgundy hover:text-paper rounded-sm transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="font-caveat text-xl text-burgundy font-bold block mb-1">
          say hello! ✦
        </span>
        <h3
          id="connect-modal-title"
          className="font-syne text-2xl sm:text-3xl font-extrabold text-burgundy tracking-tight uppercase mb-2"
        >
          Let&apos;s Connect
        </h3>
        <p className="text-xs sm:text-sm text-darkink/80 mb-4">
          Reach out directly at{' '}
          <strong className="font-semibold text-burgundy">{PROFILE.email}</strong> or compose a
          quick note below.
        </p>

        <div className="flex items-center justify-between gap-2 bg-white border-[1.5px] border-burgundy px-3 py-2 rounded-sm mb-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-darkink truncate">
            <Mail className="w-4 h-4 text-burgundy shrink-0" />
            <span className="truncate">{PROFILE.email}</span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 bg-starburst text-burgundy font-bubble font-bold text-xs px-3 py-1 rounded-full border border-burgundy/30 hover:bg-yellow-300 transition-colors shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="connect-name"
              className="block font-bubble text-xs font-bold uppercase tracking-wider text-burgundy mb-1"
            >
              Your Name
            </label>
            <input
              id="connect-name"
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g. Raka Pratama"
              className="w-full bg-white border-[1.5px] border-burgundy px-3 py-2 text-sm text-darkink placeholder:text-burgundy/45 rounded-sm focus:outline-none focus:ring-2 focus:ring-starburst"
            />
          </div>

          <div>
            <label
              htmlFor="connect-subject"
              className="block font-bubble text-xs font-bold uppercase tracking-wider text-burgundy mb-1"
            >
              Topic
            </label>
            <input
              id="connect-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-white border-[1.5px] border-burgundy px-3 py-2 text-sm text-darkink placeholder:text-burgundy/45 rounded-sm focus:outline-none focus:ring-2 focus:ring-starburst"
            />
          </div>

          <div>
            <label
              htmlFor="connect-message"
              className="block font-bubble text-xs font-bold uppercase tracking-wider text-burgundy mb-1"
            >
              Message
            </label>
            <textarea
              id="connect-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Let's collaborate on an IS project or UI/UX concept..."
              className="w-full bg-white border-[1.5px] border-burgundy px-3 py-2 text-sm text-darkink placeholder:text-burgundy/45 rounded-sm focus:outline-none focus:ring-2 focus:ring-starburst resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-starburst hover:bg-yellow-300 text-burgundy font-bubble font-black text-sm px-5 py-2.5 rounded-full border-2 border-white shadow-[3px_3px_0px_#2B1117] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{submitted ? 'Opening Mail App…' : 'Open in Email App'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border-[1.5px] border-burgundy text-burgundy hover:bg-burgundy hover:text-paper font-bubble font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
