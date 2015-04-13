var weStore = {};
weStore.init = function(argument) {
	 document.addEventListener('touchmove', function (e) {
                e.preventDefault();
                e.stopPropagation();
     }, false);
};
weStore.loadPage=function($container,url){
	var urlStr = url+".html";
	$container.load(urlStr,function(){
		
	});
};

weStore.init();

$(function(){
	$(".myfooter .menu li a").tap(function(){
		weStore.loadPage($(".mymain"),$(this).attr("value"));
	});
});