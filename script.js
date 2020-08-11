(function()
{
	var names =["Sam","Jim","Jeena","Hulk","Jonny","Teena","Ram"];

for(var i = 0; i < names.length; i++)
{
	var firstLett = names[i].charAt(0).toLowerCase();
	if(firstLett === 'j'){
	 goodBye.say(names[i]);
        } else {
            hello.say(names[i]);
        }
    }
})();






