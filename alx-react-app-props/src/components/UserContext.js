// UserContext.js
import React, { createContext, useState } from 'react';
import React, { createContext } from 'react';


// Initialize the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    // Initialize your user data here
    name: 'John Doe',
    email: 'john.doe@example.com',
    // other user data
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContext.Provider };
export default UserContext;



