// DistAddVehicle.js

import React, { useState } from 'react';
import DistNavbar from '../Components/DistNavbar';
import '../Css/DistAddVehicle.css';

const DistAddVehicle = () => {
  const [formData, setFormData] = useState({
    busCompany: '',
    busNumber: '',
    driverName: '',
    driverContact: '',
    totalSeats: '',
    seatPrice: '', // New field for seat price
    busImages: [],
    dateOfDeparture: '',
    time: '',
    startFrom: '',
    endTo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, busImages: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data if needed
    // setFormData({
    //   busCompany: '',
    //   busNumber: '',
    //   driverName: '',
    //   driverContact: '',
    //   totalSeats: '',
    //   seatPrice: '',
    //   busImages: [],
    //   dateOfDeparture: '',
    //   time: '',
    //   startFrom: '',
    //   endTo: ''
    // });
  };

  return (
    <>
      <DistNavbar />
      <div className="form-container">
        <h2>Add Bus</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="busCompany">Bus Company</label>
          <input type="text" id="busCompany" name="busCompany" value={formData.busCompany} onChange={handleChange} />

          <label htmlFor="busNumber">Bus Number</label>
          <input type="text" id="busNumber" name="busNumber" value={formData.busNumber} onChange={handleChange} />

          <label htmlFor="driverName">Driver Name</label>
          <input type="text" id="driverName" name="driverName" value={formData.driverName} onChange={handleChange} />

          <label htmlFor="driverContact">Driver Contact</label>
          <input type="text" id="driverContact" name="driverContact" value={formData.driverContact} onChange={handleChange} />

          <label htmlFor="totalSeats">Total Seats</label>
          <input type="number" id="totalSeats" name="totalSeats" value={formData.totalSeats} onChange={handleChange} />

          <label htmlFor="seatPrice">Seat Price</label>
          <input type="number" id="seatPrice" name="seatPrice" value={formData.seatPrice} onChange={handleChange} />

          <label htmlFor="busImages">Bus Images</label>
          <input type="file" id="busImages" name="busImages" onChange={handleFileChange} multiple />

          <label htmlFor="dateOfDeparture">Date of Departure</label>
          <input type="date" id="dateOfDeparture" name="dateOfDeparture" value={formData.dateOfDeparture} onChange={handleChange} />

          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />

          <label htmlFor="startFrom">Start From</label>
          <input type="text" id="startFrom" name="startFrom" value={formData.startFrom} onChange={handleChange} />

          <label htmlFor="endTo">End To</label>
          <input type="text" id="endTo" name="endTo" value={formData.endTo} onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default DistAddVehicle;
