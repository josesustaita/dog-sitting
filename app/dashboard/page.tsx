'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function DashboardPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      // Example: fetch all
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('inserted_at', { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setBookings(data || []);
      }
      setLoading(false);
    }
    fetchBookings();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
      {loading && <p>Loading...</p>}
      {!loading && bookings.length === 0 && <p>No bookings found.</p>}

      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="border border-gray-300 p-4 rounded shadow-sm">
            <p><strong>Booking ID:</strong> {b.id}</p>
            <p><strong>Check-In:</strong> {b.check_in}</p>
            <p><strong>Check-Out:</strong> {b.check_out}</p>
            <p><strong>Daycare:</strong> {b.is_daycare ? 'Yes' : 'No'}</p>
            <p><strong>Status:</strong> {b.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
