$(".top-lt").mouseenter(onEnter).mouseleave(onLeave);

function onEnter(){
$(this).find(".sub-wrap").stop().slideDown(500).css("display","flex");
}

function onLeave(){
	$(this).find(".sub-wrap").stop().slideUp(500);

}