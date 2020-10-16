const api_url = "http://api.icndb.com/jokes/random";
const jokes = document.getElementById("jokes");
async function getJokes(){
    const resp = await fetch(api_url);
    const respData = await resp.json();
    jokes.innerHTML = unescape(respData.value.joke);
    read(respData.value.joke);
}
function getnextJoke(){
    getJokes();
}
function read(readJokes) {
    const msg = readJokes;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 4;
    
    window.speechSynthesis.speak(speech);
}
