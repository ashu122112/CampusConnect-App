"use client";
import Navbar from '@/components/Navbar';
import { FaTrashAlt, FaPlus } from 'react-icons/fa'; // Importing SVG icons from react-icons
import React, { useState } from 'react';
import axios from 'axios';

const AnnouncementPage = () => {
    const [announcements, setAnnouncements] = useState([
        { id: 1, text: "Here is an Announcement" },
        { id: 2, text: "Another Announcement" }
    ]);
    const [newAnnouncement, setNewAnnouncement] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/auth/announcements/${id}`); // Adjust the URL as necessary
            setAnnouncements(announcements.filter(announcement => announcement.id !== id));
            alert("Announcement deleted successfully!");
        } catch (error) {
            console.error("Error deleting announcement:", error);
            alert("Failed to delete announcement.");
        }
    };

    const handleAddAnnouncement = async () => {
        if (!newAnnouncement) return;

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:3000/api/auth/announcements', {
                text: newAnnouncement
            });
            setAnnouncements([...announcements, { id: response.data.id, text: newAnnouncement }]); // Assuming your API returns the new announcement ID
            setNewAnnouncement('');
            setIsModalOpen(false); // Close the modal after submission
            alert("Announcement added successfully!");
        } catch (error) {
            console.error("Error adding announcement:", error);
            alert("Failed to add announcement.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-rows-12 bg-gradient-to-l from-sky-200 via-indigo-300 to-purple-400 text-black">
            <Navbar />
            <h1 className="flex justify-center text-4xl font-bold p-4 rounded-lg">
                Announcement
            </h1>
            <div className="flex flex-col items-center justify-center row-span-11">
                {/* Button to open modal */}
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="mt-6 flex items-center bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200"
                >
                    <FaPlus className="mr-2" /> Add Announcement
                </button>

                {/* Existing Announcements */}
                {announcements.map(announcement => (
                    <div key={announcement.id} className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full mt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">{announcement.text}</span>
                            <FaTrashAlt 
                                className="text-red-500 cursor-pointer hover:text-red-700" 
                                title="Delete Announcement" 
                                onClick={() => handleDelete(announcement.id)} 
                            />
                        </div>
                    </div>
                ))}

                {/* Modal for Adding Announcement */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4">Add New Announcement</h2>
                            <textarea
                                value={newAnnouncement}
                                onChange={(e) => setNewAnnouncement(e.target.value)}
                                placeholder="Enter announcement details..."
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                rows={4}
                            />
                            <div className="flex justify-end">
                                <button 
                                    onClick={handleAddAnnouncement} 
                                    className={`bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                    disabled={loading}
                                >
                                    {loading ? "Adding..." : "Add Announcement"}
                                </button>
                                <button 
                                    onClick={() => setIsModalOpen(false)} 
                                    className="ml-2 bg-gray-300 text-black rounded-md px-4 py-2 hover:bg-gray-400 transition duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnnouncementPage;