import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import '../index.css'; // Import your CSS file

function FormPage() {
  const { formType } = useParams();
  const [formData, setFormData] = useState({ name: '', countryCode: '', phoneNumber: '' });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) setFormData(savedData);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        try {
            await api.post('/forms', { ...formData, formType });
            localStorage.setItem('formData', JSON.stringify(formData));
            alert('Form submitted successfully!'); // Success message
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form. Please try again.'); // Error message
        }
    } else {
        alert('Please ensure all fields are filled out correctly.'); // Validation message
    }
};


  const validateForm = () => {
    const isNameValid = formData.name && /^[A-Za-z\s]+$/.test(formData.name);
    const isPhoneValid = formData.phoneNumber && /^\+?[0-9\s\-]+$/.test(formData.phoneNumber);
    
    return isNameValid && isPhoneValid && formData.countryCode;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formType === 'A' ? 'Form A' : 'Form B'}</h1>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
        <option value="">Select Country Code</option>
        <option value="+1">+1</option>
        <option value="+91">+91</option>
        {/* More country codes as needed */}
      </select>
      <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormPage;
