import BookingForm from '../components/BookingForm';
import './BookingPage.css';

function BookingPage() {
  return (
    <div className="booking-page">
      <img src="../assests/photo.png" alt="Little Lemon Logo" className="booking-logo" />
      <BookingForm />
    </div>
  );
}

export default BookingPage;
