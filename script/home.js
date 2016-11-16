window.onload = function () {
    
    var seb = Snap.select("#va-svg");
    
    function onSVGLoaded() {
        
        function animOn(){
            seb.animate({
                transform: "t10,-300, r0"
            }, 300, mina.easeinout, animOut);
            
        }
        function animOut(){
            seb.animate({
                transform: "t-10,-305, r0"
            }, 300, mina.easeinout, animOn);
                
        }
          
    }

    onSVGLoaded();
};
    
    
    
    
    
    
    