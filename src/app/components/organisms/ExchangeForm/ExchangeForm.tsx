"use client";

import React, { useState } from "react";
import { LabeledInput } from "../../molecules/LabeledInput/LabeledInput";
import { Button } from "../../atoms/Button/Button";

interface IExchangeForm {
  isLoading: boolean;
  onSubmit: (amount: string) => void;
}

export const ExchangeForm = ({ isLoading, onSubmit }: IExchangeForm) => {
  const [amount, setAmount] = useState("");
  const handleAmount: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => {
    setAmount(event.target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event
  ) => {
    event.preventDefault();
    onSubmit(amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2">
        <LabeledInput
          name={"amount"}
          label={"Amount to exchange"}
          placeholder={"EUR"}
          value={amount}
          onChange={handleAmount}
        />
        <Button type="submit" testId={"testid"} disabled={isLoading}>
          Submit
        </Button>
      </div>
    </form>
  );
};
