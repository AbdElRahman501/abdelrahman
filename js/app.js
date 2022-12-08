

// for shapes

const shapes = document.getElementsByClassName("shape")
for (let i = 0; i < 8; i++) {
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
    setTimeout(shake, time - 2000)
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

//////////// for scroll 

const navList = document.querySelector('#navbar__list');

// all sections 
const sections = document.getElementsByTagName("section")

function activate(theSection) {
    // add active to the menu-link
    let theLink = document.querySelectorAll(`[section="${theSection.id}"]`)[0]
    // detrmin the Y offset of the section and want it to active when it apperd with 200 px 
    let sectionYOffset = theSection.getBoundingClientRect().y - 500;
    // to set it un active while it passes 
    let height = theSection.getBoundingClientRect().height;

    // if it has the class active 
    let isActive = theSection.classList.contains("active");

    if (sectionYOffset < 0 && sectionYOffset + height > 0) {
        // to not added it many times
        if (!isActive) {
            theSection.classList.add("active")
            //add active class to menu link
            theLink.classList.add("active")
            // scrollToSection(theSection)
            leavHomeSection(theSection.id)
        } else {
            return;
        }

    } else {
        theSection.classList.remove("active")
        //add active class to menu link
        theLink.classList.remove("active")
        theLink.setAttribute("style", `background-color:unset;`)
    }
}


function leavHomeSection(id) {
    if (id === "home") {
        document.getElementsByTagName("nav")[0].setAttribute("style", "bottom:10px;")
        // document.getElementById("shapes").setAttribute("style", "background-color: #10101c;")
        document.getElementById("shapes").setAttribute("style", `background:
        linear-gradient(179.75deg, #272640 1.54%, #11101C 78.16%, #07070D 97.46%);`)
        document.getElementById("shapes").classList.remove("out-home")
        document.getElementsByClassName("active")[0].setAttribute("style", `background-color:#1B3A4B;`)

    } else {
        document.getElementsByTagName("nav")[0].setAttribute("style", "bottom: calc(100% - 65px);")
        // document.getElementById("shapes").setAttribute("style", "background-color: #182333;")
        document.getElementById("shapes").setAttribute("style", `background:
        linear-gradient(180deg, #212F45 0%, #0B1018 100%);`)
        document.getElementById("shapes").classList.add("out-home")
        document.getElementsByClassName("active")[0].setAttribute("style", `background-color:#222138;`)
    }
}

let navLinks = document.getElementsByClassName("nav-link")

// make function that scroll to the section with id
function scrollToSection(theSection) {
    // get the Y Offset of that section
    let sectionYOffset = theSection.getBoundingClientRect().y;
    // sum of the section Y offset to window Y Offset will get back the position of the section
    let windowYOffset = window.pageYOffset;
    // add 50 px to make it a little more under the nav bar 
    let sectionLocation = sectionYOffset + windowYOffset - 100
    //let's scroll to the section Location smooth with scrollTo();
    window.scrollTo(({
        top: sectionLocation,
        behavior: 'smooth',

    }))
}
for (let navLink of navLinks) {
    navLink.addEventListener("click", function (event) {
        event.preventDefault()
        // it will send the ID of the section to the function
        let theSection = document.getElementById(navLink.getAttribute("href").slice(1));
        scrollToSection(theSection)
    })
}

//////////// skills section ////////////////

const skillsList = document.getElementById("skills")
const skillsItems = document.querySelectorAll(".skills-item")
let initialSkills = false



function isApeard(theSection) {
    let sectionYOffset = theSection.getBoundingClientRect().y - 700;
    // to set it un active while it passes 
    let height = theSection.getBoundingClientRect().height;

    if (sectionYOffset < 0 && sectionYOffset + height > 0 && !initialSkills) {
        initSkillSection()
        initialSkills = true
    }



}

function initSkillSection() {
    for (const skill of skillsItems) {
        let rate = Number(skill.lastElementChild.textContent.slice(0, -1)) / 100
        skill.lastElementChild.setAttribute("style", `height: calc(200px * ${rate} );`)
        let num = rate * 100;
        let value = 0;

        let theInterval = setInterval(() => {
            if (value < num) {
                value++
            } else {
                clearInterval(theInterval)
            }
            skill.lastElementChild.innerHTML = "<p>" + value + "</p>"
        }, 50);
    }
}

///// scroll eventListener


window.onscroll = function () { myFunction() };

function myFunction() {
    for (let i = 0; i < sections.length; i++) {
        // we need to call the function on scrolling 
        activate(sections[i])
    }
    isApeard(skillsList)

}


//// projects crown


const projects = document.getElementsByClassName("project");

const crown = document.getElementsByClassName("crown")[0];

crown.onscroll = function () { crownMove() }

function crownMove() {
    let crownData = crown.getBoundingClientRect();
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        let data = project.getBoundingClientRect()
        let projectLimet = ((crownData.width / 2) - (data.width / 2)) + (data.width / 2)
        let projectCo = ((data.x) - (crownData.x)) + (data.width / 2)
        let closer = (Math.abs(Math.abs(projectLimet - projectCo) - crownData.width / 2) / (crownData.width / 2)) + 0.2
        project.setAttribute("style", `scale:${closer} ; opacity: ${closer};`)
    }
}
crownMove()

const opjects = []
for (const project of projects) {
    let project2 = project.cloneNode(true)
    crown.appendChild(project2);
    opjects.push(project2)
}
console.log(opjects);
// Create a copy of the table and adds it to the scrollable element


const options = {
    root: crown,
    rootMargin: '0px',
    threshold: 0
}

const callback = (entries) => {
    if (!entries[0].isIntersecting) {
        // table1 is out of bounds, we can crown back to it
        crown.scrollLeft = 0;
    }
}

const observer = new IntersectionObserver(callback, options);
observer.observe(opjects[0]);