import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav  style={{height:'120vh'}} className="navbar navbar-expand-lg bg-dark flex-column bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <h5 className="nav-brand">
                  <Link className="nav-link" to="/">Home</Link>
                </h5>
              </li>

              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/register">Register</Link>
                </h5>
              </li>

              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/login">GetID</Link>
                </h5>
              </li>


              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/activity">Activity Logging</Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/goals">Goal Setting</Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/progress">Progress Tracking</Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/workouts">Workout Plans</Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/wearables">Wearable Integration</Link>
                </h5>
              </li>

              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/add">Add Nutrition</Link> {/* Changed text to 'Add Nutrition' */}
                </h5>
              </li>
              <li className="nav-item">
                <h5 className="nav-link">
                  <Link className="nav-link" to="/view">View Nutrition</Link> {/* Changed text to 'View Nutrition' */}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
