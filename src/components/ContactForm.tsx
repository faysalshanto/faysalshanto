'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';

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
      <div className="bg-[#091122]/90 border border-emerald-500/30 p-8 rounded-3xl space-y-6 text-center shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <CheckCircle2 size={36} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Message Sent Successfully! 🚀</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out! Your message has been forwarded straight to{' '}
            <span className="text-emerald-400 font-semibold">faysal.shanto.official@gmail.com</span>. I will respond to your email address as soon as possible.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
        >
          <RefreshCw size={16} /> Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {status === 'error' && errorMessage && (
        <div className="flex items-start gap-3 p-4 bg-red-950/50 border border-red-500/40 rounded-xl text-red-300 text-sm animate-in fade-in duration-200">
          <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-red-200">Failed to Send Message</p>
            <p className="text-xs text-red-300/90 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-xs font-semibold text-gray-400 mb-1">
              First Name <span className="text-blue-400">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-semibold text-gray-400 mb-1">
              Last Name <span className="text-blue-400">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-1">
            Email Address <span className="text-blue-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-400 mb-1">
            Your Message <span className="text-blue-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/60 text-white font-bold py-3.5 rounded-xl transition text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin text-blue-200" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Submit Message</span>
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
