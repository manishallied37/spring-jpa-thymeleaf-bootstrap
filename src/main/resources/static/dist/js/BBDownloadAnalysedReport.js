
/*SampleRequestPacketJson*/
var obj = { "txnId": "b74332eb-54d6-4136-816c-76174ba1ff94", "type": "INSIGHTS", "format": "xml" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "txnId": "b74332eb-54d6-4136-816c-76174ba1ff94", "type": "INSIGHTS", "format": "xml" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"_body\": {\n\"isTrusted\": true}, \n\"status\": 0, \n\"ok\": false, \n\"statusText\": \"\", \n\"headers\":{}, \n\"type\": 3, \n\"url\": null\n} ";
}