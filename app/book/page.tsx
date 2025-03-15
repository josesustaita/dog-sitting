'use client';

import { useState } from 'react';
import BookingCalendar from '../../components/BookingCalendar';
import { supabase } from '../../lib/supabaseClient';

export default function BookPage() {
  const [dateRange, setDateRange] = useState<Date | Date[]>(new Date());
  const [dogName, setDogName] = useState('');
  const [isDaycare, setIsDaycare] = useState(false);
  const [status, setStatus] = useState('');

  async function handleBooking() {
    try {
      // If dateRange is a single Date, treat that as check_in=check_out
      // If dateRange is an array, [start, end]
      const checkIn = Array.isArray(dateRange) ? dateRange[0] : dateRange;
      const checkOut = Array.isArray(dateRange) ? dateRange[1] : dateRange;

      // In a real app, you'd also handle user authentication, dog's ID, etc.
      const { data, error } = await supabase.from('bookings').insert({
        // dog_id, user_id, etc. as needed
        check_in: checkIn,
        check_out: checkOut,
        is_daycare: isDaycare,
      });

      if (error) throw error;
      setStatus('Booking created successfully! We will contact you for confirmation.');
    } catch (err: any) {
      console.error(err);
      setStatus(`Error creating booking: ${err.message}`);
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Stay / Daycare</h1>

      <p className="mb-4 text-center">
        Select your desired dates below and let us know if this is for Daycare or Overnight Boarding.
      </p>

      <div className="mb-6">
        <BookingCalendar onChange={setDateRange} />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Dog Name</label>
        <input
          className="border p-2 w-full rounded"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
          placeholder="Your dog's name"
        />
      </div>

      <div className="mb-6">
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
        className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 w-full"
        onClick={handleBooking}
      >
        Confirm Booking
      </button>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
