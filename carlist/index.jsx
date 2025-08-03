import React from "react";

const CarList = () => {
  const cars = [
    { id: 1, client: "Paul Jeff", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 2, client: "Jeff Paul", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 3, client: "Liam Johnson", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 4, client: "Liam Johnson", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 5, client: "Liam Johnson", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 6, client: "Liam Johnson", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 7, client: "Paul Jeff", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 8, client: "Jeff Paul", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
    { id: 9, client: "Liam Johnson", type: "Honda City 2021", pickup: "November 14, 2025", return: "November 16, 2025", payment: "1,500" },
  ];

  const units = [
    { name: "Toyota Vios 2024", rating: 4.9, reviews: 100, image: "https://via.placeholder.com/50" },
    { name: "Toyota Grandia 2017", rating: 4.9, reviews: 100, image: "https://via.placeholder.com/50" },
    { name: "Mitsubishi Xpander", rating: 4.9, reviews: 100, image: "https://via.placeholder.com/50" },
    { name: "Honda Civic", rating: 4.9, reviews: 100, image: "https://via.placeholder.com/50" },
    { name: "Nissan Urvan", rating: 4.9, reviews: 100, image: "https://via.placeholder.com/50" },
    { name: "Honda City 2021", rating: 4.9, reviews: 100, image: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="flex gap-6 p-6">
      {/* Car Listings Table */}
      <div className="w-2/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Car Listings</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">Owners Name</th>
              <th className="border p-2">Car Type</th>
              <th className="border p-2">Date Pickup</th>
              <th className="border p-2">Date Return</th>
              <th className="border p-2">Payment</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="text-center">
                <td className="border p-2 font-bold">{car.id}</td>
                <td className="border p-2">{car.client}</td>
                <td className="border p-2">{car.type}</td>
                <td className="border p-2">{car.pickup}</td>
                <td className="border p-2">{car.return}</td>
                <td className="border p-2">{car.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Car Units Section */}
      <div className="w-1/3 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Units</h2>
        {units.map((unit, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-md mb-3">
            <img src={unit.image} alt={unit.name} className="w-12 h-12 rounded-lg" />
            <div>
              <h3 className="font-semibold">{unit.name}</h3>
              <p className="text-sm text-gray-500">⭐ {unit.rating} ({unit.reviews} Reviews)</p>
            </div>
          </div>

          






        ))}
      </div>
    </div>
  );
};

export default CarList;