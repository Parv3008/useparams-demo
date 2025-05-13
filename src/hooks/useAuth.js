import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // change to false to simulate logged out

  return { isAuthenticated };
}
