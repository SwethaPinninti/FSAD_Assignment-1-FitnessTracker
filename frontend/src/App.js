import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ActivityLogging from './pages/ActivityLogging';
import GoalSetting from './pages/GoalSetting';
import ProgressTracking from './pages/ProgressTracking';
import WorkoutPlans from './pages/WorkoutPlans';
import WearableIntegration from './pages/WearableIntegration';
import NutritionTracking from './pages/NutritionTracking';
import Login from './pages/Login';
import Register from './pages/Register';
import AddNutrition from './pages/AddNutrition';
import ViewNutrition from './pages/ViewNutrition';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="app">

        <div className='row'>

        <div style={{width:"20vw"}}>
        <Header  />
        </div>


        <div  style={{Height:'100vh',width:'75vw',overflowX:'auto'}} >

        <main className='p-4'>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/activity" element={<ActivityLogging />} />
            <Route path="/goals" element={<GoalSetting />} />
            <Route path="/progress" element={<ProgressTracking />} />
            <Route path="/workouts" element={<WorkoutPlans />} />
            <Route path="/wearables" element={<WearableIntegration />} />
            <Route path="/nutrition" element={<NutritionTracking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddNutrition />} />
            <Route path="/view" element={<ViewNutrition />} />
          </Routes>
        </main>

        <Footer />

        </div>


        </div>


      </div>
    </Router>
  );
};

export default App;
