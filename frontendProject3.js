// grap li items in nav 
let itemsList = document.querySelectorAll('li') ;
// convert the returned nodeList to an array :
let itemsArray =Array.from(itemsList) ;
let clickCounterpartArray ; // any li onclick event will set all items in this array to false than set the one that has the same index as its index to true.


// mouseover handeler : set random background color on mouseover :
function liMouseoverHandeler(event){
   event.target.style.background = `rgb(${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)},${Math.floor(Math.random()*20)})`;
    
}

//Mouseover function: iterates over li items adding mousevoer event to each li :
function mouseoverCaller() {
    // iterate over all li items adding the event to each :
    for(let i=0 ; i < itemsArray.length ; i++) {
    //random background color on mouseover :
      itemsArray[i].addEventListener('mouseover' ,liMouseoverHandeler);
    }
}


// click handeler : remove mouseover event on the clicked li :
function ClickHandeler(event) {
    // first : call the mouseover assigner to assign mouseover that was removed on the previous click :
    mouseoverCaller();
    // second: create a counterpart array :
    clickCounterpartArray = new Array(itemsArray.length);
//third: iterate over the array assigning all items to false :
for(let i=0 ; i< clickCounterpartArray.length ; i++) {
    clickCounterpartArray[i] = false ; 
}
// assign the counterpart item in this array to true when the counterpart li is clicked :
clickCounterpartArray[itemsArray.indexOf(event.target)] = true ;
// if the couterpart item in the counterpat array is true apply styling rules of 'click' event :
if(clickCounterpartArray[itemsArray.indexOf(event.target)]) {
    event.target.removeEventListener('mouseover', liMouseoverHandeler);
    // and color the main body as the clicked li :
    document.querySelector('main').style.background= event.target.style.background ;
        }
}

// iterate over each li adding click event :
function clickCaller(){
    for(let i = 0 ; i<itemsArray.length ; i++ ){
itemsArray[i].addEventListener('click' , ClickHandeler) }
    }       
    

 // call the 2 functions to assign the 2 events :
 mouseoverCaller();
 clickCaller();
