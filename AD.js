$(function () {
    // Transition from Landing Page to Product Page
    $(".landingPage__button").click(function () {
        $(".landingPage").addClass("hidden");  // Hide the landing page
        $(".productPage").removeClass("visible");  // Ensure product page starts hidden
        setTimeout(function() { // Add a small delay for animation
            $(".productPage").addClass("visible");  // Show product page after transition
        }, 300); // Matching the transition time in CSS
    });

    // Transition back to Landing Page
    $(".productPage__goBack").click(function () {
        $(".productPage").removeClass("visible");  // Hide the product page
        setTimeout(function() { // Add a small delay for animation
            $(".landingPage").removeClass("hidden");  // Show landing page after transition
        }, 300); // Matching the transition time in CSS
    });

    // Slick slider initialization with autoplay for automatic image movement
    $('.product-image-slider').slick({
        infinite: true,           // Ensures the slider loops infinitely
        speed: 500,               // Set the speed of the transition
        fade: true,               // Use a fade transition for smooth image change
        cssEase: 'linear',        // Linear easing for a smooth effect
        prevArrow: $('.prev.slick-arrow'),  // Adjusted for custom previous arrow
        nextArrow: $('.next.slick-arrow'),  // Adjusted for custom next arrow
        autoplay: true,           // Enable autoplay for automatic image change
        autoplaySpeed: 3000,      // Set the interval between image changes (3 seconds)
    });
});
