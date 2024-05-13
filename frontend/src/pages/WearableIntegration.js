import React, { useState } from 'react';
import axios from 'axios';

const WearableIntegration = () => {
  const [deviceType, setDeviceType] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleConnect = async () => {
    try {
      const response = await axios.post('/api/wearables/connect', { deviceType });
      setConnectionStatus(response.data.status);
    } catch (error) {
      // Handle wearable connection error, e.g., display error message
    }
  };

  return (
    <div className="p-4">
      <h3 className="pb-3">Wearable Integration</h3>
      <div className="mb-3">
        <select className="form-select" value={deviceType} onChange={(e) => setDeviceType(e.target.value)}>
          <option value="">Select Device Type</option>
          <option value="fitbit">Fitbit</option>
          <option value="garmin">Garmin</option>
          {/* Add more device options */}
        </select>
      </div>
      <button className="btn btn-primary me-3" onClick={handleConnect}>Connect</button>
      <p className="mt-3">Connection Status: {connectionStatus}</p>
    </div>
  );
};

export default WearableIntegration;
