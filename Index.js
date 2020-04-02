var dataBase =[
    {
        username:"Ash",
        password:"lauda"
    }
    
];






var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
var user = prompt("Type your user name here for sign up");
var pass = prompt("Type your password here for sign up");

dataBase.push({username:user,password:pass});



function signIn(username,password) {
    for (var i=0;i<dataBase.length;i++) {
        if (dataBase[i].username === username &&
            dataBase[i].password === password){
                return (console.log(newsfeed))
            }
            else{
                return(alertmas
                    ("Fuck off"));
            }
    } 
   


}






var userlog = prompt("Type your username for login");



var passlog = prompt("Type your passsword for login ");


signIn(userlog,passlog)



