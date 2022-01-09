// grap li items in nav 
let itemsList = document.querySelectorAll('li') ;
// convert the returned nodeList to an array :
let itemsArray =Array.from(itemsList) ;
//grap the main :
let main = document.getElementsByTagName('main');


// clikc + mouseover events :
function eventFun() {
    // iterate over all li items adding the event to each :
  for(let i=0 ; i<itemsArray.length ; i++) {
    //nav li mouseover : random background color on mouseover :
itemsArray[i].addEventListener('mouseover' , ()=> itemsArray[i].style.background = `rgb(${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)})`);
    
 // click event : main + li items :
 itemsArray[i].addEventListener('click' , ()=> { 
   // to ellimenate the effect form the previously clicked li when another li clicked :
   let clickedtItem = itemsArray[i] ; // because indexOf needs item value
        // iterate over all items:
   for (let v=0 ; v<itemsArray.length ; v++){
     // store each of items in var to use it in indexOf() :
     let notClickedItem = itemsArray[v] ;
     // check whether the item is the clicked one or another one :
     if(itemsArray.indexOf(notClickedItem) !== itemsArray.indexOf(clickedtItem)) {
       //give the notklicked item normal styles to get rid of the styles applied when it was clicked before :
         notClickedItem.style.background = 'none';
       notClickedItem.style.border='1em solid grey';
       notClickedItem.style.borderRadius ='0';
       notClickedItem.style.color = 'black';
         }
   else{
  // and give the clicked special style : 
 clickedtItem.style.borderBottom ='none';
 clickedtItem.style.borderRadius ='0 10px'; 
 clickedtItem.style.textAlign = 'left';
 // giv the font of li a different color than the li to be clear :
clickedtItem.style.color=`rgb(${Math.floor(Math.random()*250)-50},${Math.floor(Math.random()*250)-50},${Math.floor(Math.random()*250)+50})`;
 // give the main page the same color as the li :
 main[0].style.background = `${itemsArray[i].style.background}`;
   } } }) ; 
 
    
  }
}
eventFun();

/*function mainEvent() {
  main[0].addEventListener('mouseover' , ()=> main[0].style.background = 'grey') ;
   main[0].addEventListener('mouseout' , ()=> main[0].style.background = 'none') ;
                           
}
mainEvent() ;*/