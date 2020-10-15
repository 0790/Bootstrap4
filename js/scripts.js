 $(document).ready(function(){
            $('#mycarousel').carousel({interval: 2000});
            $('#carouselButton').click(function()
                {
                    if($('#carouselButton').children('span').hasClass('fa-pause')){
                     $('#mycarousel').carousel('pause');
                     $('#carouselButton').children('span').removeClass('fa-pause');
                       $('#carouselButton').children('span').addClass('fa-play');
                    }

                     else if($('#carouselButton').children('span').hasClass('fa-play')){
                     $('#mycarousel').carousel('cycle');
                     $('#carouselButton').children('span').removeClass('fa-play');
                       $('#carouselButton').children('span').addClass('fa-pause');
                    }

            });
            
        });
    
        $(document).ready(function(){

            $('#Button').click(function(){
                $('#loginModal').modal('show');

            
            });

            $('#reserveButton').click(function(){
                $('#reserve').modal('show');

            
            });
            $('#loginclose').click(function(){
                if($('#loginclose').children('button').hasClass('close')){
                    $('#loginModal').modal('hide') ;
                    }

            });
            $('#logincancel').click(function(){
                if($('#logincancel').children('button')){
                    $('#loginModal').modal('hide') ;
                    }

            });


            $('#reserveclose').click(function(){
                if($('#reserveclose').children('button').hasClass('close')){
                    $('#reserve').modal('hide') ;
                    }

            });
            $('#reservecancel').click(function(){
                if($('#reservecancel').children('button')){
                    $('#reserve').modal('hide') ;
                    }

            });

            
            }); 
            