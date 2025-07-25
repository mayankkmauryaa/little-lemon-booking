import { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.date && formData.time && formData.guests) {
            setSubmitted(true);
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking form">
            <h3>Reserve Your Table</h3>

            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} required />

            <label htmlFor="date">Select Date</label>
            <input type="date" name="date" id="date" onChange={handleChange} required />

            <label htmlFor="time">Select Time</label>
            <select name="time" id="time" onChange={handleChange} required>
                <option value="">-- Choose Time --</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input type="number" name="guests" id="guests" min="1" max="10" onChange={handleChange} required />

            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" id="occasion" onChange={handleChange}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">Book Now</button>

            {submitted && <p className="success-message">🎉 Reservation Confirmed! We’ll see you on {formData.date} at {formData.time}.</p>
            }
        </form>
    );
}

export default BookingForm;
