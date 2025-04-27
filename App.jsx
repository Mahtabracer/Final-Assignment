const { token } = useAuthStore();

<Route
  path="/dashboard"
  element={token ? <Dashboard /> : <Navigate to="/login" />}
/>
