
/*SampleRequestPacketJson*/
var obj = {"vendorId": "iBankRetail"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"vendorId": "iBankRetail"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = "  {\n\"institutions\": {\"institution\": [{\"id\": 3, \n\"institutionType\": \"bank\", \n\"name\": \"ADCB, India\"\n},{\n\"id\": 12101, \n\"institutionType\": \"bank\", \n\"name\": \"AG's Bank, India\"\n}]\n}\n}  ";
}