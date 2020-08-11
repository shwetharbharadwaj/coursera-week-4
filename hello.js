(function(window)
{
	var hello = new Object();
	var greet = "Hello";
	hello.say= function (name)
	{
		console.log(greet +" "+ name);

	};
	window.hello = hello;

})(window);

// (function(window) {
//     var helloSpeaker = new Object();
//     var speakWord = "Hello";
//     helloSpeaker.speak = function(name) {
//         console.log(speakWord + " " + name);
//     };
//     window.helloSpeaker = helloSpeaker;
// })(window);
