	
function hamburg(x) {
  x.classList.toggle("change");
}


/*slideshow*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*form animation*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {

      var x = document.getElementById("myTopNav");
      if (x.className === "topnav") {
        x.classList.toggle("change");
		x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }



function addToCart(clicked_id) {
	var itemId = clicked_id;
	var cartId = clicked_id + "c";
	var itemTitle = document.getElementById(itemId + "t").textContent;
	var table = document.getElementById('cartList');
	var cell= '<div class="container" id="' + cartId + '">' +
	  '<p>' + itemTitle +'</p>' +
	  '<form>' +
	  '<button class="remove" onClick="removeFromCart(this)" type="button" item="' + cartId + '"> Remove </button>' +
	  '</form>' + 
	  '</div>';
	  table.insertAdjacentHTML('beforeend',cell);
	  alert("Item Added!");
}

function removeFromCart(element) {
	var id = element.getAttribute("item");
	var item = document.getElementById(id);
	item.parentNode.removeChild(item);
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

