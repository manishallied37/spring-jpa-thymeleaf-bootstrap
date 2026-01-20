
/*SampleRequestPacketJson*/
var obj = {"folderName": "9898989", "fileDetails": [{"file": "U3VjY2VzcyBjYXNlIdo6DZSBleGNlZWRzIdMEtCLiINCn0=", "docName": "test.pdf", "docClassValue": "PAN", "folderClassValue": "KYCdoc"},{"file": " U3VjY2VzcyBjYXNlIdo6DZSBleGNlZWRzIdMEtCLiINCn0=", "docName": "test1.png", "docClassValue": "Aadhar", "folderClassValue": "KYCdoc"}]};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"folderName": "9898989", "fileDetails": [{"file": "U3VjY2VzcyBjYXNlIdo6DZSBleGNlZWRzIdMEtCLiINCn0=", "docName": "test.pdf", "docClassValue": "PAN", "folderClassValue": "KYCdoc"},{"file": " U3VjY2VzcyBjYXNlIdo6DZSBleGNlZWRzIdMEtCLiINCn0=", "docName": "test1.png", "docClassValue": "Aadhar", "folderClassValue": "KYCdoc"}]};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"FolderName\": \"9898989\", \n\"Success\": \"test.pdf\", \n\"Failure\": \"\"\n} ";
}