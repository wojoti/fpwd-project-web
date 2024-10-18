import React from "react";
import { Text } from "../../atoms/Text/Text";
import { Input } from "../../atoms/Input/Input";

interface ILabeledInput {
  name: string;
  label: string;
  placeholder: string;
  type?: React.HTMLProps<HTMLInputElement>["type"];
  testId?: string;

  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const LabeledInput = ({
  label,
  name,
  placeholder,
  type,
  testId,
  value,
  onChange,
}: ILabeledInput) => {
  return (
    <div className="flex flex-col items-center gap-1" data-testid={testId}>
      <Text type="label" testId={`${testId}-label`}>
        {label}
      </Text>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        testId={`${testId}-input`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
