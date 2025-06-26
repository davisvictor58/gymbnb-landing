export default function Hero() {
  return (
    <section className="w-full py-20 text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Rent Private Gyms by the Hour</h1>
      <p className="mt-4 text-lg">Book local home gyms & studios — no memberships needed.</p>
      <div className="mt-6 space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">💪 I want to book</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-xl">🏋️ I want to host</button>
      </div>
    </section>
  );
}