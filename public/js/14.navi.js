<<<<<<< HEAD
$(".top-lt").mouseenter(onEnter).mouseleave(onLeave);

function onEnter(){
$(this).find(".sub-wrap").stop().slideDown(500).css("display","flex");
}

function onLeave(){
	$(this).find(".sub-wrap").stop().slideUp(500);

=======
$(".top-lt").mouseenter(onEnter);
$(".top-lt").mouseleave(onLeave);
function onEnter() {
	$(this).find(".sub-wrap").stop().slideDown(500, function(){
		$(this).css("display", "flex");
	});
}
function onLeave() {
	$(this).find(".sub-wrap").stop().slideUp(500);
>>>>>>> d02404ecaba11f24ad36e5bd2d58cd0778a6a3c7
}