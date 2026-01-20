
/*SampleRequestPacketJson*/
var obj = {"perfiosTransactionId": "XPJA1614170116347"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"perfiosTransactionId": "XPJA1614170116347"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"_body\": {\"isTrusted\": true}, \n\"status\": 0, \n\"ok\": false, \n\"statusText\": \"\", \n\"headers\":{}, \n\"type\": 3, \n\"url\": null\n} ";
}