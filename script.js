const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
//Event Listener for imgBox i.e draggable items
imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';
    
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
    console.log("Drag start fired!");
})
imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
    console.log("Drag end fired!");
})

for (whiteBox of whiteBoxes){
    //Event Listeners for all white Boxes
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag Over Method triggered!");
    })
    whiteBox.addEventListener('dragenter', () => {
        console.log("Drag Enter Method triggered!");
    })
    whiteBox.addEventListener('dragleave', () => {
        console.log("Drag Leave Method triggered!");
    })
    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop Method triggered!");
        e.target.append(imgBox);
    })
}