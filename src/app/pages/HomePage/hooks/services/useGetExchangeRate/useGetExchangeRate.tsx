import { getExchangeRate } from "@/app/services/ExchangeService/ExchangeService";
import { useQuery } from "@tanstack/react-query";

export const useGetExchangeRate = () => {
  const {
    data: exchangeRateData,
    error: exchangeRateError,
    refetch: refetchExchangeRate,
  } = useQuery({
    queryKey: ["exchangeRate"],
    queryFn: getExchangeRate,
    initialData: { exchange_rate: 0 },
    enabled: true,
  });
  return {
    exchangeRateData,
    exchangeRateError,
    refetchExchangeRate,
  };
};
