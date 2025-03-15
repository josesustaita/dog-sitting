'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <FacilitySection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/** ---------- HERO SECTION ---------- **/
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-white bg-black overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1596495577886-d920f5c42eb1"
        alt="Happy Dogs"
        fill
        className="object-cover object-center brightness-50"
        priority
      />
      {/* Hero Text */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Home Away From Home
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Your dog's cozy retreat where every pup is family
        </p>
      </motion.div>
    </section>
  );
}

/** ---------- ABOUT SECTION ---------- **/
function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100">
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">About Manny</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          <div className="relative w-full md:w-1/2 h-64 mb-4 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1615652764451-65bfa78af8b6"
              alt="Manny"
              fill
              className="object-cover rounded shadow"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">
              Hi there! I’m Manny, the proud owner and caretaker at Home Away
              From Home Doggy Daycare. My lifelong passion for animals led me
              to create a daycare and boarding service where every dog feels
              truly at home. When your dog stays with me, they join my
              family—enjoying cozy indoor kennels, a safe outdoor play area,
              and plenty of one-on-one attention.
            </p>
            <p>
              My goal is to provide a safe, fun, and loving environment so you
              can have peace of mind while you’re away. Welcome to the family!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/** ---------- FACILITY / GALLERY SECTION ---------- **/
function FacilitySection() {
  const gallery = [
    'https://images.unsplash.com/photo-1556526276-1fb22c0b5d74',
    'https://images.unsplash.com/photo-1537151672256-6c45d16e2b43',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783',
    'https://images.unsplash.com/photo-1598133894005-28ec7ae2f619',
    'https://images.unsplash.com/photo-1557569428-dcba1921ac26',
  ];

  return (
    <section id="facility" className="py-16 px-4">
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Our Facility</h2>
        <p className="text-center mb-10">
          Explore our spacious, climate-controlled kennels and sunny play areas
          designed to keep your pup happy and comfortable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <div key={i} className="relative w-full h-64 rounded overflow-hidden">
              <Image
                src={src}
                alt={`Facility ${i}`}
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/** ---------- PRICING SECTION ---------- **/
function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-4 bg-gray-100">
      <motion.div
        className="container mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Pricing &amp; Services
        </h2>
        <p className="text-center mb-8">
          We limit ourselves to <strong>4 dogs</strong> at a time to ensure
          high-quality care.
        </p>

        {/* Boarding */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Boarding</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>$60/day</li>
            <li>
              First-time clients booking more than one day:{' '}
              <strong>1st night free</strong>
            </li>
            <li>Every 7th day is free</li>
            <li>
              Additional dog: <strong>$10 discount</strong> per day
            </li>
            <li>
              $10 fee for every hour late pickup after 7pm
            </li>
            <li>$45/day if you purchase a 10-day pass</li>
          </ul>
        </div>

        {/* Daycare */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Daycare</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>$30/day</li>
            <li>
              Second dog: <strong>$10 discount</strong>
            </li>
            <li>If pickup is later than 9pm, it switches to boarding rates</li>
            <li>
              Open from <strong>6am</strong> daily
            </li>
          </ul>
        </div>

        <p className="mt-4 text-center">
          Kennels: 4x4 and 4x6 | Climate-controlled | Bring your own food | ~65lb
          limit, case-by-case for larger dogs
        </p>
      </motion.div>
    </section>
  );
}

/** ---------- BOOKING SECTION (Calendar + Form) ---------- **/
function BookingSection() {
  const [dateRange, setDateRange] = useState<Date | Date[]>(new Date());
  const [dogName, setDogName] = useState('');
  const [isDaycare, setIsDaycare] = useState(false);
  const [status, setStatus] = useState('');

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    // If dateRange is an array, [start, end], otherwise it's a single Date
    const checkIn = Array.isArray(dateRange) ? dateRange[0] : dateRange;
    const checkOut = Array.isArray(dateRange) ? dateRange[1] : dateRange;

    // In a real app, you'd insert into your DB or call an API route
    setStatus(
      `Thank you, ${dogName}! We received your booking for ${
        isDaycare ? 'daycare' : 'boarding'
      } from ${checkIn.toDateString()} ${
        checkOut && checkOut !== checkIn
          ? `to ${checkOut.toDateString()}`
          : ''
      }.`
    );
  }

  return (
    <section id="booking" className="py-16 px-4">
      <motion.div
        className="container mx-auto max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book Your Stay
        </h2>
        <p className="text-center mb-8">
          Reserve a spot for your furry friend. Select dates on the calendar,
          then fill out the form below.
        </p>

        {/* Calendar */}
        <div className="mx-auto mb-6">
          <Calendar
            onChange={setDateRange}
            value={dateRange}
            minDate={new Date()}
            selectRange={true}
            className="mx-auto"
          />
        </div>

        {/* Booking Form */}
        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="dogName">
              Dog Name
            </label>
            <input
              id="dogName"
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your dog's name"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isDaycare}
                onChange={(e) => setIsDaycare(e.target.checked)}
              />
              <span>Daycare (instead of overnight)?</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </form>

        {status && (
          <p className="mt-4 text-green-700 font-semibold text-center">
            {status}
          </p>
        )}
      </motion.div>
    </section>
  );
}

/** ---------- CONTACT SECTION ---------- **/
function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAlertMsg(`Thanks, ${name}! We received your message.`);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <motion.div
        className="container mx-auto max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-center mb-8">
          Questions, special requests, or just want to say hi? Drop us a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-2 rounded"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>

        {alertMsg && (
          <p className="mt-4 text-center text-green-700 font-semibold">
            {alertMsg}
          </p>
        )}
      </motion.div>
    </section>
  );
}

/** ---------- FOOTER ---------- **/
function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Home Away From Home Doggy Daycare. All
        rights reserved.
      </p>
    </footer>
  );
}
