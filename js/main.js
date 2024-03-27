// 1-nmsk el tags eli hnsht8l 3liha 

// 2-lma ados 3ala ay sora el layer yzhar 

// 3-el sora eli dost 3liha hya el tege 

// 4-n2lb bl ashom 

// 5-n2lb bl keyboard 

var imgs = document.querySelectorAll('#slider img'); // nodelist
var fixedLayer = document.querySelector('.fixed-layer');
var closeBtn = document.querySelector('#close-btn');
var prevBtn = document.querySelector('#prev-btn');
var nextBtn = document.querySelector('#next-btn');
var container = document.querySelector('.container');
var innerImg  = document.querySelector('.fixed-layer img') ;
var indexImg = 0

// to convert nodelist to array
var ImgsArray = Array.from(imgs) ;


container.addEventListener('click' ,function(e) {
    
    var clickedImg = e.target ; // img tag
    indexImg = ImgsArray.indexOf(clickedImg);
    // console.log(indeximg)
    
    var imgSrc = clickedImg.getAttribute('src') ;
    if(imgSrc != null ) {
        innerImg.setAttribute( 'src' , imgSrc)
        fixedLayer.classList.replace('d-none' , 'd-flex')
    }



})

function getNextSlide() {
    indexImg++;

    if(indexImg >= imgs.length) {
        indexImg = 0;
    }
    var nextImg = ImgsArray[indexImg] // tag
 
     var srcAttribute = nextImg.getAttribute('src')
     innerImg.setAttribute('src' ,srcAttribute)
}
nextBtn.addEventListener('click' , function(e) {
    e.stopPropagation();
    getNextSlide()
  
}) 


function getPreviousSlide() {

     
    indexImg--;

    if(indexImg < 0) {
        indexImg = imgs.length -1;
    }
   
   var previousImg = ImgsArray[indexImg] // tag

    var srcAttr = previousImg.getAttribute('src')
    innerImg.setAttribute('src' ,srcAttr)
}
prevBtn.addEventListener('click' , function(e) {
    e.stopPropagation();
    getPreviousSlide();

})


closeBtn.addEventListener('click' , closePopup  )

fixedLayer.addEventListener('click' , closePopup)
   
function closePopup () {
    fixedLayer.classList.replace('d-flex' , 'd-none')
   
}


document.addEventListener('keydown' , function(e) {
    // علشان ما يشغلش الفانشكن دى غلى طول ويستهلك فى ال performance 

    if(fixedLayer.classList.contains('d-flex')) {
        if(e.key == 'ArrowRight') {
            getNextSlide();
        }
        else if(e.key == 'ArrowLeft') {
            getPreviousSlide() ;
        } else if(e.key == 'Escape') {
            closePopup ()
        }
    }
   
})