import React from 'react';

// This is a simple placeholder to test the route.
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Filmfile Login</h1>
        
        <p className="text-sm text-center mb-4">Authentication logic goes here.</p>
        
        {/* Placeholder for the actual form */}
        <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold mt-4">
          Sign In (Placeholder)
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Ready to track your movies? <a href="/signup" className="text-red-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
