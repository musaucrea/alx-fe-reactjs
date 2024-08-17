function UserDetails({ userData }) {
    return (
        <div>
        <h1>{userData.name}</h1>
        <p>{userData.email}</p>
        {/* other user details */}
      </div>
  
      
    );
  }
  
  export default UserDetails;
  