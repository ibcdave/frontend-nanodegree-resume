var formattedName = HTMLheaderName.replace("%data%", "Dave Bernard");
var role = "Front-End Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var Bio = {
	"name" : "Dave Bernard",
	"age" : "27",
	"email" : "davidbernard8@gmail.com",
	"photo" : images/me.jpg
	"blurb" : "Hey, I'm Dave! Thanks for checking out my resume."
};
var formattedPic = HTMLbioPoc.replace("%data", images/me.jpg);
$("#header").append(formattedPic);