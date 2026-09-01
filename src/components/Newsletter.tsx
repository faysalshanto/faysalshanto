'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setErrorMessage(null);

    try {
      let isSuccess = false;
      let errorMsg = 'Failed to subscribe. Please try again.';

      // Attempt 1: Next.js API route /api/newsletter
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
        // Fallback to direct Web3Forms endpoint if API route is unreachable
      }

      // Attempt 2: Direct Web3Forms API submission fallback
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
            subject: `New Newsletter Subscriber: ${email}`,
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
      console.error('Subscription error:', err);
      setStatus('error');
      setErrorMessage('Network connection error. Please check your internet and try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setEmail('');
    setErrorMessage(null);
  };

  return (
    <section className="relative z-10 py-16 px-4 bg-transparent border-t border-gray-800/40">
      <div className="max-w-3xl mx-auto text-center bg-[#060913]/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative z-10">
        
        {status === 'success' ? (
          <div className="space-y-5 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 size={36} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">You&apos;re Subscribed! 🎉</h3>
              <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                Thank you for subscribing! Your email <span className="text-emerald-400 font-medium">({email})</span> has been saved. You will get my latest articles and project updates straight to your inbox.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md cursor-pointer mt-2"
            >
              <RefreshCw size={14} /> Subscribe Another Email
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to My Newsletter</h3>
            <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Get the latest articles, tech insights, and project updates directly in your inbox. No spam, unsubscribe anytime.
            </p>

            {status === 'error' && errorMessage && (
              <div className="mb-6 max-w-md mx-auto flex items-center gap-3 p-3.5 bg-red-950/60 border border-red-500/40 rounded-xl text-red-300 text-xs text-left animate-in fade-in duration-200">
                <AlertCircle size={18} className="text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-20 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950/70 backdrop-blur-sm border border-gray-700/70 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 disabled:opacity-50 text-sm transition"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/60 text-white font-bold transition-all shadow-lg shadow-blue-600/30 cursor-pointer disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2 shrink-0"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-blue-200" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
