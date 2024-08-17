// UserInfo.jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfo = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      {/* other user info */}
    </div>
  );
};

export default UserInfo;
