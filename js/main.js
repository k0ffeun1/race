const road = document.getElementById('road')
const line = document.getElementById('line')
const carRed = document.getElementById('car__red')
const carWhite = document.getElementById('car__white')

let arrow = document.onkeydown = function () {
    if (event.keyCode == 39) {
        carRed.style.transform = 'translateX(380px) rotate(-90deg)'
    } else if (event.keyCode == 37) {
        carRed.style.transform = 'translateX(0px) rotate(-90deg)'
    } 
}

const carWhiteRandom = null
setInterval(function carWhiteRandomFunc() {
    const carWhiteRandom = Math.floor(Math.random() * 2)
    if (carWhiteRandom === 1) {
        carWhite.style.right = '55%'
    } else if (carWhiteRandom === 0) {
        carWhite.style.right = '5%'
    }
    return carWhiteRandom
}, 1000);


carWhite.animate([
    { transform: 'translateY(-400px) rotate(-90deg)' },
    { transform: 'translateY(1000px) rotate(-90deg)' },
], {
    duration: 1000,
    iterations: Infinity
})
if (carWhite.animate([{ transform: 'translateY(1000px) rotate(-90deg)' }])) {
    carWhiteRandomFunc()
}

