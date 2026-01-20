
/*SampleRequestPacketJson*/
var obj = { "trackingId": "12344", "updatedDate": "2020-0208T18:48:18.188Z", "status": "Open", "product": "SavingAccount", "subProduct": "Salary" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "trackingId": "12344", "updatedDate": "2020-0208T18:48:18.188Z", "status": "Open", "product": "SavingAccount", "subProduct": "Salary" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"actCode\": 0, \n\"status\": \"success\", \n\"errorMessage\": \" \", \n\"errorCode\": 0\n} ";
}