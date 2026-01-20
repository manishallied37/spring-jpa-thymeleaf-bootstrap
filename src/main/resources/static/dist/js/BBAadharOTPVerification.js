
/*SampleRequestPacketJson*/
var obj = {"AadharNumber": "Base64 encoded aadhar Number", "OTP": "encrypted aadhar OTP", "TranasctionIdentifier": "transaction value which is received from UIdAI", "consumerId": "consumer ref Id"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"AadharNumber": "Base64 encoded aadhar Number", "OTP": "encrypted aadhar OTP", "TranasctionIdentifier": "transaction value which is received from UIdAI", "consumerId": "consumer ref Id"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Status\": \"success\", \n\"ErrorMessage\": \"\", \n\"AadharUserInfo\": \n{ \n\t\"FullName\": \"abcd\", \n\t\"DOB\": \"26\/10\/19XX\", \n\t\"Gender\": \"male\", \n\t\"Salutation\": \"Mr\", \n\t\"Co\": \"adafdfsvffc\", \n\t\"House\": \"auyfbifb\", \n\t\"Street\": \"fafafsasfsafsaffaf\", \n\t\"Landmark\": null, \n\t\"Location\": null, \n\t\"Vtc\": null, \n\t\"SubDistrict\": \"Hyderabad\", \n\t\"District\": \"Hyderabad\", \n\t\"State\": \"Telangana\", \n\t\"Pincode\": \"500013\", \n\t\"PostOffice\": null, \n\t\"Photo\": \"\/9j\/4AAQSkZJRgABAgAAA\"\t}\n} ";
}