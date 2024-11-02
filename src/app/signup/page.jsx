"use client"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Checkboxcomponent() {
  const [selectedRole, setSelectedRole] = useState(null); // Store the selected role
  const [selectedYear, setSelectedYear] = useState("second year"); // Default selection for year
  const [dropdownVisible, setDropdownVisible] = useState(false); // Controls dropdown visibility
  const [showPassword, setShowPassword] = useState(false); // Controls password visibility

  const handleCheckboxChange = (role) => {
    setSelectedRole(role); // Update the selected role
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl flex justify-center text-slate-500 font-semibold">campussConnect</h1>

            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

              {/* Role Selection Checkbox */}
              <div className="flex flex-row gap-7 justify-center">
                <div className="flex items-center">
                  <input
                    id="professor-checkbox"
                    type="checkbox"
                    checked={selectedRole === 'Professor'}
                    onChange={() => handleCheckboxChange('Professor')}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="professor-checkbox" className="ml-2 text-sm font-medium text-gray-900">Professor</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="student-checkbox"
                    type="checkbox"
                    checked={selectedRole === 'Student'}
                    onChange={() => handleCheckboxChange('Student')}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="student-checkbox" className="ml-2 text-sm font-medium text-gray-900">Student</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="staff-checkbox"
                    type="checkbox"
                    checked={selectedRole === 'Staff'}
                    onChange={() => handleCheckboxChange('Staff')}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="staff-checkbox" className="ml-2 text-sm font-medium text-gray-900">Staff</label>
                </div>
              </div>

              {/* Username Field */}
              <div className="relative mt-6">
                <input
                  autoComplete="off"
                  id="username"
                  name="username"
                  type="text"
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
                    onClick={toggleDropdown }
                    className="text-white bg-blue-400 hover:bg-blue-500  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mt-4"
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
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:text-blue-100 w-full">
                  Submit
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkboxcomponent;
