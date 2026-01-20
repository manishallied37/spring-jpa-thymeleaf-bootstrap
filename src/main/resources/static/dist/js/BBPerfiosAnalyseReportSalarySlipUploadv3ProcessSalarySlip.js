
/*SampleRequestPacketJson*/
var obj = { "perfiosTransactionId": "XPJA1614170116347", "fileId": "46c7de521fbc112ed395d9e542d2839432b6ae5b" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "perfiosTransactionId": "XPJA1614170116347", "fileId": "46c7de521fbc112ed395d9e542d2839432b6ae5b" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"salarySlip\": {\"salarySlips\": null \n}\n} ";
}