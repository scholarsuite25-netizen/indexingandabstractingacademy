import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X, Headphones } from 'lucide-react';

interface FloatingContactProps {
  darkMode: boolean;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none print:hidden">
      {/* Expanded Quick Action Cards */}
      {isOpen && (
        <div
          className={`p-3.5 rounded-2xl border shadow-2xl space-y-2.5 w-64 backdrop-blur-md animate-fade-in-up ${
            darkMode
              ? 'bg-panel/95 border-line text-ink'
              : 'bg-panel/95 border-line text-ink'
          }`}
        >
          <div className="flex items-center justify-between pb-1 border-b border-line">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-600 block">
                IndexMaster &bull; LIS 814
              </span>
              <span className="text-xs font-bold text-ink">
                Direct Support Hotline
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -m-1 rounded-lg hover:bg-panel-2 text-ink-muted hover:text-ink transition-colors min-w-11 min-h-11 flex items-center justify-center"
              aria-label="Close contact widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs leading-snug text-ink-muted">
            Contact Dr. Uzoamaka Ogwo &amp; the academic advisory team:
          </p>

          <div className="space-y-1.5 pt-0.5">
            {/* Click to WhatsApp */}
            <a
              href="https://wa.me/2348039473344?text=Hello%20IndexMaster%20LIS%20-%20Indexing%20%26%20Abstracting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white shadow-sm hover:brightness-105 transition-all group min-h-11"
            >
              <span className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </span>
              <span className="text-xs opacity-80 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>

            {/* Click to Call */}
            <a
              href="tel:+2348039473344"
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-bold bg-accent-600 text-white shadow-sm hover:bg-accent-700 transition-all group min-h-11"
            >
              <span className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call: +234 803 947 3344</span>
              </span>
              <span className="text-xs opacity-80 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      )}

      {/* Support Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-2 min-h-12 min-w-12 px-4 py-3 rounded-full shadow-lg border transition-all flex items-center justify-center space-x-2 ${
          isOpen
            ? 'bg-accent-600 text-white border-accent-600 hover:bg-accent-700'
            : 'bg-panel text-accent-600 border-line hover:border-accent-400 hover:text-accent-700'
        }`}
        title={isOpen ? 'Close support menu' : 'Open academic contact info'}
        aria-label="Toggle academic contact menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Headphones className="w-5 h-5" />}
      </button>
    </div>
  );
};
