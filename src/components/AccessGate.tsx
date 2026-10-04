import React, { useState } from 'react';
import { Lock, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { isValidAccessCode, storeAccessCode } from '../../lib/access';

interface AccessGateProps {
  darkMode: boolean;
  onUnlock: (code: string) => void;
}

/**
 * Full-screen access gate. Visitors must enter the shared course code
 * (LIS814) before any course material is rendered. The code is
 * remembered on the device via localStorage.
 */
export const AccessGate: React.FC<AccessGateProps> = ({
  darkMode,
  onUnlock,
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidAccessCode(code)) {
      const normalized = code.trim();
      storeAccessCode(normalized);
      onUnlock(normalized);
    } else {
      setError(true);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-950 via-navy-900 to-indigo-950'
          : 'bg-gradient-to-br from-navy-900 via-indigo-900 to-accent-800'
      }`}
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8 space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
            <BookOpen className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            IndexMaster
          </h1>
          <p className="text-sm font-medium text-white/70">
            LIS 814 &mdash; Indexing &amp; Abstracting Academy
          </p>
        </div>

        <div
          className="bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-3xl p-8 shadow-2xl border border-white/20 space-y-6"
          key={error ? 'err' : 'ok'}
        >
          <div className="flex items-center gap-3 text-ink">
            <div className="p-2.5 rounded-xl bg-accent-50 dark:bg-accent-950/50 border border-accent-100 dark:border-accent-900">
              <Lock className="w-5 h-5 text-accent-600" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold">Course Access Required</h2>
              <p className="text-xs font-medium text-ink-muted">
                Enter the access code shared by your facilitator to continue.
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label
                htmlFor="access-code"
                className="block text-xs font-bold uppercase tracking-wider text-ink-muted mb-2"
              >
                Access Code
              </label>
              <input
                id="access-code"
                type="password"
                inputMode="text"
                autoComplete="off"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError(false);
                }}
                placeholder="Enter code"
                aria-invalid={error}
                aria-describedby={error ? 'access-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-bold tracking-widest uppercase bg-panel text-ink placeholder-ink-muted focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'border-line focus:ring-accent-300'
                }`}
              />
              {error && (
                <p
                  id="access-error"
                  role="alert"
                  className="mt-2 text-xs font-bold text-red-500"
                >
                  Incorrect code. Please check with your facilitator and try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!code.trim()}
              className={`w-full flex items-center justify-center gap-2 rounded-xl font-bold px-5 py-3 min-h-12 text-sm transition-all ${
                code.trim()
                  ? 'bg-accent-600 text-white hover:bg-accent-700 shadow-md'
                  : 'bg-panel-2 text-ink-muted cursor-not-allowed'
              }`}
            >
              <span>Unlock Course Materials</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-[10px] font-semibold text-ink-muted">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Protected for enrolled LIS 814 students</span>
          </div>
        </div>
      </div>
    </div>
  );
};
