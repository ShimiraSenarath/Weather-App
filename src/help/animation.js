
//     var ieRotate = new function () {
//     var me = this,
//         $saturn,
//         initialPosition,
//         radius = 150;
    
//     /* 
//      * Initialize the animation here.
//      */
//     me.init = function () {
        
//         // Caches the jQuery object for performance reasons.
//         $saturn = $('#saturn');
        
//         // Stores the initial position of Saturn.  Used later when calculating
//         // the orbit animation.
//         initialPosition = {
//             x: parseInt($saturn.css('left')),
//             y: parseInt($saturn.css('top'))
//         };
        
//         // starts the aniamtion.
//         rotateOnce();
//     }
    
//     function rotateOnce() {
        
        
//         $saturn.css('text-indent', 0);
        
//         // Step 2: We set up jQuery.animate() to do the animation by ....
//         $saturn.animate(
            
//             {
//                 'text-indent': 2*Math.PI
//             }, {
                
                
//                 step: function (now) {
//                     $saturn.css('left', initialPosition.x + radius * Math.cos(now))
//                            .css('top', initialPosition.y + radius * Math.sin(now))
//                 },
                
                
//                 duration: 4000,
                
//                 easing: 'linear',
                
//                 complete: rotateOnce
//             }
//         );
//     }
// }

// $(document).ready(ieRotate.init);
       
