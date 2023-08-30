# etch-a-sketch
TOP Etch-a-Sketch Project. 


Plan

    User Interface: 

        Etch-a-Sketch will be played in the browser.
        will have a div with 256 squares. 
        
    Inputs:
    
        On mouse down and hover the square will change color to selected color. . 
        color options. random and rgb selections. 
        Eraser.
        reset. 
        size selector. Selection will start loop create desired amount of squares and append them to a parent div.

        use :hover to an event listener- mouse down to change color.

    Output: 
    
    A program that will draw as you hold the mouse and move.

Algorithm

done    1. Create a Drawing pad.
        
        Create 2 Divs.
            input - 
            output.

        Develop loop for creating the desired amount of divs inside of the main div
            Function createDiv(input)
                for (let i = 0; i< (input * input) i ++ ){
                    const newDiv = document.createElement('div')
                    div
                }    

        
        append each div as a child of the parent div draw-container. . 
        Present divs in grids inside container div.

        Load page with 16x16 grid.
            document.body.onload = createDiv(16)

    
    
    2. Create Input pad

        Color Selection-black default
        Size slider bar
        Eraser Selection - White Default.
            create a new pad with createDiv(slider.value)

        Color Selection: 



            document.getElementById('colorpicker').onchange = function (){
    colorInput = this.value;
}


        



