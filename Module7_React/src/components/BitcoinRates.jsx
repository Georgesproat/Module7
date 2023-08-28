import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [error, setError] = useState(null);

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
        setBitcoinPrice(data.bitcoin[currency.toLowerCase()]); 
        setError(null);
      } catch (error) {
        setError("Error fetching Bitcoin price");
      }
    };

   fetchBitcoinPrice();

    // Cleanup function
    return () => {
      setBitcoinPrice(null);
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  )); 

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null && (
        <p>
          Bitcoin price in {currency}: {bitcoinPrice}
        </p>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default BitcoinRates;
