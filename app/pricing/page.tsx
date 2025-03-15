export default function PricingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Prices & Services</h1>
      <p className="text-center mb-8">
        We limit ourselves to <strong>4 dogs</strong> at a time to ensure personalized care.
      </p>

      {/* Boarding Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Boarding</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>$60 per day</li>
          <li>First-time clients booking more than one day: <strong>1st night is free</strong></li>
          <li>Every 7th day is free</li>
          <li>Additional dog: <strong>$10 discount</strong> per day</li>
          <li>$10 fee for every hour late (after 7pm) pickup</li>
          <li>$45/day if you purchase a 10-day pass</li>
        </ul>
      </div>

      {/* Daycare Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Daycare</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>$30 per day</li>
          <li>Second dog: <strong>$10 discount</strong></li>
          <li>If pickup is later than 9pm, it transitions to boarding rates</li>
          <li>Open from <strong>6am</strong> daily</li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
        <p className="mb-4">
          - Kennel sizes: <strong>4x4</strong> and <strong>4x6</strong><br/>
          - Climate-controlled environment<br/>
          - Bring your own food to maintain dietary consistency<br/>
          - Typically accommodate dogs up to ~65lbs, but we can consider larger dogs on a case-by-case basis<br/>
          - No breed restrictions, but we maintain a safe and harmonious environment for all<br/>
        </p>
        <p>
          Ready to book?{' '}
          <a
            href="/book"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Book here
          </a>.
        </p>
      </div>
    </div>
  );
}
