'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw, Film } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '34828451-c749-4c08-ae14-3a611387235f';

    try {
      let isSuccess = false;
      let errorMsg = 'Failed to send message. Please try again.';

      // Attempt 1: Try internal API route /api/contact
      try {
        const apiRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            name: fullName,
            email: formData.email,
            message: formData.message,
          }),
        });

        const apiData = await apiRes.json();
        if (apiRes.ok && apiData.success) {
          isSuccess = true;
        } else if (apiData.message) {
          errorMsg = apiData.message;
        }
      } catch {
        // Fallback to direct Web3Forms endpoint call if API route is unavailable
      }

      // Attempt 2: If API route didn't succeed but we have NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY or fallback
      if (!isSuccess && accessKey) {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: fullName,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact: Message from ${fullName}`,
            from_name: 'Faysal Portfolio Contact Form',
            replyto: formData.email,
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
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(errorMsg);
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage(null);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#0b1329]/90 border border-[#b49f6e]/40 p-8 rounded-3xl space-y-6 text-center shadow-[0_0_35px_rgba(180,159,110,0.15)] animate-in fade-in zoom-in duration-700">
        <div className="w-16 h-16 bg-[#b49f6e]/20 text-[#b49f6e] rounded-full flex items-center justify-center mx-auto border border-[#b49f6e]/40 shadow-[0_0_20px_rgba(180,159,110,0.2)]">
          <Film size={32} className="animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="text-xs font-mono text-[#b49f6e] tracking-widest uppercase">SIGNAL RECEIVED</div>
          <h3 className="text-2xl font-serif font-bold text-white">Message Delivered</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed font-light">
            Thank you for reaching out. Your transmission has been dispatched to{' '}
            <span className="text-[#b49f6e] font-semibold">faysal.shanto.official@gmail.com</span>. I will respond to your inquiry shortly.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b49f6e] hover:bg-[#c5a880] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(180,159,110,0.3)] cursor-pointer"
        >
          <RefreshCw size={14} /> Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {status === 'error' && errorMessage && (
        <div className="flex items-start gap-3 p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300 text-xs animate-in fade-in duration-300">
          <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-red-200">Failed to Send Message</p>
            <p className="text-xs text-red-300/90 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-xs font-mono text-slate-400 mb-1 tracking-wider uppercase">
              First Name <span className="text-[#b49f6e]">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-[#04060a] border border-[#2c3b59]/50 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-[#b49f6e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-mono text-slate-400 mb-1 tracking-wider uppercase">
              Last Name <span className="text-[#b49f6e]">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-[#04060a] border border-[#2c3b59]/50 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-[#b49f6e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1 tracking-wider uppercase">
            Email Address <span className="text-[#b49f6e]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-[#04060a] border border-[#2c3b59]/50 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-[#b49f6e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1 tracking-wider uppercase">
            Your Message <span className="text-[#b49f6e]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-[#04060a] border border-[#2c3b59]/50 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-[#b49f6e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#b49f6e] hover:bg-[#c5a880] disabled:bg-[#b49f6e]/40 text-black font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 text-xs shadow-[0_0_20px_rgba(180,159,110,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin text-black" />
              <span>Transmitting Message...</span>
            </>
          ) : (
            <>
              <span>Submit Message</span>
              <Send size={15} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
