import React from "react";

export const ContactPicker = ({
    contacts,
    value,
    name,
    onChange
}) => {
  return (
    <>
      <select
          onChange={onChange}
          value={value}
          name={name}
      >
      </select>
      <option
        value=""
      >
        No Contact Selected
      </option>
      <option>
        {contacts.map((contact, index) => (
            <option key={index} value={contact.name}>{contact.name}</option>
        ))}
      </option>
    </>
  );
};
