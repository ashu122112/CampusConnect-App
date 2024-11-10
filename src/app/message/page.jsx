'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';

function ChatLayout() {
	const [messages, setMessages] = useState([]); // For storing messages
	const [newMessage, setNewMessage] = useState(''); // For typing new message
	const [conversations, setConversations] = useState([]); // For storing inbox conversations

	// Fetch conversations from the backend when the component mounts
	useEffect(() => {
		// Replace with your API endpoint to get the inbox conversations
		axios
			.get('/api/conversations')
			.then((response) => {
				setConversations(response.data);
			})
			.catch((error) => console.error('Error fetching conversations:', error));
	}, []);

	// Function to send a new message
	const handleSendMessage = () => {
		if (newMessage.trim()) {
			// Replace with your API endpoint to send the message
			axios
				.post('/api/messages', { message: newMessage })
				.then((response) => {
					setMessages((prevMessages) => [...prevMessages, response.data.message]);
					setNewMessage(''); // Clear the input field
				})
				.catch((error) => console.error('Error sending message:', error));
		}
	};

	// Function to handle text input change
	const handleMessageChange = (e) => {
		setNewMessage(e.target.value);
	};

	return (
		<>
			<Navbar className="z-40 relative bg-scroll"/>
			<header className="grid grid-cols-12 from-orange-400 via-red-500 to-pink-500 bg-gradient-to-br min-h-screen">
				{/* Sidebar Section */}
				<aside className="col-span-12 md:col-span-3 border-black border-2 p-4 bg-white hidden md:block">
					<div className="mb-4">
						<div className=" text-gray-600">
							<input
								type="search"
								name="search"
								placeholder="Search"
								className="bg-gray-100 h-10 w-full px-5 pr-10 rounded-full text-sm focus:outline-none focus:bg-white border border-gray-300  top-0 z-20 transparent" // Adjusted z-index to 20 for the sidebar search bar
							/>
						</div>
					</div>
					<div className="mt-4 text-center text-lg font-semibold">Inbox</div>
					{/* Inbox Conversations List */}
					<ul>
						{conversations.map((conversation) => (
							<li key={conversation.id} className="p-2 border-b border-gray-300 hover:bg-gray-100">
								<a href="#" className="block text-black">
									{conversation.name}
								</a>
							</li>
						))}
					</ul>
				</aside>

				{/* Chat Section */}
				<section className="col-span-12 md:col-span-9 border-black border-2 p-4 bg-gray-50 h-full flex flex-col">
					{/* Chat Header */}
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-semibold text-black">Chat</h2>
					</div>

					{/* Chat Content */}
					<div className="bg-white p-4 rounded-md shadow-md chat-content flex-grow overflow-y-auto">
						{messages.map((message, index) => (
							<div key={index} className="mb-4">
								<p className="text-black">{message}</p>
							</div>
						))}
					</div>

					{/* Message Input Area */}
					<div className="mt-4 flex items-center">
						<input
							type="text"
							className="w-full p-2 rounded-md border border-gray-300"
							placeholder="Type a message..."
							value={newMessage}
							onChange={handleMessageChange}
						/>
						<button
							className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
							onClick={handleSendMessage}
						>
							Send
						</button>
					</div>
				</section>
			</header>
		</>
	);
}

export default ChatLayout;
