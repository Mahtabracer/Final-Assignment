import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

useEffect(() => {
  const token = useAuthStore.getState().token;
  if (!token) navigate('/login');
}, []);
