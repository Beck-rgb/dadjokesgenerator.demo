// btnEl is a variable used to target btn ID @ index.html. We are targetting the whole 'document'. 
//We target an HTML ID using getElementById() method and passing ID as a parameter.
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");



// we are storing our API Key in 'apiKey' variable.
const apiKey="FZOSGMBgnNrpu4xoEFsg3w==fVEkVE1OAVTaR6xc";

// Link to the API request URL.
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"



// We are using Dad Jokes API from api-ninjas.com website. 
// then, we are accessing that API using GET method.
// The reason we are using GET method is: we are requesting data from the API.
// How to use the API is documented in the api-ninjas.com website. Take a look there.
const options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
}



// We are using Asyncrhronized(async) function because an error occurred becaues of time delay.
// That's why we are using 'await' before fetch() and response.json() function. 
async function getJoke(){

    // Try-catch statement used for error handling. 
    // For e.g. when there is no internet, we return the message: "An error occurred, try again later"
    try {
        //  Create a loading element to cover the delay in getting the data.
        // 'innerText' is the data displayed
        jokeEl.innerText = "Updating...";
        btnEl,disabled = true;
        btnEl.innerText = "Loading...";
    

        
        // fetch() is a JS function that fetches data from APIs. It is taking two parameters here in this program.
        // Then, we are storing that data in 'response' variable.
        // After that, we convert that into JSON using json() function. 
        const response = await fetch(apiURL, options)
        const data = await response.json()
    
        
        
        // After the data is loaded, we need to exit from the loading element
        btnEl,disabled = false;
        btnEl.innerText = "tell me a joke...";
        
        
        
        // data[0] removes the [] braces and 'joke' is the item passed by the API.
        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An error occurred, try again later";

        // enable the button
        btnEl.disabled = false; 
        btnEl.innerText = "tell me a joke...";

        console.log(error);
    }
}



// call getJoke() function when the button is clicked using the Event listener.
// we add event listener using the addEventListener() function. 
// It is taking two parameters-
//      (i)  "click"- it is the event that triggers the action, 
//      (ii) 'getJoke' is the action that occurs after the event. 
btnEl.addEventListener("click", getJoke);