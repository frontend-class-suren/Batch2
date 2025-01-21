const flagImage = document.getElementById('flags');
const countryName = document.getElementById('name')
const capitalName = document.getElementById('capital');
const Area = document.getElementById('area');
const Population = document.getElementById('population')
const btn = document.getElementById('btn');

const nepalFlags = async(ChangeName = 'Nepal') =>{
   
    const api = await fetch (`https://restcountries.com/v3.1/name/${ChangeName}?fullText=true`);
    const [data] = await api.json();
    flagImage.src = data.flags.png;
    countryName.innerHTML = data.name.common;
    capitalName.innerHTML = data.capital;
    Area.innerHTML = data.area;
    Population.innerHTML = data.population;
    // console.log(data.name);
}   

btn.addEventListener('click', ()=>{
    const ChangeName = prompt('Enter Country Name');
    // console.log(ChangeName);
    if(ChangeName){
        nepalFlags(ChangeName);
    }

});

nepalFlags();