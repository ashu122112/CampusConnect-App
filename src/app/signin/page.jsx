"use client";
import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	const handleSubmit = async () => {
		try {
			setLoading(true);
			// API call to login endpoint
			const response = await axios.post('http://localhost:800/api/login', { email, password });
			console.log("Login successful:", response.data);

			// Show success message
			setSuccessMessage(true);
			
			// Redirect to profile page after a short delay
			setTimeout(() => {
				router.push('/profile'); // Redirect to profile page
			}, 2000);
		} catch (error) {
			console.error("Login error:", error);
			alert("Login failed. Please check your credentials.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="from-cyan-100 via-pink-200 to-yellow-200 bg-gradient-to-br">
			<div>
				<Navbar />
			</div>
			<div className="min-h-screen from-cyan-100 via-pink-200 to-yellow-200 bg-gradient-to-br py-6 flex flex-col justify-center sm:py-12">
				<div className="relative py-3 sm:max-w-xl sm:mx-auto">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
					<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
						<div className="max-w-md mx-auto">
							<div>
								<h1 className="text-3xl text-center text-slate-500 font-semibold">campussConnect</h1>
							</div>
							<div className="divide-y divide-gray-200">
								<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
									<div className="relative">
										<input
											autoComplete="off"
											id="email"
											name="email"
											type="text"
											className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
											placeholder="Email address"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
										<label
											htmlFor="email"
											className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
										>
											Email Address
										</label>
									</div>
									<div className="relative">
										<input
											autoComplete="off"
											id="password"
											name="password"
											type="password"
											className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<label
											htmlFor="password"
											className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
										>
											Password
										</label>
									</div>
									<div className="relative">
										<button
											onClick={handleSubmit}
											className="bg-blue-500 text-white rounded-md px-2 py-1 hover:text-blue-100"
											disabled={loading}
										>
											{loading ? "Submitting..." : "Submit"}
										</button>
									</div>

									{/* Success Message Popup */}
									{successMessage && (
										<div className="mt-4 p-4 text-green-600 border border-green-400 rounded">
											Login successful! Redirecting to profile page...
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
