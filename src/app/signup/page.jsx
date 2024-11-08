"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function CheckboxComponent() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedYear, setSelectedYear] = useState("second year");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    registration: ''
  });

  const handleCheckboxChange = (role) => {
    setSelectedRole(role);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your Spring Boot API endpoint
      const response = await axios.post('http://192.168.180.142:8080/api/signup', {
        ...formData,
        role: selectedRole,
        year: selectedYear
      });
      console.log("Form submitted successfully:", response.data);
      // Optionally reset the form here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div>
        <div className="relative z-50">
          <Navbar />
        </div>
      </div>
      <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12 px-4 sm:px-0">
        <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-slate-500 font-semibold">campussConnect</h1>

                <div className="py-8 text-sm sm:text-base lg:text-lg leading-6 space-y-4 text-gray-700 sm:leading-7">

                  {/* Role Selection Checkbox */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 justify-center">
                    {["Professor", "Student", "Staff"].map((role) => (
                      <div className="flex items-center" key={role}>
                        <input
                          id={`${role.toLowerCase()}-checkbox`}
                          type="checkbox"
                          checked={selectedRole === role}
                          onChange={() => handleCheckboxChange(role)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={`${role.toLowerCase()}-checkbox`} className="ml-2 text-sm font-medium text-gray-900">
                          {role}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Username Field */}
                  <div className="relative mt-6">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Username"
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>

                  {/* Conditional Student Fields */}
                  {selectedRole === 'Student' && (
                    <>
                      {/* Registration Number Field */}
                      <div className="relative mt-6">
                        <input
                          autoComplete="off"
                          id="registration"
                          name="registration"
                          type="text"
                          value={formData.registration}
                          onChange={handleInputChange}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Registration Number"
                        />
                        <label
                          htmlFor="registration"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Registration Number
                        </label>
                      </div>

                      {/* Year Selection Dropdown */}
                      <button
                        onClick={toggleDropdown}
                        className="text-white bg-blue-400 hover:bg-blue-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mt-4"
                      >
                        Select Year{" "}
                        <svg
                          className="w-2.5 h-2.5 ml-3"
                          aria-hidden="true"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {dropdownVisible && (
                        <div className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
                          <ul className="p-3 space-y-3 text-sm text-gray-700">
                            {["first year", "second year", "third year", "fourth year"].map(
                              (year, index) => (
                                <li key={index}>
                                  <div className="flex items-center">
                                    <input
                                      type="checkbox"
                                      checked={selectedYear === year}
                                      onChange={() => setSelectedYear(year)}
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm font-medium text-gray-900">
                                      {year}
                                    </label>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  {/* Submit Button */}
                  <div className="relative mt-6">
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:text-blue-100 w-full">
                      Submit
                    </button>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckboxComponent;
