// app/profile/page.tsx
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-4 text-red-500">Welcome to Filmfile!</h1>
      <p className="text-xl mb-8">Your profile and movie collection go here.</p>
      
      {/* Placeholder for the user's movie list */}
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl text-center">
        <p className="text-lg text-gray-300">You are successfully logged in!</p>
        <p className="mt-2 text-sm text-gray-400">Next, we will add the search bar and logging functionality.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
