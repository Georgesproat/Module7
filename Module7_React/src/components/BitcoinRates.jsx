import { useState, useEffect } from "react";
import useBitcoinPrice from "../hooks/useBitcoinPrice";
import { useMoodContext } from "../context/MoodContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const { currentMood, toggleMood } = useMoodContext();
  const [currency, setCurrency] = useState(currencies[0]);

  const { bitcoinPrice, error } = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <div className="currency-section">
        <label>
          Choose currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {options}
          </select>
        </label>
      </div>

      <div className="bitcoin-price-section">
        {bitcoinPrice !== null && (
          <p>
            Bitcoin price in {currency}: {bitcoinPrice}
          </p>
        )}
      </div>

      <div className="emoji-section">
        <p>Current Mood: {currentMood}</p>
        <button onClick={() => toggleMood(currentMood)}>Change Mood</button>
      </div>
    </div>
  );
}

export default BitcoinRates;
