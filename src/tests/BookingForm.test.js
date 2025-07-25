import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders form inputs and submits correctly', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText(/Name/i);
  const dateInput = screen.getByLabelText(/Date/i);
  const timeSelect = screen.getByLabelText(/Time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const submitButton = screen.getByText(/Reserve/i);

  fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(dateInput, { target: { value: '2025-08-01' } });
  fireEvent.change(timeSelect, { target: { value: '18:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });

  fireEvent.click(submitButton);

  expect(screen.getByRole('status')).toHaveTextContent('Reservation confirmed!');
});
