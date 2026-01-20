
/*SampleRequestPacketJson*/
var obj = {"transactionId": "PIWFECOJOMFLJZMFBQ7Y3"};

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
	document.getElementById('ResponseJson').innerHTML = " {\n\"clientTransactionId\": \"45354555TestItUploadV2ITR\", \n\"errorCode\": null, \n\"message\": null, \n\"transactionId\": \"PIICBAL7MPBPI4JOBAOZV\", \n\"transactionStatus\": \"INITIATED\", \n\"statementsStatus\": [{\"fileId\": \"a6ffbd5f-554e-4840-97a5-462e21f5322a\", \n\"fileName\": \"dummy.pdf\", \n\"documentType\": null, \n\"message\": \"Received PDF file is not IncomeTax Statement.\", \n\"status\": \"ERROR_FATAL\", \n\"assessmentYear\": null, \n\"financialYear\": null, \n\"itrType\": null, \n\"errorCode\": null\n}]\n} ";
}