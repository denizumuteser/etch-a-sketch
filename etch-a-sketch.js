let is_rainbow = false;
let clicking = false;

function createGrid(size)
{
    let container = document.querySelector(".container")
    
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'cell')
        div.style.width = String(640/size)+"px";
        div.style.height = String(640/size)+"px";

        div.addEventListener('mouseover', function(event) {
            if (clicking) {
                event.target.style.backgroundColor = getColor();
            }
            
        })
        container.appendChild(div)    
    }
}

function clearGrid()
{
    let cells = document.querySelectorAll(".cell")
    for (let i = 0; i < cells.length; i++) {
        const element = cells[i];
        element.style.backgroundColor = "white";
    }
    ;
}

function deleteGrid()
{
    let container = document.querySelector(".container")
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

function getColor()
{
    if (is_rainbow) {
        return randomColor()
    }
    else
    {
        return "black"
    }
}

function randomColor()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//click to toggle drawing
let container = document.querySelector(".container")
container.addEventListener('click', () => {
    if (clicking) {
        clicking=false
    }    
    else
    {
        clicking=true
    }
})

//buttons
const clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', () => {
    clearGrid()
});

const smallBtn = document.querySelector('#small')
smallBtn.addEventListener('click', () => {
    deleteGrid()
    createGrid(64)
});
const medBtn = document.querySelector('#medium')
medBtn.addEventListener('click', () => {
    deleteGrid()
    createGrid(16)
});
const bigBtn = document.querySelector('#large')
bigBtn.addEventListener('click', () => {
    deleteGrid()
    createGrid(8)
});

const blackBtn = document.querySelector('#black')
blackBtn.addEventListener('click', () => {
    is_rainbow = false;
});

const rainbowBtn = document.querySelector('#rainbow')
rainbowBtn.addEventListener('click', () => {
    is_rainbow = true;
});

//init grid
createGrid(16)