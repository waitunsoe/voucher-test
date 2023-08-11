import React from "react";

const InputTextArea = ({ placeholder, rows = 5, onChange, value }) => {
  return (
    <div className=" mb-3">
      <textarea
        placeholder={placeholder}
        rows={rows}
        className=" w-full resize-none border rounded-md p-3 focus:outline-none hover:border-blue-200 focus:border-blue-400 text-neutral-400"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputTextArea;
