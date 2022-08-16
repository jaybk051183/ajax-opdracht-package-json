import axios from "axios";

async function fetchCountries(){
    try{
        const result = await axios.get(encodeURI("https://restcountries.com/v2/all"));
        for (let i = 0; i < 250; i++) {

        }
        console.log(result.data);

    }
    catch(e) {
        console.error(e)
    }

}

fetchCountries()






