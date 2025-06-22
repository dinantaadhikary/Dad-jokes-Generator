const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");





const apiURL = "https://official-joke-api.appspot.com/random_joke";

async function getJoke(){
    try {
        jokeE1.innerText = "wait bro Updating....";
   btnE1.disabled = true;
   btnE1.innerText = "loading...";
   const response = await fetch(apiURL);
   const data = await response.json();
   btnE1.disabled = false;
   btnE1.innerText = "Tell me a joke";
   jokeE1.innerText = data.setup + " " + data.punchline;
        
    } catch (error) {
        jokeE1.innerText = "An error happend, try again later";
        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";
        console.log(error);
    }
  
}
 
btnE1.addEventListener("click",getJoke);