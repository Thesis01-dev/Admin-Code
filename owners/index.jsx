// src/components/OwnersTable.jsx
import React, { useState } from "react";

const Owners = () => {
  const owners = [
    {
      id: 1,
      name: "Zykayrie's Rental",
      address: "Vigan City",
      contact: "09123456789",
      username: "johndoe123",
      status: "Active",
      image:
        "https://via.placeholder.com/40", // You can replace this with an actual image URL
    },
    {
      id: 2,
      name: "Collins Rental",
      address: "Bantay, Ilocos Sur",
      contact: "09987654321",
      username: "janesmith456",
      status: "Inactive",
      image:
        "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "Zykayrie's Rental",
      address: "Vigan City",
      contact: "09123456789",
      username: "johndoe123",
      status: "Active",
      image:
        "https://via.placeholder.com/40", // You can replace this with an actual image URL
    },
    {
      id: 4,
      name: "Collins Rental",
      address: "Bantay, Ilocos Sur",
      contact: "09987654321",
      username: "janesmith456",
      status: "Inactive",
      image:
        "https://via.placeholder.com/40",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredOwners = owners.filter((owner) =>
    owner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Owners</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
            + Add
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
            🗑 Delete
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table className="min-w-full bg-gray-100 rounded-lg overflow-hidden">
        <thead className="bg-gray-300 text-black font-semibold">
          <tr>
            <th className="py-2 px-4 text-left">Profile Image</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Contact Number</th>
            <th className="py-2 px-4 text-left">Username</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOwners.length > 0 ? (
            filteredOwners.map((owner) => (
              <tr key={owner.id} className="bg-white border-b">
                <td className="py-2 px-4">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="py-2 px-4">{owner.name}</td>
                <td className="py-2 px-4">{owner.address}</td>
                <td className="py-2 px-4">{owner.contact}</td>
                <td className="py-2 px-4">{owner.username}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      owner.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {owner.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-4 text-gray-500 bg-white"
              >
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between mt-4 items-center">
        <button className="px-4 py-1 bg-gray-300 rounded">Previous</button>
        <span className="text-sm">1</span>
        <button className="px-4 py-1 bg-gray-300 rounded">Next</button>
      </div>
    </div>
  );
};

export default Owners;
