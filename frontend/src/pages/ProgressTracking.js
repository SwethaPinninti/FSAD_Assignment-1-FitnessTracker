import React, { useState } from "react";
import axios from "axios";

const ProgressTracking = () => {
  const [userId, setUserId] = useState('');
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState('');

  const fetchProgress = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}/statistics`);
      setProgress(response.data);
      setError('');
    } catch (error) {
      setProgress(null);
      setError('Error fetching progress data.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId !== '') {
      fetchProgress();
    } else {
      setError('Please enter a valid user ID.');
    }
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <h3 className="pb-3">Progress Tracking</h3>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">Track Progress</button>
      </form>
      {/* Display error message if any */}
      {error && <p>{error}</p>}
      {/* Display progress data if available */}
      {progress && (
        <div>
          <p>Total Weight Lifted: {progress.totalWeightLifted}</p>
        </div>
      )}
    </div>
  );
};

export default ProgressTracking;
