import React from "react";
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return (
    <input
      placeholder="input"
      type="text"
      value={props.value}
      onChange={props.handleChange}
    />
  );
};
