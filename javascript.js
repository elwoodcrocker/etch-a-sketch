

const outputDiv = document.querySelector('.output-div');
document.onload = createDiv(16)
let slider = document.getElementById('myRange');


slider.oninput = function() {
    createDiv(slider.value)
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
            outputDiv.appendChild(newDiv)

        }
    
    }else if (input > 100){
        alert('lessThan100')
    }
    return
}
   


