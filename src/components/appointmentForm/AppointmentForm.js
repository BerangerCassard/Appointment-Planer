import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  name,
  setName
}) => {


  return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
          <label htmlFor="date">Date</label>
          <input
              id="date"
              type="time"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              //min={getTodayString()}
              required
          />
          <label htmlFor="time">Time</label>
          <input
              id="time"
              type="date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
          />
          <ContactPicker
            contacts={contacts}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            name="contact"
          />
          <button type="submit">Add Appointment</button>
        </form>
      </>
  );
};
