
import React from 'react'
import { useState } from 'react';
import './PopForm.css'; // Assuming you have a CSS file for styling

const PopForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false); // Close modal
  };

  return (
    <div className="App">
      <h2>Welcome to My Page</h2>
      <button className="open-btn" onClick={() => setShowModal(true)}>Open Registration Form</button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <button type="submit" className='submit-btn'>Submit</button>
              <button type="button" onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopForm