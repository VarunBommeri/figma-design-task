import React, { useEffect, useState } from "react";
import "./UserInfo.css";

function UserInfo() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("https://api.example.com/user/12345")
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="user-info">Loading user details...</div>;
  }

  if (!userDetails) {
    return <div className="user-info">Failed to load user details.</div>;
  }

  return (
    <div className="user-info">
      <h2>{userDetails.name}</h2>
      <p>Customer ID: {userDetails.customerId}</p>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
    </div>
  );
}

export default UserInfo;
