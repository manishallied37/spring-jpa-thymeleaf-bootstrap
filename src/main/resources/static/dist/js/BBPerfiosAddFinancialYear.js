
/*SampleRequestPacketJson*/
var obj = {"payload":{"apiVersion": "2.1", "vendorId": "iBankSME", "perfiosTransactionId": "LY2K1608717547908", "financialYear": "2017"}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"payload":{"apiVersion": "2.1", "vendorId": "iBankSME", "perfiosTransactionId": "LY2K1608717547908", "financialYear": "2017"}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Success\": {\n\"fileUploadUrl\": \"https:\/\/demo.perfios.com\/KuberaVault\/insights\/api\/financial\/upload\/LY2K1608717547908\/2017\" \n}\n} ";
}