import React from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  msg: string;
  txtColor: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, name, msg, txtColor}) => {
  
  return (
    <div className="py-3 relative">
      <label htmlFor={label} className="text-lg">
        {label}:
      </label>
      <br />
      <input
        type={type}
        id={label}
        onChange={onChange}
        value={value}
        className="text-black"
        name={name}
      />
    <span className= {`${txtColor} text-xs absolute left-0 bottom-[-9px]`}>
      {msg}
    </span>
    </div>
  );
};

export default Input;