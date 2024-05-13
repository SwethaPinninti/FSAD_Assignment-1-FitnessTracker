import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to our Fitness Tracker App!</h1>
      <div className="features">
        <div className="feature">
          <h2>User Authentication</h2>
          <p>Implement a secure user authentication system to allow users to register, log in, and manage their accounts.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="feature">
          <h2>Activity Logging</h2>
          <p>Enable users to log various fitness activities, including workouts, runs, walks, cycling sessions, and more. Users should be able to record duration, distance, intensity, and calories burned.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="feature">
          <h2>Goal Setting</h2>
          <p>Provide users with the ability to set personalized fitness goals based on parameters like weight loss, endurance improvement, muscle gain, or specific performance targets.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        {/* Add more feature divs for additional features */}
      </div>
<br></br>
      <div className='features'>
      <div className="feature">
          <h2>Integration with Wearable Devices</h2>
          <p>Integrate with popular fitness trackers and smartwatches to automatically sync activity data and provide a seamless user experience. (** Mock APIs can be used)</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="feature">
          <h2>Nutrition Tracking</h2>
          <p>Optionally, incorporate features for tracking nutrition intake, including calorie counting, macronutrient monitoring, and meal logging.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="feature">
          <h2>Social Sharing</h2>
          <p>Enable users to share their fitness achievements, goals, and progress on social media platforms to encourage accountability and motivate others.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          text-align: center;
          margin-bottom: 40px;
        }
        .features {
          display: flex;
          justify-content: space-between;
        }
        .feature {
          width: calc(33.33% - 20px);
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .feature h2 {
          margin-bottom: 10px;
        }
        .feature p {
          color: #666;
        }
        .learn-more-btn {
          display: block;
          width: 100%;
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .learn-more-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
