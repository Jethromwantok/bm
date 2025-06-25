let countryInput = document.getElementById("country-input");
let searchbtn = document.getElementById("searchbtn");
let result = document.getElementById("result");
let errorMessage = document.getElementById("error-message");



const xhr = new XMLHttpRequest();
xhr.open("GET", `https://restcountries.com/v3.1/name/${countryInput}`, true);

// searchbtn.addEventListener("click", () => {
//     let country = countryInput.value.trim();
//     if (country === "") {
//         errorMessage.textContent = "Please enter a country name.";
//         result.textContent = "";
//         return;
//     }else{
//         errorMessage.textContent = "";

//     }
// });



searchbtn.addEventListener('click', () => {
    setInterval(() => {
        

        let country = countryInput.value.trim();
        if (country === "") {
            errorMessage.textContent = "Please enter a country name.";
            result.textContent = "";
            return;
        } else {
            errorMessage.textContent = "";
        }
    
        const xhr = new XMLHttpRequest();
        
        xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`, true);
    
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result.style.display = "block";
                let countries = JSON.parse(xhr.responseText);
                console.log(countries);
                result.innerHTML = `
                    <h2>Country Details</h2>
                    <p><strong>Name:</strong> ${countries[0].name.common}</p>
                    <p><strong>Capital:</strong> ${
                        countries[0].capital ? countries[0].capital[0] : "N/A"
                    }</p>
                    <p><strong>Region:</strong> ${countries[0].region}</p>
                    <p><strong>Subregion:</strong> ${countries[0].subregion}</p>
                    <p><strong>Population:</strong> ${countries[0].population.toLocaleString()}</p>
                    <p><strong>Languages:</strong> ${Object.values(
                        countries[0].languages
                    ).join(", ")}</p>
                    <p><strong>Currencies:</strong> ${Object.values(countries[0].currencies)
                        .map((currency) => `${currency.name} (${currency.symbol})`)
                        .join(", ")}</p>
                    <p><strong>Flag:</strong> ${
                        countries[0].flags && countries[0].flags.png
                            ? `<img src="${countries[0].flags.png}" alt="Flag" width="50">`
                            : "N/A"
                    } </p>
                `;
            } else {
                result.style.display = "block";
                result.innerHTML = "<p>Country not found or error occurred.</p>";
            }
        };
    
        xhr.onerror = () => {
            result.style.display = "block";
            result.innerHTML = "<p>Network error occurred.</p>";
        };
    
        xhr.send();
    });
    
            
    

    },1000);    
