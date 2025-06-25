let cryptoData = [];
        let sortKey = 'market_cap';
        let sortDirection = 'desc';

        function fetchCryptoPrice() {
            const cryptoInput = document.getElementById('cryptoInput').value.trim().toLowerCase();
            const resultDiv = document.getElementById('result');

            if (!cryptoInput) {
                resultDiv.innerHTML = '<p class="error">Please enter a cryptocurrency name or symbol.</p>';
                return;
            }

            resultDiv.innerHTML = '<p>Loading...</p>';

            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoInput}`, true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const data = JSON.parse(xhr.responseText);

                        if (data.length === 0) {
                            resultDiv.innerHTML = '<p class="error">Cryptocurrency not found. Try another name or symbol (e.g., Bitcoin, BTC).</p>';
                            return;
                        }

                        const crypto = data[0];
                        const price = crypto.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                        const marketCap = crypto.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                        const priceChange = crypto.price_change_percentage_24h.toFixed(2);
                        const priceChangeClass = priceChange >= 0 ? 'positive' : 'negative';

                        resultDiv.innerHTML = `
                            <p><strong>${crypto.name} (${crypto.symbol.toUpperCase()})</strong></p>
                            <p>Price: ${price}</p>
                            <p>Market Cap: ${marketCap}</p>
                            <p>24h Change: <span class="${priceChangeClass}">${priceChange}%</span></p>
                        `;
                    } else {
                        resultDiv.innerHTML = '<p class="error">Error fetching data. Please try again later.</p>';
                        console.error('Request failed with status:', xhr.status);
                    }
                }
            };

            xhr.onerror = function() {
                resultDiv.innerHTML = '<p class="error">Error fetching data. Please try again later.</p>';
                console.error('Network error');
            };

            xhr.send();
        }

        function fetchTopCryptos() {
            const tableBody = document.getElementById('cryptoTableBody');
            tableBody.innerHTML = '<tr><td colspan="5">Loading...</td></tr>';

            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1', true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        cryptoData = JSON.parse(xhr.responseText);
                        renderTable();
                    } else {
                        tableBody.innerHTML = '<tr><td colspan="5" class="error">Error fetching top cryptocurrencies. Please try again later.</td></tr>';
                        console.error('Request failed with status:', xhr.status);
                    }
                }
            };

            xhr.onerror = function() {
                tableBody.innerHTML = '<tr><td colspan="5" class="error">Error fetching top cryptocurrencies. Please try again later.</td></tr>';
                console.error('Network error');
            };

            xhr.send();
        }

        function renderTable() {
            const tableBody = document.getElementById('cryptoTableBody');
            tableBody.innerHTML = '';

            // Sort data
            cryptoData.sort((a, b) => {
                let valA = a[sortKey];
                let valB = b[sortKey];

                if (sortKey === 'name' || sortKey === 'symbol') {
                    valA = valA.toLowerCase();
                    valB = valB.toLowerCase();
                }

                if (sortDirection === 'asc') {
                    return valA > valB ? 1 : -1;
                } else {
                    return valA < valB ? 1 : -1;
                }
            });

            // Render rows
            cryptoData.forEach(crypto => {
                const price = parseFloat(crypto.current_price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                const marketCap = parseFloat(crypto.market_cap).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                const priceChange = parseFloat(crypto.price_change_percentage_24h).toFixed(2);
                const priceChangeClass = priceChange >= 0 ? 'positive' : 'negative';

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${crypto.name}</td>
                    <td>${crypto.symbol.toUpperCase()}</td>
                    <td>${price}</td>
                    <td>${marketCap}</td>
                    <td class="${priceChangeClass}">${priceChange}%</td>
                `;
                tableBody.appendChild(row);
            });

            // Update header indicators
            document.querySelectorAll('th').forEach(th => {
                th.classList.remove('asc', 'desc');
                if (th.dataset.key === sortKey) {
                    th.classList.add(sortDirection);
                }
            });
        }

        function sortTable(key) {
            if (sortKey === key) {
                sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                sortKey = key;
                sortDirection = 'asc';
            }
            renderTable();
        }

        // Add click event listeners to table headers
        document.querySelectorAll('th').forEach(th => {
            th.addEventListener('click', () => sortTable(th.dataset.key));
        });

        // Allow pressing Enter to trigger search
        document.getElementById('cryptoInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                fetchCryptoPrice();
            }
        });

        // Fetch top cryptocurrencies on page load
        window.onload = fetchTopCryptos;