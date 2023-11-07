function loadTokenDetails(tokenName) {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${tokenName}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Extract token details
      const tokenDetails = {
        name: data.name,
        symbol: data.symbol,
        marketCap: data.market_data.market_cap.usd,
        currentPrice: data.market_data.current_price.usd,
        tradingVolume: data.market_data.total_volume.usd,
        logoUrl: data.image.small,
      };

      // Render the token details
      renderTokenDetails(tokenDetails);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// function to render
function renderTokenDetails(tokenDetails) {
  const widgetContainer = document.getElementById("coinGeckoWidget");

  // HTML rendering
  widgetContainer.innerHTML = `
    
    <div class="top">
    <div class="title">
    <img src="${tokenDetails.logoUrl}" alt="${tokenDetails.name}">
   
    <div class="info">
    <h4>${tokenDetails.name}  (${tokenDetails.symbol})</h4>
  </div>
          </div>
    <div class="container">
    <div class="box">
          <p> <h3>Market Cap:</h3> $${tokenDetails.marketCap.toLocaleString()} USD</p>
          </div>
          <div class="box">
           <p> <h3>Current Price:</h3> $${tokenDetails.currentPrice} USD</p>
           </div>
           <div class="box">
           <p><h3>24-hour Trading Volume:</h3> $${tokenDetails.tradingVolume.toLocaleString()} USD</p>
          </div>
        </div>
`;
}
