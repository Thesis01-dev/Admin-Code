import React from "react";

import { CalendarCheck, CarFront, Users2 } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      label: "No Clients",
      value: 1,
      icon: <CalendarCheck className="w-10 h-10 text-white" />,
    },
    {
      label: "No. of Owners",
      value: 3,
      icon: <CarFront className="w-10 h-10 text-white" />,
    },
    {
      label: "No. of Bookings",
      value: 10,
      icon: <Users2 className="w-10 h-10 text-white" />,
    },
  ];

 

  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-900 text-white rounded-lg shadow-md p-6 flex items-center justify-between"
        >
          <div>
            <div className="text-4xl font-bold">{item.value}</div>
            <div className="text-md mt-2">{item.label}</div>
          </div>
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
