var timer = null, 
    interval = 1000,
    value = 0;

function s(){
	var sec = 0;
	timer = setInterval(function(){ 
	sec = sec + 1; 
	var date = new Date(null);
	date.setSeconds(sec); // specify value for SECONDS here
	var result = date.toISOString().substr(11, 8);
	document.getElementById("date").innerHTML = result;
	}, interval);
}

function n(){
	var d = new Date();
	now = new Date(d);
	clearInterval(timer);
  	timer = null
	var st = document.getElementById("date").innerHTML;
	document.getElementById("date").innerHTML = st;
	
	
	return(now);

}

function d(){
	clearInterval(timer)
	timer = null
	var date = new Date(null);
	date.setSeconds(0); // specify value for SECONDS here
	var result = date.toISOString().substr(11, 8);
	document.getElementById("date").innerHTML = result;
	document.getElementById("splits").innerHTML = "";
}


function e(){
	var res = document.getElementById("date").innerHTML
	var a = document.getElementById("splits").innerHTML 
	var write = ""
	write = a + res
	document.getElementById("splits").innerHTML = write + "<br>";
	console.log(res)
}