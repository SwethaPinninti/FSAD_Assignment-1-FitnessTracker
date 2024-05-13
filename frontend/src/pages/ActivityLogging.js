import React, { useState } from "react";
import axios from "axios";

const ActivityLogging = () => {
  const [exerciseTypeName, setExerciseTypeName] = useState('');
  const [note, setNote] = useState('');
  const [userId, setUserId] = useState('');
  const [sets, setSets] = useState([{ numReps: '', weight: '' }]);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleAddSet = () => {
    // Add a new set to the sets array
    setSets([...sets, { numReps: '', weight: '' }]);
  };

  const handleSetChange = (index, field, value) => {
    // Update the value of a specific field in a set
    const updatedSets = sets.map((set, i) => {
      if (i === index) {
        return { ...set, [field]: value };
      }
      return set;
    });
    setSets(updatedSets);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server to log the exercise
      await axios.post('http://localhost:3000/exercises', {
        exerciseTypeName,
        note,
        userId,
        sets: sets.filter(set => set.numReps !== '' || set.weight !== '') // Filter out empty sets
      });
      
      // Handle successful activity logging, e.g., clear form, show success message
      // Clearing the form fields after successful submission
      setExerciseTypeName('');
      setNote('');
      setUserId('');
      setSets([{ numReps: '', weight: '' }]);
      setSubmitStatus('success');
    } catch (error) {
      // Handle activity logging error, e.g., display error message
      console.error('Error logging activity:', error);
      // You can add logic here to display an error message to the user
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <h3 className="pb-3">Activity Logging</h3>
      {submitStatus === 'success' && <p>Activity logged successfully!</p>}
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Exercise Type"
            value={exerciseTypeName}
            onChange={(e) => setExerciseTypeName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Optional Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary mb-3" type="button" onClick={handleAddSet}>Add Set</button>
        {sets.map((set, index) => (
          <div key={index} className="mb-3">
            <input
              className="form-control mb-3"
              type="number"
              placeholder="NumReps"
              value={set.numReps}
              onChange={(e) => handleSetChange(index, 'numReps', e.target.value)}
            />
            <input
              className="form-control"
              type="number"
              placeholder="Weight"
              value={set.weight}
              onChange={(e) => handleSetChange(index, 'weight', e.target.value)}
            />
          </div>
        ))}
        <button className="btn btn-primary mb-3" type="submit">Log Activity</button>
        {submitStatus === 'error' && <p>Error logging activity. Please try again.</p>}
      </form>
    </div>
  );
};

export default ActivityLogging;
