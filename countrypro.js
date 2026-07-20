const input = document.getElementById("countryInput");
const button = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const result = document.getElementById("result");

button.addEventListener("click", getCountry);

async function getCountry() {

    const country = input.value.trim();

    if (country === "") {
        return;
    }

    loading.textContent = "Loading...";
    error.textContent = "";
    result.innerHTML = "";

    try {

        const response = await fetch(
            "https://countriesnow.space/api/v0.1/countries/info?returns=flag,currency,capital,population"
        );

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        const data = await response.json();
        console.log(data.data[0]);

        const countryData = data.data.find(
            item => item.name.toLowerCase() === country.toLowerCase()
        );

        if (!countryData) {
            throw new Error("Country not found");
        }

        result.innerHTML = `
            <img src="${countryData.flag}" alt="Flag">
            <h2>${countryData.name}</h2>
            <p><strong>Capital:</strong> ${countryData.capital}</p>
            
            <p><strong>Currency:</strong> ${countryData.currency}</p>
        `;

    } catch (err) {

        error.textContent = err.message;

    } finally {

        loading.textContent = "";

    }
}