
/*SampleRequestPacketJson*/
var obj = { "firstName": "GURMEET ", "lastName": "KAUR", "partnerCustomerId": "19346677756730", "socialIdentifier": "FJZPK5315M", "identityProofType": "TaxId", "telephoneNumber": "9964197592", "agreementDateTime": "06/04/2021", "dob": "10/01/1979", "email": "abc@xyx.com", "address1": "VPO BANGI RUGHU", "address2": "BATHINDA", "address3": "BATHINDA", "offerId": "ICICIBANK01", "zipCode": "151301", "state": "Punjab", "city": "BATHINDA", "gender": "Female" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "firstName": "GURMEET ", "lastName": "KAUR", "partnerCustomerId": "19346677756730", "socialIdentifier": "FJZPK5315M", "identityProofType": "TaxId", "telephoneNumber": "9964197592", "agreementDateTime": "06/04/2021", "dob": "10/01/1979", "email": "abc@xyx.com", "address1": "VPO BANGI RUGHU", "address2": "BATHINDA", "address3": "BATHINDA", "offerId": "ICICIBANK01", "zipCode": "151301", "state": "Punjab", "city": "BATHINDA", "gender": "Female" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"body\": {\"isTrusted\": true}, \n\"status\": 0, \n\"ok\": false, \n\"statusText\": \"\", \n\"headers\":{}, \n\"type\": 3, \n\"url\": null \n} ";
}