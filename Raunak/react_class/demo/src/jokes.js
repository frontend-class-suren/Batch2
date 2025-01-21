const btn = document.getElementById('btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');
const fetchingJokes = async()=>{
    const api = await fetch ('https://official-joke-api.appspot.com/random_joke');
    const data = await api.json();
 setup.innerHTML = data.setup;   
 punchline.innerHTML = data.punchline;   
}
fetchingJokes();
btn.addEventListener('click',fetchingJokes);