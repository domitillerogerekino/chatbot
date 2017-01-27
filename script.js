$(document).ready(function() {
	var $messagesTemplate = $("#messagesTemplate");

	var $getEntityForm = $("#getEntityForm");
	var $getEntityMessage = $("#getEntityMessage");
	var $sendMessageForm = document.getElementById("#sendMessageForm");

// 	$("#getEntityForm").submit(function(e) {
// 		console.log('Getting entity ...');
// 		console.log($getEntityForm);

// 		$.ajax({
// 			url: 'https://api.wit.ai/message',
// 			data: {
// 				'q': $getEntityMessage.val(),
// 				'access_token' : 'G2EUOGQZJG62NY62BIOEF4DXS35MGCH7'
// 			},
// 			dataType: 'jsonp',
// 			method: 'GET',
// 			success: function(response) {
// 				// console.log("success : ", response);
// 				// console.log("success : ", response.entities['ia'][0].value);

// 				var t = $messagesTemplate;
// 				console.log(t);
// 				console.log(t.content);
// //				var td = t.content.querySelectorAll("p");
// //				td[0].textContent = response.entities['ia'][0].value;

// 				var tb = document.getElementsByTagName("ul");
// 				var clone = document.importNode(t.content, true);
// 				tb[0].appendChild(clone);
// 			}, 
// 			error: function(response) {
// 				console.log('error : ', response);
// 			}
// 		});

// 		e.preventDefault();
// 	});

	$("#sendMessageForm").submit(function(e) {
		console.log('Sending message ...');

		$.ajax({
			url: 'https://api.wit.ai/converse?session_id=10&q=hey',
			headers: {
				'Authorization': 'Bearer G2EUOGQZJG62NY62BIOEF4DXS35MGCH7',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			jsonp: 'callback',
			success: function(response) {
				console.log("success : ", response);
			}
		});

		e.preventDefault();
	});
});
