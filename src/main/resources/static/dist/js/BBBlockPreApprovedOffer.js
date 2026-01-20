
/*SampleRequestPacketJson*/
var obj = {"RelationNumber": "234101000470", "ProductCode": "PLSELECT", "ReferenceNumber": "83756385", "Source": "LOP"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"RelationNumber": "234101000470", "ProductCode": "PLSELECT", "ReferenceNumber": "83756385", "Source": "LOP"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"success\": false, \n\"response\": 8012, \n\"message\": \"BACKEND_CONNECTION_TIMEOUT-Cannot connect to service\"\n} ";
}