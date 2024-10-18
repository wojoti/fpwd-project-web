import axios from "axios";

export const getExchangeRate = async () =>
  axios.get(`http://localhost:4000/exchange/eur/pln`).then((res) => res.data);

export const postExchangeTransaction = async (amount: string) =>
  axios
    .post(`http://localhost:4000/exchange/exchange`, {
      from: "eur",
      to: "pln",
      amount: amount,
    })
    .then((res) => res.data);
