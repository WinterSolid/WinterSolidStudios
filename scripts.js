//for name eqwual its id 
const name = document.getElementById('')

//create a moving function called move
//will move as screen moves or resizes
function move() {
    // scroll either up,Left or right

    //scroll position on page
    const incremented = window.scroll  //scrollX,ScrollY
    
    // main image needs to move by being incremented
    //.syle.*****POSITION = 20 + incremented * percentage in decimal + string '%' for pixels
    
}
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.addEventListener('scroll',move)