const stars = document.querySelector(".ratings").children;
const ratingValue = document.getElementById("rating-value");
const ratingValueDisplay = document.getElementById("rating-value-display");

let index;

for(let i=0; i<stars.length; ++i){
  stars[i].addEventListener("mouseover", function(){
    for(let j=0; j<stars.length; ++j){
      stars[j].classList.remove("fa-star");
      stars[j].classList.add("fa-star-o");
    }
    for(let j=0; j<=i; ++j){
      stars[j].classList.remove("fa-star-o");
      stars[j].classList.add("fa-star");
    }
  })
  stars[i].addEventListener("click", function(){
    ratingValue.value = i+1;
    ratingValueDisplay.textContent = ratingValue.value;
    index = i;
  })
  stars[i].addEventListener("mouseout", function(){
    for(let j=0; j<stars.length; ++j){
      stars[j].classList.remove("fa-star");
      stars[j].classList.add("fa-star-o");
    }
    for(let j=0; j<=index; ++j){
      stars[j].classList.remove("fa-star-o");
      stars[j].classList.add("fa-star");
    }
  })
}


const stars2 = document.querySelector(".ratings2").children;
const ratingValue2 = document.getElementById("rating-value2");
const ratingValueDisplay2 = document.getElementById("rating-value-display2");

let index2;

for(let i=0; i<stars2.length; ++i){
  stars2[i].addEventListener("mouseover", function(){
    for(let j=0; j<stars2.length; ++j){
      stars2[j].classList.remove("fa-star");
      stars2[j].classList.add("fa-star-o");
    }
    for(let j=0; j<=i; ++j){
      stars2[j].classList.remove("fa-star-o");
      stars2[j].classList.add("fa-star");
    }
  })
  stars2[i].addEventListener("click", function(){
    ratingValue2.value = i+1;
    ratingValueDisplay2.textContent = ratingValue2.value;
    index2 = i;
  })
  stars2[i].addEventListener("mouseout", function(){
    for(let j=0; j<stars.length; ++j){
      stars2[j].classList.remove("fa-star");
      stars2[j].classList.add("fa-star-o");
    }
    for(let j=0; j<=index2; ++j){
      stars2[j].classList.remove("fa-star-o");
      stars2[j].classList.add("fa-star");
    }
  })
}