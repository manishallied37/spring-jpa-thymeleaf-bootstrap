
/*SampleRequestPacketJson*/
var obj = { "vendorId": "iBank", "clientTransactionId": "TEWTPNU46S", "gstNumberList": ["24AROPP8852E1ZD"], "dataFetchMode": "API", "redirectUrl": "https://www.google.com", "transactionCompleteUrl": "https://www.example.com", "productType": "Default" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "vendorId": "iBank", "clientTransactionId": "TEWTPNU46S", "gstNumberList": ["24AROPP8852E1ZD"], "dataFetchMode": "API", "redirectUrl": "https://www.google.com", "transactionCompleteUrl": "https://www.example.com", "productType": "Default" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"success\": true, \n\"transactionId\": \"PGIDIZV9BMAVZUWVHLWF6\", \n\"url\": \"https:\/\/apidemo.perfios.com\/KYCServer\/api\/gst\/v2\/widget\/iBank\/PGIDIZV9BMAVZUWVHLWF6\"\n} ";
}