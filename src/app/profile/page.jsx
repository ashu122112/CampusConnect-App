"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const AdminProfile = () => {
  const [userData, setUserData] = useState({
    name: "default",
    email: "default@gmail",
    role: "",
    year: "2nd year",
    department: "Chemical Engineering",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user"); // Replace with your actual API endpoint
        const { name, email, role, year, department } = response.data;
        setUserData({ name, email, role, year, department });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/updateUser", userData); // Replace with your actual API endpoint
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center p-10 from-cyan-100 via-pink-200 to-yellow-200 bg-gradient-to-br"
    >
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <Image
            id="showImage"
            className="w-24 h-24 rounded-full mr-6 border-2 border-gray-300"
            src="/avatar.jpg"
            alt="Profile"
            width={96}
            height={96}
          />
          <div>
            <h2 className="text-2xl font-bold text-black">Admin Profile</h2>
            <p className="text-sm text-gray-600">This information is secret so be careful</p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="font-semibold text-gray-700 block">
              Name
            </label>
            <input
              disabled
              id="name"
              name="name"
              className="border rounded px-4 py-2 w-full text-black"
              type="text"
              value={userData.name}
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold text-gray-700 block">
              Email
            </label>
            <input
              disabled
              id="email"
              name="email"
              className="border rounded px-4 py-2 w-full text-black"
              type="email"
              value={userData.email}
            />
          </div>

          <div>
            <label htmlFor="role" className="font-semibold text-gray-700 block">
              Role
            </label>
            <input
              disabled
              id="role"
              name="role"
              className="border rounded px-4 py-2 w-full text-black"
              type="text"
              value={userData.role}
            />
          </div>

          <div>
            <label htmlFor="department" className="font-semibold text-gray-700 block">
              Department
            </label>
            <input
              id="department"
              name="department"
              className="border rounded px-4 py-2 w-full text-black"
              type="text"
              value={userData.department}
              onChange={handleChange}
            />
          </div>

          {/* Conditionally render the Year field if role is not "professor" */}
          {userData.role !== "professor" && (
            <div>
              <label htmlFor="year" className="font-semibold text-gray-700 block">
                Year
              </label>
              <input
                disabled
                id="year"
                name="year"
                className="border rounded px-4 py-2 w-full text-black"
                type="text"
                value={userData.year}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 px-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdminProfile;
