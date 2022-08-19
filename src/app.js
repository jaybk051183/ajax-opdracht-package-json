import axios from "axios";

async function fetchCountries(){
    try{
        const result = await axios.get(encodeURI("https://restcountries.com/v2/all"));
        console.log(result.data);

    fetchCountryData(result.data)
    }
    catch(e) {
        console.error(e);
    }

}

fetchCountries();

function fetchCountryData(countryList) {
    const countryData = document.getElementById("country");

    countryData.innerHTML = countryList.map((countries) => {
           return `
           <li>
               <h3>${countries.name}</h3>
               <img src="${countries.flag}" alt="plaatjevlag"/>
               <p>Has a population of:${countries.population}</p>
           </li>
           `
    })
}






