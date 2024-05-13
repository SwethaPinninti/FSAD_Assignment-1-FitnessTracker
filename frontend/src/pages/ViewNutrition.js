import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewNutrition = () => {
  const [nutritionItems, setNutritionItems] = useState([]);
  const [userId, setUserId] = useState(''); // Add userId state

  useEffect(() => {
    const fetchNutritionItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/nutrition/${userId}`); // Modify URL to include userId
        setNutritionItems(response.data);
      } catch (error) {
        console.error('Error fetching nutrition items:', error);
      }
    };

    fetchNutritionItems();
  }, [userId]); // Include userId in the dependency array

  return (
    <div className="p-4">
      <h3 className="pb-3">Nutrition Items</h3>
      <div className="mb-3">
        <input className="form-control" type="number" placeholder="Enter User ID" value={userId} onChange={(e) => setUserId(e.target.value)} /> {/* Add input for userId */}
      </div>
      <ul className="list-group">
        {nutritionItems.map((item) => (
          <li key={item.id} className="list-group-item">
            <strong>{item.itemName}</strong> - Calories: {item.calories}, Protein: {item.protein}, Carbohydrates: {item.carbohydrates}, Fats: {item.fats}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewNutrition;
