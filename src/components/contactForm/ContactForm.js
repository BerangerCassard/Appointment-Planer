import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
              id="name"
              type="text"
              value={name}
              onChange={handleChangeName}
              required
          />
          <label htmlFor="phone">Phone</label>
          <input
              id="phone"
              type="tel"
              value={phone}
              onChange={handleChangePhone}
              pattern="(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}"
              required
          />
          <label htmlFor="email">Email</label>
          <input
              id="mail"
              type="text"
              value={email}
              onChange={handleChangeEmail}/>
          <button type="submit">Add Contact</button>
        </form>
      </>
  );
};

