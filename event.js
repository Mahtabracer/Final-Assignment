const token = useAuthStore.getState().token;

const res = await fetch('http://localhost:5000/api/events/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify(newEvent)
});
