import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null); // State to store the user ID
  const [error, setError] = useState(null); // State to store error message

  // Function to fetch user ID by name
  const getUserIdByName = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/byName/${username}`);
      setUserId(response.data.id); // Set the user ID in the state
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching user ID:', error);
      setUserId(null); // Reset user ID if an error occurs
      setError('User not found'); // Set error message
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getUserIdByName();
  };

  return (
    <div>
      <h3 className="pb-3">Check User ID by Name</h3>
      <form className="pb-3 w-50" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn btn-secondary" type="submit">Check ID</button>
        </div>
      </form>
      {error && <h6>{error}</h6>}
      {userId && <h6>Your User ID: {userId}</h6>}
    </div>
  );
};

export default Login;
