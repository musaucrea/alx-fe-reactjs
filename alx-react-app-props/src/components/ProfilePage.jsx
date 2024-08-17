// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust the import if UserContext is the default export

const UserProfile = () => {
  const userData = useContext(UserContext); // Access userData from context

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      {/* Other user profile details */}
    </div>
  );
};

export default UserProfile;

export default ProfilePage;
