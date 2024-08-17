// src/components/UserProfile.jsx
import React, { useContext } from 'react'; // Import React and useContext
import { UserContext } from '../UserContext'; // Import UserContext

const UserProfile = () => {
  // Use useContext to access the userData from UserContext
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      {/* Other user profile details */}
    </div>
  );
};

export default UserProfile;

