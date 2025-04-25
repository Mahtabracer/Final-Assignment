import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock API
    const mockUser = { name: 'Test User', email };
    const mockToken = 'abc123';
    login(mockUser, mockToken);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};
