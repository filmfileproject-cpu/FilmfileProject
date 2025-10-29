'use client'; // MUST be the first line

import React, { useState } from 'react';
// Correct relative path: from app/login/ to lib/supabaseClient.ts
import { supabase } from '@/lib/supabaseClient'; 

const AuthForm = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!email || !password) {
      setMessage('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      // Use the correct sign-up or sign-in method
      const { error } = isSigningUp
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

      if (error) throw error;

      setMessage(isSigningUp 
        ? 'Success! Check your email for a confirmation link.' 
        : 'Logged in successfully! Redirecting...'
      );

    } catch (error: any) {
      // Use error.message for readability
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        {isSigningUp ? 'Create Account' : 'Filmfile Login'}
      </h1>
      
      <form onSubmit={handleAuth} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 border-none focus:ring-red-500 focus:border-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 border-none focus:ring-red-500 focus:border-red-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white transition duration-150 disabled:opacity-50"
        >
          {loading ? 'Processing...' : (isSigningUp ? 'Sign Up' : 'Log In')}
        </button>
      </form>

      {message && <p className={`mt-4 text-center text-sm ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>}

      <button
        onClick={() => setIsSigningUp(!isSigningUp)}
        className="mt-4 w-full text-center text-sm text-red-400 hover:text-red-300 transition duration-150"
      >
        {isSigningUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthForm;
