
/*SampleRequestPacketJson*/
var obj = { "transactionId": "PIWFECOJOMFLJZMFBQ7Y3", "documentType": "", "filePassword": "", "fileName": "XXX.pdf", "file": "JVBERi0xLjMKJf////8KOSAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+CmVuZG9iagoxMiAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9DQSAxCj4…" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "transactionId": "PIWFECOJOMFLJZMFBQ7Y3", "documentType": "", "filePassword": "", "fileName": "XXX.pdf", "file": "JVBERi0xLjMKJf////8KOSAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+CmVuZG9iagoxMiAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9DQSAxCj4…" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"success\": true, \n\"statementsStatus\": [{\"fileId\": \"358f362b-aa16-4f6b-bf12-8bc146539347\", \n\"fileName\": \"chandanathile.pdf\", \n\"message\": null, \n\"status\": \"READY_FOR_PROCESSING\"}], \n\"transactionId\": \"PIWFECOJOMFLJZMFBQ7Y3\"\n} ";
}