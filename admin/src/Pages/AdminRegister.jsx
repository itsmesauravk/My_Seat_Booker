import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/AdminRegister.css'; 

// Import react-toastify
import { toast} from 'react-toastify';

const AdminRegister = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');

    // const apiUrl = 'http://localhost:4000';
    const apiUrl = process.env.REACT_APP_API_URL;

    const successNotify = () => {
        toast.success("Register Successfully !!", {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    const warnNotify = () => {
        toast.error("Registration Failed!!", {
            position: 'top-right',
            autoClose: 2000,
        
        });
    };

    const errorNotify = (err) => {
        toast.error(`Register Failed: ${err.message}`, {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch(`${apiUrl}/admin/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, contact, password }),
            });
            const data = await response.json();
            if (data.success) {
                successNotify();
                setUsername('');
                setEmail('');
                setContact('');
                setPassword('');
            } else {
                warnNotify();
            }
        } catch (error) {
            console.error('Error:', error);
            errorNotify(error);
        }
    };

    return (
        <div className="admin-register">
            <h1>Admin Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        type="tel"
                        id="contact"
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
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
                <button type="submit">Register</button>
            </form>
            <ToastContainer />
            <p className="already-registered">
                Already have an account? <Link to={'/admin/login'}>Login</Link>
            </p>
        </div>
    );
};

export default AdminRegister;
