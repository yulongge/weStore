var weStore = {};
weStore.init = function(argument) {
	 document.addEventListener('touchmove', function (e) {
                e.preventDefault();
                e.stopPropagation();
     }, false);
}
weStore.init();