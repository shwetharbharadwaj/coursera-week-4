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


