import React from "react";

const bookings = [
  {
    id: 1,
    Owner: "Zkyrie’s Car Rental",
    clientName: "Liam Johnson",
    carType: "Honda City 2021",
    pickupDate: "November 14, 2025",
    returnDate: "November 16, 2025",
    payment: "1,500",
  },
  {
    id: 2,
    Owner: "Zkyrie’s Car Rental",
    clientName: "Liam Johnson",
    carType: "Honda City 2021",
    pickupDate: "November 14, 2025",
    returnDate: "November 16, 2025",
    payment: "1,500",
  },
  {
    id: 3,
    Owner: "Zkyrie’s Car Rental",
    clientName: "Liam Johnson",
    carType: "Honda City 2021",
    pickupDate: "November 14, 2025",
    returnDate: "November 16, 2025",
    payment: "1,500",
  },
  {
    id: 4, 
    Owner: "Zkyrie’s Car Rental",
    clientName: "Liam Johnson",
    carType: "Honda City 2021",
    pickupDate: "November 14, 2025",
    returnDate: "November 16, 2025",
    payment: "1,500",
  },
];

const feedbacks = [
  {
    car: "Toyota Vios 2024",
    client: "Emma Watsons",
    comment:
      "Great service Zkyrie’s Car Rental. Easy transactions and I highly recommend here to everybody who want to rent a car for family vacation.",
    rating: 5,
  },
  {
    car: "Toyota Vios 2024",
    client: "Emma Watsons",
    comment:
      "Great service Zkyrie’s Car Rental. Easy transactions and I highly recommend here to everybody who want to rent a car for family vacation.",
    rating: 5,
  },
];

const App = () => {
  return (
    <div className="p-4 space-y-8">
      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Recent Bookings</h2>
        <table className="w-full table-auto text-left">
          <thead className="text-gray-500">
            <tr>
              <th>No</th>
              <th>Owner</th>
              <th>Client name</th>
              <th>Car Type</th>
              <th>Date Pickup</th>
              <th>Date Return</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-t">
                <td className="py-2">{booking.id}</td>
                <td>{booking.Owner}</td>
                <td>{booking.clientName}</td>
                <td>{booking.carType}</td>
                <td>{booking.pickupDate}</td>
                <td>{booking.returnDate}</td>
                <td>{booking.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Clients Feedback</h2>
        <div className="space-y-4">
          {feedbacks.map((fb, index) => (
            <div key={index} className="bg-gray-300 rounded-lg p-4">
              <h3 className="text-xl font-semibold">{fb.car}</h3>
              <p className="font-medium">{fb.client}</p>
              <p className="text-sm mt-1">{fb.comment}</p>
              <div className="text-yellow-400 mt-2">
                {"★".repeat(fb.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
