"use strict";
// handle the form submit event
// returns false if there is no email, no message or if the message is more
// than 1000 characters.
function eventHandlers() {
	document.getElementById("contactForm").onsubmit = function() {
		// prevent submit if no email.
		if (document.getElementById("email").value == "") {
			document.getElementById("contactFormErrorMessage").innerHTML = "Fel: Vänligen ange en e-mailadress.";
			return false;
		} else {
			document.getElementById("contactFormErrorMessage").innerHTML = "";
		}

		var message = document.getElementById("message").value;
		// prevent submit if no message
		// Prevent submit if message has more than 1000 chars
		if (message.length == 0) {
			document.getElementById("contactFormErrorMessage").innerHTML = "Fel: Vänligen skriv ett meddelande.";
			return false;
		} else if (message.length > 1000) {
			document.getElementById("contactFormErrorMessage").innerHTML = "Fel: Meddelandet får	ej överstiga 1000 tecken."
			return false;
		}

		return true;
	};
}

// wait for the document to finish loading
window.onload = function() {
	eventHandlers();
};