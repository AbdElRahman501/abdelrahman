

// for shapes

const shapes = document.getElementsByClassName("shape")
for (let i = 0; i < 7; i++) {
    let shipesList = document.getElementById("shapes").firstElementChild
    let shapes = document.getElementsByClassName("shape")
    let newShape = document.createElement("li")
    newShape.classList.add("shape")
    newShape.innerHTML = shapes[1].innerHTML
    shipesList.insertAdjacentElement("afterbegin", newShape)

}
let arrayTop = [];
let arrayRight = [];
const time = 15000

function moveShapes() {
    arrayTop = []
    arrayRight = []
    for (let i = 1; i <= 85; i++) {
        arrayTop.push(i);
        arrayRight.push(i);
    }
    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        let randomTop = getrandomnum(arrayTop, "top");
        let randomRight = getrandomnum(arrayRight, "right");
        let randomWidth = randomTop < 30 ? getRandomIntInclusive(70, 120) : getRandomIntInclusive(30, 50);
        let blur = 50 / randomWidth
        // console.log({ randomTop, randomRight, randomWidth })
        shape.setAttribute('style', `top: ${randomTop}vh;right: ${randomRight}vw`);
        let svg = shape.firstElementChild
        svg.setAttribute('style', `width: ${randomWidth}px; filter: blur(${blur}px) `)
    }
    function getrandomnum(array, type) {
        let num = Math.floor(Math.random() * array.length);
        let roll = array.splice(num - 1, 10);
        let yourNumber = roll.length % 2 === 0 ? roll[roll.length / 2] : roll[(roll.length - 1) / 2];
        // console.log(yourNumber, roll, array, type, roll.length % 2 === 0 ? roll.length / 2 : (roll.length - 1) / 2)
        return yourNumber;
    }
    setTimeout(shake,time - 2000)
}
function shake() {
    for (const shape of shapes) {
        shape.classList.add("shake")
        setTimeout(() => {
            shape.classList.remove("shake")
        }, 2000)
    }
}

moveShapes()
setInterval(moveShapes, time)





function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}