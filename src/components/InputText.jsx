import React from "react";

const InputText = ({ type = "text", placeholder, onChange, name, value }) => {
  return (
    <div className=" mb-3">
      <input
        type={type}
        name={name}
        value={value}
        className=" w-full border rounded-md p-3 focus:outline-none hover:border-blue-200 focus:border-blue-400 text-neutral-500"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
