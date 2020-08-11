(function(window)
{
	var goodBye = new Object();
	var greet ="good Bye";
	goodBye.say= function say(name)
	{
		console.log(greet +"  "+name);

	};
	window.goodBye = goodBye;

})(window);


