
/*SampleRequestPacketJson*/
var obj = { "transactionId": "PIWFECOJOMFLJZMFBQ7Y3" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "transactionId": "PIWFECOJOMFLJZMFBQ7Y3" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"success\": true, \n\"transactionId\": \"PIZWZEK2IBBOEYBV8CXFZ\"\n} ";
}