import React from "react";

interface IText {
  testId?: string;
  children: string;
  type?: "normal" | "label" | "success" | "error";
}

export const Text = ({ testId, type, children }: IText) => {
  switch (type) {
    case "label":
      return (
        <span className="text-base" data-testid={testId}>
          {children}
        </span>
      );

    case "normal":
    default:
      return (
        <span className="text-xl" data-testid={testId}>
          {children}
        </span>
      );
    case "success":
      return (
        <span className="text-xl text-green-400" data-testid={testId}>
          {children}
        </span>
      );
    case "error":
      return (
        <span className="text-xl text-red-400" data-testid={testId}>
          {children}
        </span>
      );
  }
};
