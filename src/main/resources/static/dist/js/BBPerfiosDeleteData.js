
/*SampleRequestPacketJson*/
var obj = {"transactionId": "PICGAIZIFNXIWF9BLHFWO", "deleteOriginalStatements": "True"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"transactionId": "PICGAIZIFNXIWF9BLHFWO", "deleteOriginalStatements": "True"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"message\": \"The Perfios Transaction Data has been deleted.\", \n\"success\": true\n} ";
}