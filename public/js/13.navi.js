<<<<<<< HEAD
$(".navi").mouseenter(onEnter).mouseleave(onLeave);

function onEnter(){
	$(this).find(".sub-wrap").stop().show(500).css("display","flex");
}

function onLeave(){
	$(this).find(".sub-wrap").stop().hide(500)
}
=======
$(".navi").mouseenter(onEnter);
$(".navi").mouseleave(onLeave);

function onEnter() {
	//$(this).find(".sub-wrap").stop().show(500, function() {$(this).css("display", "flex");});
	$(this).find(".sub-wrap").stop().slideDown(500, function() {$(this).css("display", "flex");});
	//$(this).find(".sub-wrap").stop().fadeIn(500, function() {$(this).css("display", "flex");});
}

function onLeave() {
	//$(this).find(".sub-wrap").stop().hide(500);
	$(this).find(".sub-wrap").stop().slideUp(500);
	//$(this).find(".sub-wrap").stop().fadeOut(500);
}

>>>>>>> d02404ecaba11f24ad36e5bd2d58cd0778a6a3c7
