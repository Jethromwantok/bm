function fetchCryptoPrice() {
  setInterval(() => {
    
    
    let cryptoInput = document
    .getElementById("cryptoInput")
    .value.trim()
    .toLowerCase();
    let resultDiv = document.getElementById("result");
    
    if (!cryptoInput) {
      resultDiv.innerHTML =
      '<p class="error">Please enter a cryptocurrency name or symbol.</p>';
      return;
    }
    
    resultDiv.innerHTML = "<p>Loading...</p>";
    
    let xhr = new XMLHttpRequest();
    xhr.open(
    "GET",
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoInput}`,
    true
  );
}, 1000);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300 && xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);

      if (data.length === 0) {
        resultDiv.innerHTML =
          '<p class="error">Cryptocurrency not found. Try another name or symbol (e.g., Bitcoin, BTC).</p>';
        return;
      }

      let crypto = data[0];
      let price = crypto.current_price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      let marketCap = crypto.market_cap.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      let priceChange = crypto.price_change_percentage_24h.toFixed(2);
      let priceChangeClass = priceChange >= 0 ? "positive" : "negative";

      resultDiv.innerHTML = `
                        <p><strong>${
                          crypto.name
                        } (${crypto.symbol.toUpperCase()})</strong></p>
                        <p>Price: ${price}</p>
                        <p>Market Cap: ${marketCap}</p>
                        <p>24h Change: <span class="${priceChangeClass}">${priceChange}%</span></p>
                    `;
                    console.log("Data fetched successfully:", data);
                    
    } else {
      resultDiv.innerHTML =
        '<p class="error">Error fetching data. Please try again later.</p>';
      console.error("Request failed with status:", xhr.status);
    }
  };

  xhr.onerror = function () {
    resultDiv.innerHTML =
      '<p class="error">Error fetching data. Please try again later.</p>';
    console.error("Network error");
  };

  xhr.send();
}

// Allow pressing Enter to trigger search
document
  .getElementById("cryptoInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      fetchCryptoPrice();
    }
  });
