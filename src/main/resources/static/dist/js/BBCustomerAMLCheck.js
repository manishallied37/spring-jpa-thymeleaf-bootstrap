
/*SampleRequestPacketJson*/
var obj = {"MessageType": "1210", "ProcCode": "FRS001", "ActCode": "001", "AppCode": [], "TRN": [], "DTime": [], "ResponseMessage": []};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"MessageType": "1210", "ProcCode": "FRS001", "ActCode": "001", "AppCode": [], "TRN": [], "DTime": [], "ResponseMessage": []};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"MessageType\": \"1210\", \n\"ProcCode\": \"FRS001\", \n\"ActCode\": \"001\", \n\"AppCode\": [], \n\"TRN\": [], \n\"DTime\": [], \n\"ResponseMessage\": []\n} ";
}