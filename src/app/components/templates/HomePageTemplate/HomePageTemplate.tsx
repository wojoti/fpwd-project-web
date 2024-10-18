import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { Text } from "../../atoms/Text/Text";
import { ExchangeForm } from "../../organisms/ExchangeForm/ExchangeForm";

interface IHomePageTemplate {
  exchangeRate: string;
  onSubmit: (amount: string) => void;
  isLoading: boolean;
  additionalInfo: string;
  error: string | null;
}

export const HomePageTemplate = ({
  exchangeRate,
  onSubmit,
  isLoading,
  additionalInfo,
  error,
}: IHomePageTemplate) => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-8">
      <Heading>Exchange Center</Heading>
      <Text>{`Current exchange rate: ${exchangeRate} PLN`}</Text>
      <ExchangeForm isLoading={isLoading} onSubmit={onSubmit} />
      {additionalInfo && <Text type="success">{additionalInfo}</Text>}
      {error && <Text type="error">{error}</Text>}
    </div>
  );
};
