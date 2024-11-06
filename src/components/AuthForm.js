import React, { useState } from 'react';

const AuthForm = () => {
  const [formData, setFormData] = useState({ firstName: '', surname: '', username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
      <input type="text" name="surname" placeholder="Surname" onChange={handleInputChange} />
      <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default AuthForm;