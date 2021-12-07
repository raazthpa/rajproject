function validateForm(){
	var name = document.forms["messageForm"]["name"].value;
	var Email = document.forms["messageForm"]["Email"].value;
	var Address = document.forms["messageForm"]["Address"].value;
	var message = document.forms["messageForm"]["message"].value;
	
	if(name=="" || Email=="" || Address=="" || message=="" ){
		alert("Empty field found. please fill the form.");
	}
	else{
		alert("Thankyou for messaging.");
	}
}