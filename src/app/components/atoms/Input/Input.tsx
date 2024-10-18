import React from "react";

interface IInput {
  placeholder: string;
  testId?: string;
  type?: React.HTMLProps<HTMLInputElement>["type"];
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({
  placeholder,
  testId,
  type,
  name,
  value,
  onChange,
}: IInput) => {
  return (
    <input
      className="border rounded-md px-2 py-1"
      placeholder={placeholder}
      data-testid={testId}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
