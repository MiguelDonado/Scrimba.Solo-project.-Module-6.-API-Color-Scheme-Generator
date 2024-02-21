const seedColorEl = document.getElementById('seed-color')
const colorSchemeEl = document.getElementById('color-scheme')
const colorsContainerEl = document.getElementById('colors-container')
const hexColorsEl = document.getElementById('hex-colors')

document.addEventListener('submit', function(e){
    e.preventDefault()
    cleanPreviousColorScheme()
    const [ color, mode ] = getArgumentsColorAndMode()
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&format=json&count=5&w=1300`)
        .then(response => response.json())
        .then(data => {
            renderHexCodes(data.colors)
        })
    }
    )

function getArgumentsColorAndMode(){
    color = seedColorEl.value.replace("#","")
    mode = colorSchemeEl.value.toLowerCase()
    return [color,mode]
}

function renderHexCodes(colorsObject) {
    colorsObject.forEach(color => {
        hexColor = color.hex.value
        hexColorsEl.innerHTML+=`<h3>${hexColor}</h3>`
        let colorEl = document.createElement("div")
        colorEl.style.backgroundColor = hexColor
        colorsContainerEl.appendChild(colorEl)
    }
        )
}

function cleanPreviousColorScheme() {
    hexColorsEl.innerHTML = ``
    colorsContainerEl.innerHTML = ``    
}


