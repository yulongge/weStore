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
weStore.sharkEvent=function(){
	alert(3);
};


weStore.init();

$(function(){
	$(".myfooter .menu li a").tap(function(){
		weStore.loadPage($(".mymain"),$(this).attr("value"));
	});

	weStore.loadPage($(".mymain"),$(".myfooter .menu li a").eq(0).attr("value"));
});

//摇一摇
var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;
function sharkInit() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        weStore.sharkEvent();
    }
}
function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

        if (speed > SHAKE_THRESHOLD) {
            $(".msgCon").text("Welcome")
            
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}
