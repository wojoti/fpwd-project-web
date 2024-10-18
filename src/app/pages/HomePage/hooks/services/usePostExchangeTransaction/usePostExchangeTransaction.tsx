import { postExchangeTransaction } from "@/app/services/ExchangeService/ExchangeService";
import { useMutation } from "@tanstack/react-query";

export const usePostExchangeTransaction = () => {
  const {
    mutate: postExchangeTransactionMutation,
    error: postExchangeTransactionError,
    isPending: postExchangeTransactionLoading,
  } = useMutation({
    mutationFn: postExchangeTransaction,
  });

  return {
    postExchangeTransactionMutation,
    postExchangeTransactionError,
    postExchangeTransactionLoading,
  };
};
