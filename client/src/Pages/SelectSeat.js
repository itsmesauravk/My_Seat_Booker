import React, { useState } from 'react';
import Navbar from '../Components/Navbar'

import '../Css/SelectSeat.css';

const seats = [
    { id: 1, number: '1A', status: 'available' }, { id: 2, number: '1B', status: 'available' },
    { id: 3, number: '2A', status: 'available' }, { id: 4, number: '2B', status: 'available' },
    { id: 5, number: '3A', status: 'available' }, { id: 6, number: '3B', status: 'available' },
    { id: 7, number: '4A', status: 'available' }, { id: 8, number: '4B', status: 'available' },
    { id: 9, number: '5A', status: 'available' }, { id: 10, number: '5B', status: 'available' },
    { id: 11, number: '6A', status: 'available' }, { id: 12, number: '6B', status: 'available' },
    { id: 13, number: '7A', status: 'available' }, { id: 14, number: '7B', status: 'available' },
    { id: 15, number: '8A', status: 'available' }, { id: 16, number: '8B', status: 'available' },
    { id: 17, number: '9A', status: 'available' }, { id: 18, number: '9B', status: 'available' },
    { id: 19, number: '10A', status: 'available' }, { id: 20, number: '10B', status: 'available' },
    { id: 21, number: '11A', status: 'available' }, { id: 22, number: '11B', status: 'available' },
    { id: 23, number: '12A', status: 'available' }, { id: 24, number: '12B', status: 'available' },
    { id: 25, number: '13A', status: 'available' }, { id: 26, number: '13B', status: 'available' },
    { id: 27, number: '14A', status: 'booked' }, { id: 28, number: '14B', status: 'available' }
  ];

const SelectSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (id) => {
    const seat = seats.find((seat) => seat.id === id);
    if (seat.status === 'available') {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.includes(id)
          ? prevSelectedSeats.filter((seatId) => seatId !== id)
          : [...prevSelectedSeats, id]
      );
    }
  };

  const handleBookSeats = () => {
    console.log('Selected Seats:', selectedSeats.map(seatId => seats.find(seat => seat.id === seatId).number));
  };

  return (
    <>
    <Navbar />
    <div className="select-seat-container">
      <h2>Select Your Seat</h2>
      <div className="note">
        <div className="legend available"></div> <span>Available</span>
        <div className="legend booked"></div> <span>Booked</span>
        <div className="legend selected"></div> <span>Selected</span>
      </div>
      <div className="selected-seats-top">
        {selectedSeats.map((seatId) => (
          <div key={seatId} className="selected-seat-square">
            {seats.find((seat) => seat.id === seatId).number}
          </div>
        ))}
      </div>
      <div className="bus-structure">
        <div className="driver-seat">Driver</div>
        <div className="seats">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${seat.status}`}
              onClick={() => handleSeatClick(seat.id)}
            >
              {seat.number}
            </div>
          ))}
        </div>
        <div className="bus-door">Door</div>
      </div>
      <div className="selected-seats-info">
        <h3>Selected Seats:</h3>
        {selectedSeats.length > 0 ? (
            <p>{selectedSeats.map(seatId => seats.find(seat => seat.id === seatId).number).join(', ')}</p>
        ) : (
          <p>No seats selected</p>
        )}
      </div>
      <button className="book-button" onClick={handleBookSeats}>Book Seat</button>
    </div>
    </>
  );
};

export default SelectSeat;
