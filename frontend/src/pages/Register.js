import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [register, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users", { name });
      setId(res.data.id);
      setRegister(true);
      setErrorMessage(""); // Reset error message if successful
      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Conflict error (name already exists)
        setErrorMessage(
          "User with this name already exists. Please choose a different name."
        );
      } else {
        // Other registration error
        setErrorMessage("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <h6 className="ms-1 py-3">
        Enter your Name and We will give you ID.
      </h6>
      <form className="pb-3 w-50" onSubmit={handleSubmit}>

        <div className="input-group">
        <input
        className="form-control"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-secondary" type="submit">Register</button>
        </div>

      </form>

      {errorMessage && <h6>{errorMessage}</h6>}

      {register && (
        <div>
          <h6>Your ID is {id}.
            </h6>
            <h6>
            Remeber this ID for further use</h6>
        </div>
      )}
    </div>
  );
};

export default Register;
