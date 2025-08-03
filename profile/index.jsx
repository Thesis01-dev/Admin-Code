import React from "react";
import Topbar from "../global/AdminTopbar";
const Profile = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <div className="bg-gray-200 p-3 rounded-md mb-4">
         
          <div className="flex space-x-2 mt-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">+ Add</button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md">🗑 Delete</button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="mr-2">Show</label>
            <select className="border p-1 rounded">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="ml-2">Entries</span>
          </div>
          <div>
            <label className="mr-2">Search:</label>
            <input type="text" className="border p-1 rounded" />
          </div>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-300">
              <th className="border p-2">Profile Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2"> Address</th>
              <th className="border p-2">Contact Number</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <span>Previous 1 Next</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;