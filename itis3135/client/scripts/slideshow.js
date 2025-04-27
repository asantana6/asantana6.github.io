$(document).ready(function() {
    // 1. First declare all variables
    let slideIndex = 1;
    let slideInterval;

    // 2. Define all helper functions first
    function showSlides(n) {
        const slides = $(".mySlides");
        const dots = $(".dot");
        
        // Handle wrap-around
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        // Hide all slides
        slides.hide();
        
        // Remove active class from all dots
        dots.removeClass("active");
        
        // Show current slide and activate corresponding dot
        slides.eq(slideIndex-1).fadeIn(1000);
        dots.eq(slideIndex-1).addClass("active");
    }

    function startTimer() {
        slideInterval = setInterval(function() {
         //   plusSlides(1);
        }, 5000000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    function plusSlides(n) {
        resetTimer();
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        resetTimer();
        showSlides(slideIndex = n);
    }

    // 3. Only after all functions are defined do we:
    function initSlideshow() {
        // Initialize display
        showSlides(slideIndex);
        startTimer();
        
        // Set up event handlers
        $(".prev").click(function() { plusSlides(-1); });
        $(".next").click(function() { plusSlides(1); });
        
        $(".dot").click(function() {
            currentSlide($(this).index() + 1);
        });
        
        $(".thumbnail").click(function() {
            currentSlide($(this).index() + 1);
        });
        
        // Pause on hover
        $(".slideshow-container").hover(
            function() { clearInterval(slideInterval); },
            function() { startTimer(); }
        );
    }

    // 4. Finally, initialize everything
    initSlideshow();
});