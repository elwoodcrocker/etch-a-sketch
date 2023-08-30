

const outputDiv = document.querySelector('.output-div');
let slider = document.getElementById('myRange');
let colorInput = document.getElementById("colorpicker").value;


document.onload = createDiv(slider.value)
outputDiv.addEventListener('mouseover',changeColor, false)
document.getElementById('colorpicker').onchange = function (){
    colorInput = this.value;
}
document.getElementById('clear').onclick = function (){
    createDiv(slider.value);
}
document.getElementById('myRange').oninput = function(){
    createDiv(this.value)
}    
    



function createDiv(input){

    if (input <= 100){
        document.querySelectorAll('.output-div > div').forEach(e => e.remove());
        let styles = `
        display:grid;
        grid-template-columns: repeat(${input},1fr);
        grid-template-rows: repeat(${input},1fr)`
        outputDiv.style = styles;

        for (let i = 0; i< (input * input); i ++ ){
            const newDiv = document.createElement('div')
            newDiv.classList.add('white-color')
            outputDiv.appendChild(newDiv)
        }
    }else if (input > 100){
        alert('lessThan100')
    }
}
   

function changeColor(){
    const pixel = document.querySelectorAll('.output-div > div').forEach(pixel => {
        pixel.addEventListener('mouseover',() => {
            pixel.style.background = `${colorInput}`;
        })
    })
}


