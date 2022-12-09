let searchBar=document.querySelector(".search-bar");
document.querySelector("#search-btn").onclick=()=>{
   searchBar.classList.toggle("active"); 
   navbar.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}
let shoppingCart=document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick=()=>{
    shoppingCart.classList.toggle("active");
    navbar.classList.remove("active");
    searchBar.classList.remove("active"); 
    loginForm.classList.remove("active");
}
let loginForm=document.querySelector(".login-form");
document.querySelector("#login-btn").onclick=()=>{
    loginForm.classList.toggle("active");
    navbar.classList.remove("active");
    searchBar.classList.remove("active"); 
    shoppingCart.classList.remove("active");
    
}
let navbar=document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick=()=>{
    navbar.classList.toggle("active");
    searchBar.classList.remove("active"); 
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}
window.onscroll=()=>{
    navbar.classList.remove("active");
    searchBar.classList.remove("active"); 
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}


var swiper = new Swiper(" .categories-slider", {
  loop:true,

  spaceBetween: 10,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
     
    },
    1020: {
      slidesPerView: 3,
     
    },
  },
});




var swiper = new Swiper(" .mens-slider", {
    loop:true,
  
    spaceBetween: 10,
    /*autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,*/
    
    breakpoints: {
      0: {
        slidesPerView: 2,
       
      },
      768: {
        slidesPerView: 3,
       
      },
      1020: {
        slidesPerView: 4,
       
      },
    },
  });


  var swiper = new Swiper(".womens-slider", {
    loop:true,
  
    spaceBetween: 10,
    /*autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,*/
    
    breakpoints: {
      0: {
        slidesPerView: 2,
       
      },
      768: {
        slidesPerView: 3,
       
      },
      1020: {
        slidesPerView: 4,
       
      },
    },
  });

  


  var swiper = new Swiper(".accessories-slider", {
    loop:true,
  
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    
    breakpoints: {
      0: {
        slidesPerView: 2,
       
      },
      768: {
        slidesPerView: 4,
       
      },
      1020: {
        slidesPerView: 5,
       
      },
    },
  });

  var swiper = new Swiper(".equipments-slider", {
    loop:true,
  
    spaceBetween: 10,
    /*autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,*/
    
    breakpoints: {
      0: {
        slidesPerView: 2,
       
      },
      768: {
        slidesPerView: 3,
       
      },
      1020: {
        slidesPerView: 4,
       
      },
    },
  });




 