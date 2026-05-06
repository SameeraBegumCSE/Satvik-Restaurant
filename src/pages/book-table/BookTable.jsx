export default function BookTable() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-cyan-600">
          Book a Table
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border p-3 rounded-lg"
          />

          <input type="date" className="w-full border p-3 rounded-lg" />

          <input type="time" className="w-full border p-3 rounded-lg" />

          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-lime-500 text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
