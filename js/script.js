/* FUNCTIONS */
    
var closeNavbar = function() {

    // Le BURGER MENU est-il visible
    var test = $('.navbar-toggle:visible').length;

    if ( test === 1 ) {
        $('#myNavbar').collapse('hide');
    }
};

var moveExperience = function() {
    
    var $elements;
        
    if ($(window).width() < 768) {
            
        // Faire passer les éléments INVERTED à gauche
        $elements = $(".timeline-panel-container-inverted");
        $elements.removeClass("timeline-panel-container-inverted").addClass("timeline-panel-container");

        // Déplacement de la barre centrale
        $(".timeline").addClass("special");            
        $(".timeline li .timeline-badge").css("left", "102%");
        $(".timeline-panel-container").css("width", "100%");

    } else {

        $elements = $(".timeline-panel-container").filter(":odd");
        $elements.removeClass("timeline-panel-container").addClass("timeline-panel-container-inverted");

        // Replacement de la barre centrale
        $(".timeline-panel-container").css("width", "50%");
        $(".timeline-panel-container-inverted").css("width", "50%");
        $(".timeline li .timeline-badge").css("left", "50%");
        $(".timeline").removeClass("special");

    }
};


$(document).ready(function() {
    
    var $width = $(window).width();
    
    // Gestion de l'animation lors des clicks sur les menus (transition adoucie)
    $(".navbar a, footer a").click(function(event) {
        
        // Intercepte et arrête l'événement
        event.preventDefault();
        
        var hash = this.hash;
        
        $("body").animate({scrollTop: $(hash).offset().top}, 700, function() {window.location.hash = hash;})
        
        
    })
    
    // Gestion des clics sur les éléments du BURGER MENU (collapse)
    $("#myNavbar li a").click(closeNavbar);
    
    // Gestion de la taille initial
    if ( $(window).width() < 768 ) {
        moveExperience();
    }
    
    // Gestion du resizing
    $(window).resize(function() {
        var $newWidth = $(window).width();
        
        // Si l'on passe la barrière de 768px de large lors du resize, alors on modifie l'affichage d'EXPERIENCE
        if ( ( $width >= 768 && $newWidth < 768 ) || ( $width < 768 && $newWidth >= 768 ) ) {
            moveExperience();
            $width = $newWidth;
        };
    });
    
});