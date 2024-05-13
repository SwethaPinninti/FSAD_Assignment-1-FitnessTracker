import React, { useState } from "react";
import axios from "axios";

const GoalSetting = () => {
  const [exerciseName, setExerciseName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create an exercise with the provided name
      await axios.post('http://localhost:3000/exercise-types', { name: exerciseName });
      // Handle successful exercise creation, e.g., clear form, show success message
      setExerciseName(''); // Clearing the input field after successful submission
    } catch (error) {
      // Handle exercise creation error, e.g., display error message
      console.error('Error creating exercise:', error);
      // You can add logic here to display an error message to the user
    }
  };

  return (
    <div>
      <h3 className="pb-3">Exercise Creation</h3>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Exercise Name"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">Create Exercise</button>
      </form>
    </div>
  );
};

export default GoalSetting;
