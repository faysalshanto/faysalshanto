"use client"

import React, { useState } from 'react';
import { Mail, Briefcase, Store, Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';

export default function Sidebar() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setErrorMessage(null);

    try {
      let isSuccess = false;
      let errorMsg = 'Failed to subscribe. Please try again.';

      try {
        const res = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          isSuccess = true;
        } else if (data.message) {
          errorMsg = data.message;
        }
      } catch {
        // Fallback to direct Web3Forms endpoint
      }

      if (!isSuccess) {
        const accessKey =
          process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
          '34828451-c749-4c08-ae14-3a611387235f';

        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            email,
            subject: `New Newsletter Subscriber (Sidebar): ${email}`,
            from_name: 'Faysal Portfolio Newsletter',
            message: `New subscriber email: ${email}`,
            form_name: 'Newsletter Subscription',
            to_email: 'faysal.shanto.official@gmail.com',
          }),
        });

        const web3Data = await web3Res.json();
        if (web3Res.ok && web3Data.success) {
          isSuccess = true;
        } else if (web3Data.message) {
          errorMsg = web3Data.message;
        }
      }

      if (isSuccess) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(errorMsg);
      }
    } catch (err: any) {
      console.error('Sidebar newsletter error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setEmail('');
    setErrorMessage(null);
  };

  return (
    <aside className="w-full md:w-80 flex-shrink-0 space-y-6">
      
      {/* Profile Widget */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm transition-colors rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4">About Me</h3>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full mb-4 overflow-hidden border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-400">
             <span className="text-xs">Photo</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Faysal Ibne Safir</h2>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">Marketing & Automation</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Passionate about exploring AI, Startups, and Innovation to transform everyday problems into scalable global businesses.
          </p>
          {/* Personal Social Links */}
          <div className="flex gap-2 justify-center w-full flex-wrap">
            <a href="mailto:faysal.shanto.official@gmail.com" title="Email" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white rounded transition text-gray-600 dark:text-gray-300">
              <Mail size={16} />
            </a>
            <a href="https://www.linkedin.com/in/faysal-ibne-safir-shanto/" target="_blank" rel="noreferrer" title="LinkedIn" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white rounded transition text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.facebook.com/faysal.ibne.safir.shanto" target="_blank" rel="noreferrer" title="Facebook" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white rounded transition text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/faysal_shanto_16/" target="_blank" rel="noreferrer" title="Instagram" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white rounded transition text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://github.com/faysalshanto" target="_blank" rel="noreferrer" title="GitHub" className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white rounded transition text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm transition-colors rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4 flex items-center gap-2">
          <Send size={18} className="text-blue-600 dark:text-blue-400"/> Newsletter
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Subscribe to get my latest blog posts, startup insights, and valuable resources straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-2 animate-in fade-in duration-200">
            <CheckCircle2 size={24} className="text-emerald-500 mx-auto" />
            <p className="text-xs font-bold text-gray-900 dark:text-emerald-300">Subscribed Successfully!</p>
            <p className="text-[11px] text-gray-600 dark:text-gray-300">Thank you for subscribing to updates.</p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold mt-1 cursor-pointer"
            >
              <RefreshCw size={11} /> Subscribe another
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
            {status === 'error' && errorMessage && (
              <div className="flex items-center gap-2 p-2.5 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 dark:text-red-400 text-xs">
                <AlertCircle size={14} className="shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50" 
              required 
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe Now</span>
              )}
            </button>
          </form>
        )}
      </div>

      {/* My Business Widget (Maglyn) */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm transition-colors border-t-4 border-t-indigo-500 rounded-xl rounded-t-none">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-4 flex items-center gap-2">
          <Store size={18} className="text-indigo-500"/> My Business
        </h3>
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">Maglyn</h4>
          <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">Personalized Gifts</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            A personalized magazine-printing brand that transforms your favorite photos, memories, and stories into beautifully designed physical magazines.
          </p>
          <div className="flex gap-3 justify-center w-full">
            <a href="https://www.facebook.com/maglyn.official/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white text-xs font-semibold rounded transition">
              <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg> Facebook
            </a>
            <a href="https://www.instagram.com/maglyn.official" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white text-xs font-semibold rounded transition">
              <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Experience Widget */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm transition-colors rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-b-2 border-blue-600 pb-2 mb-4">Experience</h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <Briefcase size={16} className="text-gray-400 dark:text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Sales Growth Business Partner</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Flowmingo AI (Jun 2026 - Present)</p>
            </div>
          </li>
          <li className="flex gap-3">
            <Briefcase size={16} className="text-gray-400 dark:text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Marketing Intern</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Elevetr AI (Jun 2026 - Dec 2026)</p>
            </div>
          </li>
          <li className="flex gap-3">
            <Briefcase size={16} className="text-gray-400 dark:text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Core Ambassador Manager</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">10 Minute School</p>
            </div>
          </li>
          <li className="flex gap-3">
            <Briefcase size={16} className="text-gray-400 dark:text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Media & Marketing Coordinator</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">BUBT Career Guidance Office</p>
            </div>
          </li>
        </ul>
      </div>
      
    </aside>
  );
}
