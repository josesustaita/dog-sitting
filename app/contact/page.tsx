'use client';

import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here, you could submit to an API route or third-party service like EmailJS
    setStatus('Your message has been sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center mb-8">
        Questions, special requests, or just want to say hi? Drop us a message!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            name="message"
            id="message"
            rows={5}
            onChange={handleChange}
            value={formData.message}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
