$(window).load(function(){
        $("#preloader").fadeOut("slow");
    $("#preloader_img").delay(200).fadeOut("slow");
        });

$(document).ready(function(){
    $(".feeds-fb").css("display","none");
    $("#close").css("display","none");
	
		var height=$(window).height();
	var width=$(window).width();
	if(height<605){
		$(".feeds-fb").css("top","5px");
		$("#close").css("top","10px");
	}
	
	
	if(width<=600)
	{
		var w=$(".feeds-fb").width();
		$(".feeds-fb").css("right",(width-w)/2);
		$("#close").css("right",(width-w)/2+10);
	}
	
    $("#s-link-img").mouseover(function(){
        $(".feeds-fb").slideDown("slow");   
        $("#close").css("display","inline");   
    }); 
	$("#close").click(function(){
		 $(".feeds-fb").slideUp("slow"); 
		$("#close").css("display","none");
	});
   /* $(".feeds-fb").mouseout(function(){
       $(".feeds-fb").slideUp("slow");   
    });
	$(".feeds-fb").mouseleave(function(){
       $(".feeds-fb").slideUp("slow");   
    });
	
	$("#main-stuff").mouseover(function(){
       $(".feeds-fb").slideUp("slow");   
    });*/
var t=setInterval(function(){
    $("#carousel ul").animate({marginLeft:-700},1000,function(){
        $(this).find("li:last").after($(this).find("li:first"));
        $(this).css({marginLeft:0});
})
},5000);
    
    $(".button-collapse").sideNav();
      $('.slider').slider({full_width: true});    

 $("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "circle_bg_color": "#333333",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#0076b6",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#0076b6",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#0076b6",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#0076b6",
            "show": true
        }
    }
});
	
	window.onresize = function(event) {
    $("#DateCountdown").TimeCircles().rebuild(); 
	};
	

});   