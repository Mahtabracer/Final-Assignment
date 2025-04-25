const { token } = useAuthStore();

const handleCreate = async () => {
  const res = await fetch('http://localhost:5000/api/events/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ name, date, time, location, category, description })
  });

  const data = await res.json();
  if (res.ok) {
    // update UI
  } else {
    alert(data.msg || 'Error creating event');
  }
};
