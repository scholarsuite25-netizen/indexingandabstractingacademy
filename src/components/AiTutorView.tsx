import React, { useEffect, useRef, useState } from 'react';
import { Send, Bot, User, Loader2, AlertTriangle, RotateCcw } from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';

interface AiTutorViewProps {
  darkMode: boolean;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  isError?: boolean;
}

const REQUEST_TIMEOUT_MS = 20000;

function isAbortError(err: unknown): boolean {
  return typeof err === 'object' && err !== null && (err as { name?: string }).name === 'AbortError';
}

export const AiTutorView: React.FC<AiTutorViewProps> = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I am your AI Professor and Study Tutor for Indexing and Abstracting. Ask me any question regarding vocabulary control, thesaurus architecture, abstracting standards (ANSI/NISO), or modern vector search systems!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string>(() => {
    const firstModule = COURSE_MODULES[0];
    return firstModule ? `Module ${firstModule.number}: ${firstModule.title}` : 'General Indexing';
  });

  const messagesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesListRef.current;
    if (!el) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [messages, loading]);

  const sendPrompt = async (prompt: string, appendUser: boolean) => {
    if (loading) return;
    const userMsg = prompt.trim();
    if (!userMsg) return;

    if (appendUser) {
      setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    } else {
      // Retry: drop trailing error bubbles, the last user message stays in the transcript
      setMessages(prev => {
        const next = [...prev];
        while (next.length > 0) {
          const last = next[next.length - 1];
          if (last.role === 'assistant' && last.isError) next.pop();
          else break;
        }
        return next;
      });
    }
    setLoading(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMsg,
          context: selectedModule
        }),
        signal: controller.signal
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (data.text) {
          setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
        } else {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: 'Sorry, I encountered an issue generating a response. Please try again.', isError: true }
          ]);
        }
      } else {
        const textData = await res.text();
        if (textData) {
          setMessages(prev => [...prev, { role: 'assistant', content: textData }]);
        } else {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: 'Received non-JSON response from server.', isError: true }
          ]);
        }
      }
    } catch (err) {
      if (isAbortError(err)) {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: 'The request timed out after 20 seconds. Please try again.', isError: true }
        ]);
      } else {
        console.error(err);
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: 'Network error connecting to AI tutor server.', isError: true }
        ]);
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    void sendPrompt(userMsg, true);
  };

  const handleRetry = () => {
    if (loading) return;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'user') {
        void sendPrompt(messages[i].content, false);
        return;
      }
    }
  };

  const samplePrompts = [
    'Explain the difference between recall and precision with an example.',
    'How do I construct a thesaurus with equivalence and hierarchical relations?',
    'What are the key rules for writing an informative abstract according to ANSI/NISO Z39.14?',
    'How do transformer embeddings improve document retrieval compared to TF-IDF?'
  ];

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto animate-fade-in-up">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl border border-line bg-panel shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-900">
              Powered by Gemini AI (gemini-3.8-flash)
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              AI Professor &amp; <span className="text-accent-600">Study Tutor</span>
            </h1>
            <p className="text-sm font-medium text-ink-muted max-w-prose">
              Ask complex questions, request essay grading help, or generate practice questions on demand.
            </p>
          </div>

          {/* Context Selector */}
          <div className="shrink-0">
            <label htmlFor="ai-tutor-context" className="sr-only">
              Choose the tutoring context module
            </label>
            <select
              id="ai-tutor-context"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="w-full sm:w-auto min-h-11 px-4 py-3 rounded-xl text-xs font-bold border border-line bg-panel text-ink transition-all focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="General Indexing">General Indexing &amp; IR</option>
              {COURSE_MODULES.map(m => (
                <option key={m.id} value={`Module ${m.number}: ${m.title}`}>Module {m.number}: {m.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="rounded-3xl border border-line bg-panel shadow-sm overflow-hidden flex flex-col h-[65vh] min-h-[380px] max-h-[680px]">
        {/* Messages List */}
        <div
          ref={messagesListRef}
          role="log"
          aria-live="polite"
          aria-label="Tutor conversation"
          className="flex-1 overflow-y-auto p-6 space-y-6"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3.5 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-bold ${
                  msg.role === 'user'
                    ? 'bg-accent-600 text-white shadow-md'
                    : 'bg-band text-white shadow-md'
                }`}
              >
                {msg.role === 'user' ? (
                  <User className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Bot className="w-5 h-5" aria-hidden="true" />
                )}
              </div>

              {msg.role === 'user' ? (
                <div className="max-w-[80%] p-5 rounded-2xl rounded-tr-none bg-accent-600 text-white text-sm sm:text-base font-medium leading-relaxed">
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              ) : msg.isError ? (
                <div className="max-w-[80%] rounded-2xl rounded-tl-none border border-accent-200 bg-accent-50 text-accent-800 p-4 dark:border-accent-900 dark:bg-accent-950/40 dark:text-accent-200 space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
                    <p className="text-sm font-semibold leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleRetry}
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-full bg-accent-600 text-white font-bold px-4 py-2 text-xs min-h-11 hover:bg-accent-700 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    Retry
                  </button>
                </div>
              ) : (
                <div className="max-w-[80%] p-5 rounded-2xl rounded-tl-none border border-line bg-panel-2 text-ink text-sm sm:text-base font-medium leading-relaxed">
                  <p className="whitespace-pre-wrap max-w-prose">{msg.content}</p>
                </div>
              )}
            </div>
          ))}

          <div role="status" aria-live="polite">
            {loading && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-band flex items-center justify-center text-white shadow-md shrink-0">
                  <Bot className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="p-4 rounded-2xl flex items-center gap-2 text-sm font-bold border border-line bg-panel-2 text-ink">
                  <Loader2 className="w-4 h-4 animate-spin text-accent-600" aria-hidden="true" />
                  <span>Professor is analyzing your query...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sample Prompts */}
        {messages.length <= 2 && (
          <div className="px-6 py-3 border-t border-line bg-band flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-white/70 self-center mr-1">Suggested:</span>
            {samplePrompts.map((promptText, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setInput(promptText)}
                className="text-xs font-semibold px-3 py-1.5 min-h-9 rounded-lg border border-white/10 bg-band-2 text-white transition-all hover:border-accent-400 hover:text-white"
              >
                {promptText}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="p-4 border-t border-line flex items-center gap-3 bg-panel-2"
        >
          <label htmlFor="ai-tutor-message" className="sr-only">
            Message for the AI tutor
          </label>
          <input
            id="ai-tutor-message"
            type="text"
            placeholder={`Ask about ${selectedModule}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 min-h-11 px-4 py-3 text-sm font-medium rounded-xl border border-line bg-panel text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || loading}
            className="p-3 min-h-11 min-w-11 rounded-full inline-flex items-center justify-center bg-accent-600 text-white hover:bg-accent-700 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
};
