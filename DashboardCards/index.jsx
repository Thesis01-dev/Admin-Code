import React from "react";
import { CarFront, User, Users } from "lucide-react";

const DashboardCards = () => {
  const stats = [
    {
      title: "No. of Cars",
      value: 0,
      icon: <CarFront className="w-10 h-10 text-gray-700" />,
    },
    {
      title: "No. of Owners",
      value: 4,
      icon: <User className="w-10 h-10 text-gray-700" />,
    },
    {
      title: "No. of Customers",
      value: 0,
      icon: <Users className="w-10 h-10 text-gray-700" />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-2">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        



        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 bg-gray-400 text-white rounded-md shadow-sm"
          >
            <div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm mt-1 text-white">{stat.title}</div>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
