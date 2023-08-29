import { useEffect, useReducer } from "react";

function useBitcoinPrice(currency) {
  const initialState = {
    bitcoinPrice: null,
    error: null
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          ...state,
          bitcoinPrice: action.payload.bitcoin[currency.toLowerCase()],
          error: null
        };
      case "FETCH_ERROR":
        return {
          ...state,
          bitcoinPrice: null,
          error: "Error fetching Bitcoin price"
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Bitcoin price");
        }

        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchBitcoinPrice();
  }, [currency]);

  return state;
}

export default useBitcoinPrice;
