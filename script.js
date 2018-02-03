$(document).ready(function(){
    
    var speed = 500; //Fade Speed
    var autoswitch = true; // auto slider option
    var autoswitch_speed = 4000; //Auto switch speed
    
    //Add initial active class
    
    $('.slide').first().addClass('active');
    
    // Hide all slides
    
    $('.slide').hide(); // All slides will be hidden including first one
    
    $('.active').show(); // This shows first slide
    
    $("#next").on('click', nextSlide);
    
    $("#prev").on('click', prevSlide);
    
    if(autoswitch == true) {
       
        setInterval(nextSlide, autoswitch_speed);
       
       }
    
    // Function for switching to next slide
    
    function nextSlide (){
        
        $(".active").removeClass("active").addClass("oldActive");
        
        if($(".oldActive").is(':last-child')){
            
            $(".slide").first().addClass("active");
            
        } else {
            
            $(".oldActive").next().addClass("active");
            
        }
        
        $(".oldActive").removeClass("oldActive");
        
        $(".slide").fadeOut(speed);
        
        $(".active").fadeIn(speed);
        
        
    }
    
    function prevSlide (){
        
        $(".active").removeClass("active").addClass("oldActive");
        
        if($(".oldActive").is(':first-child')){
            
            $(".slide").last().addClass("active");
            
        } else {
            
            $(".oldActive").prev().addClass("active");
            
        }
        
        $(".oldActive").removeClass("oldActive");
        
        $(".slide").fadeOut(speed);
        
        $(".active").fadeIn(speed);
        
    }
    
});