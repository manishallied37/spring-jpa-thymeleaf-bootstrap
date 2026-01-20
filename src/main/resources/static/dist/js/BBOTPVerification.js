
/*SampleRequestPacketJson*/
var obj = {"MobileNumber": "9999988888", "TransactionIdentifier": "122132435345", "OTP": "652541"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"MobileNumber": "9999988888", "TransactionIdentifier": "122132435345", "OTP": "652541"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Transaction\":\"\", \n\"Appname\":\"\", \n\"ResponseCode\":\"000\", \n\"Deliveryaddress\":\"9999988888\", \n\"Transactionid1\":\"122132435345\", \n\"Response\": \"Success\"\n} ";
}