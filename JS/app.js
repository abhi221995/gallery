$(document).ready(function(){

    // ............. //
    
    
    //............. //

    

    // nAV BAR//

    let stickyNavTop = $('nav').offset().top;  
    console.log(stickyNavTop)
       
       
       function stickyNav(){
           let scrollTop = $(window).scrollTop();
           
           if (scrollTop > stickyNavTop) { 
               $('nav').addClass('sticky');
           } else {
               $('nav').removeClass('sticky'); 
           }
        };

    stickyNav();
    
    $(window).scroll(function() {
        stickyNav();
    });

    // BANNER LETTER ANIMATION //
    
    var textWrapper = document.querySelector('.ml13');
    textWrapper.innerHTML =textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    

   anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  

});

    

  }); 




//..................//

//......nav active function...... //

// let pathname=window.location.pathname;
// let pagename=pathname.split("/").pop();

// if(pagename="index.html"){
//     document.querySelector(".home").classList.add("active");
// }
// if(pagename="About.html"){
//   document.querySelector(".about").classList.add("active");
// }
// if(pagename="Contact.html"){
//   document.querySelector(".contact").classList.add("active");
// }
// if(pagename="Gallery.html"){
//   document.querySelector(".gallery").classList.add("active");
// }
// if(pagename="Service.html"){
//   document.querySelector(".service").classList.add("active");
// }
// if(pagename="Blog.html"){
//   document.querySelector(".blog").classList.add("active");
// }



    

   

   





  




    

