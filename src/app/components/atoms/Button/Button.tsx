import React from "react";

interface IButton {
  type?: "button" | "submit";
  testId: string;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
  testId,
  type = "submit",
  children,
  disabled,
  onClick,
}: IButton) => {
  return (
    <button
      className={`border-0 rounded-md px-8 py-1 ${
        disabled ? " bg-green-200 cursor-not-allowed" : "bg-green-400"
      }`}
      data-testid={testId}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
