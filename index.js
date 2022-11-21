let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    // setTimeout(showSlides, 10000); // Change image every 2 seconds
  }

  // js for second slider
  var sliderIndex = 1; //inslized the first value of the slider.
       showsDiv(sliderIndex);

       function plusdiv(n){
        showsDiv(sliderIndex += n)
       }

       function showsDiv(n){
        var i ;
        var x = document.getElementsByClassName(" myslider")
        if (n > x.length) {sliderIndex = 1}
        if (n < 1){sliderIndex = x.length}

        for (i=0; i < x.length; i++){
            x[i].style.display = "none";
        }
        x[sliderIndex -1].style.display = "block";
        
       }
       