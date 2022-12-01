

// for shapes

const shapes = document.getElementsByClassName("shape")
console.log(shapes);
for (let i = 0; i < 2; i++) {
    let shipesList = document.getElementById("shapes").firstElementChild
    let shapes = document.getElementsByClassName("shape")
    let newShape = document.createElement("li") 
    newShape.classList.add("shape")
    newShape.innerHTML = shapes[1].innerHTML
    console.log(newShape);
    shipesList.insertAdjacentElement("afterbegin",newShape )
    
}
const cordinats = [{x:10 , y:10 ,w:3},{x:35 , y:70 ,w:13},{x:65 , y:5 ,w:15},{x:80 , y:45 ,w:5}]

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    let randomTop = cordinats[i].x
    let randomRight = cordinats[i].y
    let randomWidth = cordinats[i].w
    shape.setAttribute('style', `position: absolute; top: ${randomTop}vh;right: ${randomRight}vw`);
    let svg = shape.firstElementChild
    svg.setAttribute('style', `width: ${randomWidth}rem;`)   
}
