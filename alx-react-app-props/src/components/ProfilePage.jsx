// src/ProfilePage.jsx
import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext';

function ProfilePage() {
  const userData = useContext(UserContext); // Consume the context

  return <UserInfo />;
}

export default ProfilePage;


