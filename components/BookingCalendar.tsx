'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface BookingCalendarProps {
  onChange?: (date: Date | Date[]) => void;
}

export default function BookingCalendar({ onChange }: BookingCalendarProps) {
  const [value, setValue] = useState<Date | Date[]>(new Date());

  const handleDateChange = (date: Date | Date[]) => {
    setValue(date);
    onChange?.(date);
  };

  return (
    <div className="mx-auto max-w-md">
      <Calendar
        onChange={handleDateChange}
        value={value}
        minDate={new Date()}
        className="mx-auto"
      />
    </div>
  );
}
