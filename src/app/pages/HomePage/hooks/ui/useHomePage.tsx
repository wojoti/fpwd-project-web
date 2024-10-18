import { useEffect, useState } from "react";
import { useGetExchangeRate } from "../services/useGetExchangeRate/useGetExchangeRate";
import { usePostExchangeTransaction } from "../services/usePostExchangeTransaction/usePostExchangeTransaction";

export const useHomePage = () => {
  const [additionalInfo, setAdditionalInfo] = useState("");
  const { exchangeRateData } = useGetExchangeRate();
  const {
    postExchangeTransactionMutation,
    postExchangeTransactionLoading,
    postExchangeTransactionError,
  } = usePostExchangeTransaction();
  const exchangeRate = exchangeRateData?.exchange_rate;

  const onSubmit = (amount: string) => {
    setAdditionalInfo("");
    postExchangeTransactionMutation(amount, {
      onSuccess: (data) =>
        setAdditionalInfo(
          `Converted ${amount} EUR to ${data?.amountTo} PLN. Rate: ${data?.rate} PLN`
        ),
    });
  };
  const isLoading = postExchangeTransactionLoading;
  const error = postExchangeTransactionError?.message;
  return { exchangeRate, onSubmit, isLoading, additionalInfo, error };
};
