import { useState } from "react";

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    type: "Appointment",
  });

  const bookedSlots = [
    {
      doctor: "Dr John",
      date: "2026-05-20",
      time: "10:00",
    },
  ];

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const unavailable = bookedSlots.find(
      (slot) =>
        slot.doctor === appointment.doctor &&
        slot.date === appointment.date &&
        slot.time === appointment.time
    );

    if (unavailable) {
      alert("Doctor session already booked");
      return;
    }

    alert("Appointment booked successfully");
  };

  return (
    <div className="form-container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleBooking}>
        <input
          type="text"
          name="patient"
          placeholder="Patient Name"
          value={appointment.patient}
          onChange={handleChange}
        />

        <select
          name="doctor"
          value={appointment.doctor}
          onChange={handleChange}
        >
          <option value="">Select Doctor</option>
          <option value="Dr John">Dr John</option>
          <option value="Dr Sarah">Dr Sarah</option>
        </select>

        <input
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
        />

        <select
          name="type"
          value={appointment.type}
          onChange={handleChange}
        >
          <option>Appointment</option>
          <option>Consultation</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default AppointmentForm;