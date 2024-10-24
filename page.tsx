'use client';

import React from 'react';

<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>

const Framework: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex flex-col items-center justify-center">
            {/* Large Text above the bar */}
            <div className="mb-8">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-pulse tracking-widest"
                    style={{fontFamily: 'Lobster, cursive', lineHeight: '1.4'}}>
                    Absolutely Useless Bar
                </h1>
            </div>

            {/* Nothing Box */}
            <div
                className="bg-white p-8 rounded-full shadow-2xl w-full max-w-lg text-center flex items-center justify-center">
                <form className="relative w-full flex items-center">
                    <input
                        type="text"
                        className="w-full p-4 pl-8 pr-24 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300 shadow-md"
                        placeholder="Do Nothing..."
                    />
                    <button
                        type="submit"
                        className="absolute right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Go Nowhere
                    </button>
                </form>
            </div>

            {/* Buttons With Shadow Effect, gradient, and grows when hovered*/}
            <div className="flex space-x-6 mt-8">
                <button
                    className="bg-gradient-to-r from-green-400 to-teal-500 text-white py-3 px-6 rounded-full font-semibold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    Images
                </button>
                <button
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-full font-semibold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    Videos
                </button>
                <button
                    className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 px-6 rounded-full font-semibold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    News
                </button>
            </div>

            {/* Test */}
            <div className="mt-12">
                <p className="text-white text-lg font-light"> Not Very Useful...</p>
            </div>
        </div>
    );
};

export default Framework;
