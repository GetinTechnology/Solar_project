import React from 'react'
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        solarFor: '',
        electricityBill: '',
        financeInterest: '',
    });
    const statesAndCities = {
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"]
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <div className='quote-form'>
            <form action="" className='qu' onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
                <label htmlFor="">phone</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
                <label htmlFor="">State</label>
                <select name="state" value={formData.state} onChange={handleInputChange} required>
                    <option value="">Select State</option>
                    {Object.keys(statesAndCities).map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <label htmlFor="">select city</label>
                <select name='city' value={formData.city} onChange={handleInputChange} required disabled={!formData.state}>
                    {formData.state && statesAndCities[formData.state].map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
                <label htmlFor="">Solar For</label>
                <select name="solarFor" value={formData.solarFor} onChange={handleInputChange} required>
                    <option value="">Select an Option</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Small Business">Small Business</option>
                </select>
                <label>Monthly Electricity Bill</label>
                <select name="electricityBill" value={formData.electricityBill} onChange={handleInputChange} required>
                    <option value="">Select Range</option>
                    <option value="Below ₹2000">Below ₹2000</option>
                    <option value="₹2000 - ₹5000">₹2000 - ₹5000</option>
                    <option value="₹5000 - ₹10000">₹5000 - ₹10000</option>
                    <option value="Above ₹10000">Above ₹10000</option>
                </select>
                <label>Interest in Financing</label>
                <select name="financeInterest" value={formData.financeInterest} onChange={handleInputChange} required>
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                </select>
                <button className='quote' style={{width:'100px',margin:'10px 0 0 0',display:'flex',justifyContent:'center'}}>submit</button>
            </form>
        </div>
    )
}

export default Form