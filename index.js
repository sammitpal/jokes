const api_url = "https://official-joke-api.appspot.com/random_joke";
const jokes = document.getElementById("jokes");
const punch = document.getElementById("punch");
async function getJokes(){
    const resp = await fetch(api_url);
    const respData = await resp.json();
    jokes.innerHTML = unescape(respData.setup);
    punch.innerHTML = unescape(respData.punchline);
    read(respData.setup+respData.punchline);
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
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}
