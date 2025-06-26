export default function SampleListings() {
  const listings = [
    {
      name: "West LA Garage Gym",
      price: "$20/hr",
      features: "Power rack, treadmill, AC",
      rating: "4.9 ⭐",
    },
    {
      name: "Venice Trainer Studio",
      price: "$35/hr",
      features: "Dumbbells, mats, mirrors",
      rating: "5.0 ⭐",
    },
  ];
  return (
    <section className="py-16 bg-gray-50 w-full px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Explore Sample Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {listings.map((gym, idx) => (
          <div key={idx} className="p-6 border rounded-xl shadow">
            <h3 className="text-xl font-bold">{gym.name}</h3>
            <p className="mt-2">{gym.features}</p>
            <p className="mt-1 text-sm text-gray-600">{gym.price} • {gym.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
