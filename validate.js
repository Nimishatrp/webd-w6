function validate(){
    var mail = document.getElementById("Email").value;
var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
if(mail.match(regx)){
    alert("Thank you for the submission!")
    return true;
}
else{
    alert("Please enter a valid email id")
    reset();
}
 }
 

 const divWithQuote = document.getElementById("insertQuoteHere");

const getQuote = () => {
	fetch("https://dummyjson.com/quotes/random")
		.then(response => response.json())
	  .then(data => ( divWithQuote.innerHTML = data.quote ));
}
