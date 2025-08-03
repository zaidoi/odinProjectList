const inputData = document.querySelector('input')
const mainDiv = document.querySelector('.main')
const card = document.querySelector('.card')
const btn = document.querySelector('button')
const local = "lod"

async function callWeather(placename){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placename}&appid=8dd74652b2ae35ce80e15c9a6376df73&units=metric`)

        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status} ${response.statusText}`)
        }
        const convert = await response.json()
        return convert
    
    } catch (error) {
        return error
    }
}



async function callGif(name){
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2XUPtSo83JDmmscLNSJvM0wMLIuaezGr&s=${name}`, {mode: 'cors'})

        if (!response.ok) {
            throw new Error(`GIF API error: ${response.status} ${response.statusText}`)
        }

        const convert = await response.json()
        return convert.data.images.original.url
        
    }catch(error){
        return error('No such gif')
    }
}



function makeCard(weather){
let createDiv = document.createElement('div')
let h1 = document.createElement('h1')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')
let p6 = document.createElement('p')

createDiv.classList.add('card')
mainDiv.appendChild(createDiv)

h1.innerHTML = `Weather in ${inputData.value}`
p1.innerHTML = `<span>Temperature:</span> ${weather.main.temp}`
p2.innerHTML = `<span>Weather condition:</span> ${weather.weather[0].main}`
p3.innerHTML = `<span>Likely Temperature:</span> ${weather.main.feels_like}`
p4.innerHTML = `<span>Humidity:</span> ${weather.main.humidity}`
p5.innerHTML = `<span>Windspeed:</span> ${weather.wind.speed}`
p6.innerHTML = `<span>Visibility:</span> ${weather.visibility}`

createDiv.appendChild(h1)
createDiv.appendChild(p1)
createDiv.appendChild(p2)
createDiv.appendChild(p3)
createDiv.appendChild(p4)
createDiv.appendChild(p5)
createDiv.appendChild(p6)

}


function makeGif(imgUrl){
    let createDiv = document.createElement('div')
    createDiv.classList.add('gif')
    mainDiv.appendChild(createDiv)
    let createImg = document.createElement('img')
    createImg.src = imgUrl
    createDiv.appendChild(createImg)
}



btn.addEventListener("click",async (e)=>{
    e.preventDefault()
    mainDiv.innerHTML = ""
    const placeName = inputData.value
  
    if(placeName == ''){
        alert('No Masti')
        inputData.value = ""
    }
try{
let weatherCall =  await callWeather(placeName)
let gifCall = await callGif(weatherCall.weather[0].main)

makeCard(weatherCall)
makeGif(gifCall)
} catch(err){
    alert(err)
}
inputData.value = ""

})