
/*SampleRequestPacketJson*/
var obj = { "transactionId": "PIZWZEK2IBBOEYBV8CXFZ", " fileId": "0cc2f103-1509-421a-813d-c6b1705dfa09" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "transactionId": "PIZWZEK2IBBOEYBV8CXFZ", " fileId": "0cc2f103-1509-421a-813d-c6b1705dfa09" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"success\": true, \n\"transactionId\": \"PIZWZEK2IBBOEYBV8CXFZ\", \n\"statementsStatus\": {\"fileId\": \"0cc2f103-1509-421a-813d-c6b1705dfa09\", \n\"fileName\": \"dummy.pdf\", \n\"documentType\": \"ITRV\", \n\"message\": null, \n\"status\": \"READY_FOR_REPORT_GENERATION\", \n\"assessmentYear\": \"2019-20\", \n\"financialYear\": \"2018-19\", \n\"itrType\": \"ITR-4\", \n\"errorCode\": null\n}\n} ";
}