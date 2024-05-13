import React, { useState } from "react";
import axios from "axios";

const WorkoutPlans = () => {
  const [userId, setUserId] = useState('');
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/exercises/user/${userId}`);
      if (response.data.length === 0) {
        setError('No exercises found for the given user ID.');
        setExerciseDetails([]);
      } else {
        setExerciseDetails(response.data);
        setError('');
      }
    } catch (error) {
      setExerciseDetails(null);
      setError('Error fetching exercises.');
    }
  };

  return (
    <div className="p-4">
      <h3 className="pb-3">Exercise Details by User ID</h3>
      <form className="w-50 mb-4" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit">Get Details</button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
      {exerciseDetails && (
        <div>
          {exerciseDetails.map((exercise, index) => (
            <div key={index} className="card mb-4">
              <div className="card-body">
                <h4 className="card-title">Exercise Type: {exercise.ExerciseType.name}</h4>
                <p className="card-text">Note: {exercise.note}</p>
                <p className="card-text">User: {exercise.User.name}</p>
                <h5 className="card-subtitle mb-2 text-muted">Sets:</h5>
                <ul className="list-group list-group-flush">
                  {exercise.Sets.map((set, setIndex) => (
                    <li key={setIndex} className="list-group-item">Reps: {set.numReps}, Weight: {set.weight}</li>
                  ))}
                </ul>
                <p className="card-text"><small className="text-muted">Created At: {exercise.createdAt}</small></p>
                <p className="card-text"><small className="text-muted">Updated At: {exercise.updatedAt}</small></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPlans;
