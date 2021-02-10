import React from "react";

const PersonForm = ({ name, phone, onChangeName, onChangePhone, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={name} onChange={onChangeName} />
    </div>
    <div>
      phone: <input value={phone} onChange={onChangePhone} />
    </div>
    <div>
      <button>add</button>
    </div>
  </form>
);
export default PersonForm;
