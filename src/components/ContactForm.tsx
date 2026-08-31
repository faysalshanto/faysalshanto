"use client"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required />
        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required />
      </div>
      <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required />
      <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required></textarea>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]">
        Submit Message 🚀
      </button>
    </form>
  );
}
