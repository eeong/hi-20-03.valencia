// wrapper1
(function(){
	var interval;
	var ani;
	var idx=0;
	var lastIdx = $(".wrapper1 .slide").length;
	
	interval = 	setInterval(ani,3000);
	interval();
	function ani (){
		if (idx == lastIdx) {$(".wrapper1 .slide-wrap").animate({"left":"0"},500);
		idx =0;
	}else {$(".wrapper1 .slide-wrap").animate({"left": -idx*100 +"%"},500);
   idx++;}
	}	
})();
//wrapper1

//wrapper2
(function(){
	var interval;
	var ani;
	var idx = 0;
	var lastIdx = $(".wrapper2 .slide").length;
	
	interval = 	setInterval(ani,3000);
	interval();
	function ani (){
		if (idx == lastIdx) {$(".wrapper2 .slide-wrap").animate({"left":"0"},500);
		idx = 0;
	}else {$(".wrapper2 .slide-wrap").animate({"left": -idx*100 +"%"},500);
	 idx++;
	}
	}	


})();
//wrapper2