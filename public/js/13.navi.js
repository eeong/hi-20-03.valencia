$(".navi").mouseenter(onEnter).mouseleave(onLeave);

function onEnter(){
	$(this).find(".sub-wrap").stop().show(500).css("display","flex");
}

function onLeave(){
	$(this).find(".sub-wrap").stop().hide(500)
}
