const seedColorEl = document.getElementById('seed-color')
const colorSchemeEl = document.getElementById('color-scheme')
const colorsContainerEl = document.getElementById('colors-container')
const hexColorsEl = document.getElementById('hex-colors')

document.addEventListener('submit', function(e){
    e.preventDefault()
    cleanPreviousColorScheme()
    const [ color, mode ] = getArgumentsColorAndMode()
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&format=json&count=5`)
        .then(response => response.json())
        .then(data => {
            renderHexCodes(data.colors)
        })
    }
)
    
function cleanPreviousColorScheme() {
    hexColorsEl.innerHTML = ``
    colorsContainerEl.innerHTML = ``    
}

function getArgumentsColorAndMode(){
    color = seedColorEl.value.replace("#","")
    mode = colorSchemeEl.value.toLowerCase()
    return [color,mode]
}
    
function renderHexCodes(colorsObject) {
    colorsObject.forEach(color => {
        getHexColorAndPopulateBgText(color)
    }
)}

function getHexColorAndPopulateBgText(colorObject) {
    hexColor = colorObject.hex.value
    hexColorsEl.innerHTML+=`<h3>${hexColor}</h3>`
    createContainerBackground(hexColor)
}

function createContainerBackground(hexColor) {
    let colorEl = document.createElement("div")
    colorEl.style.backgroundColor = hexColor
    colorsContainerEl.appendChild(colorEl)
}

function firstInterface() {
    fetch(`https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome&format=json&count=5`)
        .then(response => response.json())
        .then(data => {
            renderHexCodes(data.colors)
    })
}
firstInterface()




