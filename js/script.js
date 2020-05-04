$('.site-content, .section-1').ripples({
    resolution:700,
    perturbance:0.18,
    });


    window.sr = ScrollReveal({ reset: true });
    
    sr.reveal('.site-content .d-flex',{ rotate: { x: 100, y: 100, z: 0 },  origin: 'left', duration: 1000 });
    
    sr.reveal('.section-1 .card',{ }, 500);
    
    sr.reveal('.section-2 d-flex', { rotate: { x: 100, y: 100, z: 0 }, duration: 1000 });
    
    sr.reveal('.section-3 .col-md-4', { rotate: { x: 100, y: 100, z: 0 }, duration: 1000 });   


    $(function(){
        $(document).scroll(function(){
          var $nav = $("#navbarMenu");
          $nav.toggleClass("scroll", $(this).scrollTop()>$nav.height());
        });
      });