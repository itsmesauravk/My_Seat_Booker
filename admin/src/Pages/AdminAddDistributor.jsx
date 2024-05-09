import React, { useState } from 'react';
import '../Css/AdminAddDistributor.css';
import AdminNavbar from '../Components/AdminNavbar';

const AdminAddDistributor = () => {
  const [ownerName, setOwnerName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(
      `Owner Name: ${ownerName}, Organization Name: ${organizationName}, Email: ${email}, Contact: ${contact}, Location: ${location}, Password: ${password}`
    );
    // Implement your distributor creation logic here (e.g., API call, validation)
    setOwnerName('');
    setOrganizationName('');
    setEmail('');
    setContact('');
    setLocation('');
    setPassword('');
  };

  return (
    <>
        <AdminNavbar />
        <div className="admin-add-distributor">
            <h1>Add Distributor</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="ownerName">Owner Name</label>
                <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="organizationName">Organization Name</label>
                <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                    type="tel" // Input type for phone number
                    id="contact"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Add Distributor</button>
            </form>
            </div>
    </>
  );
};

export default AdminAddDistributor;
