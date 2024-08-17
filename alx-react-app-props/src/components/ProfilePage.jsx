// ProfilePage.jsx
import React from 'react';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const UserProfile = () => {
    const { userData } = useContext(UserContext);
const ProfilePage = () => {
  return (
    <><div>
          <UserDetails />
          {/* Other components */}
      </div><div>
              <h1>{userData.name}</h1>
              <p>{userData.email}</p>
              {/* Other user profile details */}
          </div></>
  );
};
};
export default UserProfile;
export default ProfilePage;
