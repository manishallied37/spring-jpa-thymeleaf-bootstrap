
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBank", "transactionId": "PGX64FHXRBG1NO5QOISUP" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBank", "transactionId": "PGX64FHXRBG1NO5QOISUP" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"errorCode\": null, \n\"gstNumberStatus\": [{\"errorCode\": null, \n\"gstNumber\": \"24AROPP8852E1ZD\", \n\"message\": null, \n\"status\": \"GET_USERNAME\", \n\"success\": true}], \n\"message\": null, \n\"status\": \"INITIATED\", \n\"success\": true\n} ";
}