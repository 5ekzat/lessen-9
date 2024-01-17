//async await


// const root=document.querySelector('#root')
// const all=document.getElementById('btn')
// const url='https://mebel-pro.onrender.com/api/products?populate=image'


// async function getItems(){

//     const res= await fetch(url)
//     const data= await res.json()
//     console.log(data.data);
//     renderItems(data.data)
    
// }
// getItems()

// function renderItems(arr){
//     root.innerHTML=''
//         for(const obj of arr){
//             root.innerHTML+=`
//             <h1>${obj.attributes.name}-${obj.attributes.price}</h1>
//             `
//         }
//     }

// 2 


// const btn=document.getElementById('btn')
// const inp=document.getElementById('inp')
// const url='https://restcountries.com/v3.1/name/'


// async function getFlag(){
//     const res= await fetch(url)
//     const data= await res.json()
//     console.log(data);
//     renderFlag(data)
// }
// getItems()

// btn.onclick=()=>{
//     function renderFlag(arr){
//         root.innerHTML=''
//             for(const obj of arr){
//                 input.value.innerHTML+=`
//                 <img ${obj.name.flags}>
//                 `
//             }
//         }
// }

// home work
const btn = document.getElementById('btn');
const randomBtn = document.getElementById('randomBtn');
const inp = document.getElementById('inp');
const root = document.getElementById('root');
const url = 'https://restcountries.com/v3.1/name/';
const allCountriesDataUrl = 'https://restcountries.com/v3.1/all';

let allCountriesData; 

btn.addEventListener('click', getFlag);

randomBtn.addEventListener('click', getRandomFlag);

async function init() {
    try {
        const response = await fetch(allCountriesDataUrl);
        allCountriesData = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getFlag() {
    const countryName = inp.value;
    try {
        const response = await fetch(`${url}${countryName}`);
        const data = await response.json();
        renderFlag(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function getRandomFlag() {
    if (allCountriesData) {
        const randomIndex = Math.floor(Math.random() * allCountriesData.length);
        const randomCountry = [allCountriesData[randomIndex]];
        renderFlag(randomCountry);
    }
}

function renderFlag(arr) {
    root.innerHTML = '';
    for (const obj of arr) {
        root.innerHTML += `
            <img src="${obj.flags.png}" alt="${obj.name.common} Флаг">
        `;
    }
}


document.addEventListener('DOMContentLoaded', init);

// const btn = document.getElementById('btn');
// const inp = document.getElementById('inp');
// const randomBtn = document.getElementById('randomBtn');
// const root = document.getElementById('root');

// const url = 'https://restcountries.com/v3.1/name/';

// async function getFlag() {
//     const countryName = inp.value;
//     const res = await fetch(`${url}${countryName}`);
//     const data = await res.json();
//     console.log(data);
//     renderFlag(data);
// }

// btn.onclick = () => {
//     getFlag();
// };

// randomBtn.onclick = () => {
//     getRandomFlag();
// };

// async function getRandomFlag() {
//     const res = await fetch(`${url}all`);
//     const data = await res.json();
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const randomCountry = [data[randomIndex]];
//     renderFlag(randomCountry);
// }

// function renderFlag(arr) {
//     root.innerHTML = '';
//     for (const obj of arr) {
//         root.innerHTML += `
//             <img src="${obj.flags.png}" alt="${obj.name.common} Флаг">
//         `;
//     }
// }

// document.addEventListener('DOMContentLoaded', getRandomFlag);