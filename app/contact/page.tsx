import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Development</h1>
      <p className="text-lg text-gray-600 mb-6">
        This page is currently under development. Please check back later!
      </p>
      <div className="mt-6">
        <svg
          className="w-16 h-16 mx-auto text-gray-400 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Contact;