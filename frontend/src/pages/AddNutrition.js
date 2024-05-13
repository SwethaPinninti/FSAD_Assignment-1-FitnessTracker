import React, { useState } from 'react';
import axios from 'axios';

const AddNutrition = () => {
  const [itemName, setItemName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [fats, setFats] = useState('');
  const [userId, setUserId] = useState(''); // Add userId state
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/nutrition', {
        itemName,
        calories,
        protein,
        carbohydrates,
        fats,
        userId, // Include userId in the request body
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error adding nutrition item:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="p-4">
      <h3 className="pb-3">Add Nutrition Item</h3>
      {submitStatus === 'success' && <p className="text-success">Nutrition item added successfully!</p>}
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div className="mb-3">
          <input className="form-control" type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </div>
        <div className="mb-3">
          <input className="form-control" type="number" placeholder="Protein" value={protein} onChange={(e) => setProtein(e.target.value)} />
        </div>
        <div className="mb-3">
          <input className="form-control" type="number" placeholder="Carbohydrates" value={carbohydrates} onChange={(e) => setCarbohydrates(e.target.value)} />
        </div>
        <div className="mb-3">
          <input className="form-control" type="number" placeholder="Fats" value={fats} onChange={(e) => setFats(e.target.value)} />
        </div>
        <div className="mb-3">
          <input className="form-control" type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} /> {/* Add input for userId */}
        </div>
        <button className="btn btn-primary mb-3" type="submit">Add Item</button>
      </form>
      {submitStatus === 'error' && <p className="text-danger">Error adding nutrition item. Please try again.</p>}
    </div>
  );
};

export default AddNutrition;
