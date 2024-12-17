import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointment,contacts}) => {

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
        <section>
            <h2>Add Appointment</h2>
            <AppointmentForm
                name={name}
                setName={setName}
                contact={contact}
                setContact={setContact}
                time={time}
                setTime={setTime}
                handleSubmit={handleSubmit}
                date={date}
                setDate={setDate}
                contacts={contacts}
            />
        </section>
        <hr/>
        <section>
            <h2>Appointments</h2>
            <TileList appointments={appointments} contacts={contacts} />
        </section>
    </div>
  );
};
