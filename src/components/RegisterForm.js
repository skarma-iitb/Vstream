import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Simulate registration action here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          className="w-full px-4 py-2 border rounded"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="w-full px-4 py-2 border rounded"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">DOB</label>
        <input
          type="date"
          name="dob"
          className="w-full px-4 py-2 border rounded"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <select
          name="gender"
          className="w-full px-4 py-2 border rounded"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;