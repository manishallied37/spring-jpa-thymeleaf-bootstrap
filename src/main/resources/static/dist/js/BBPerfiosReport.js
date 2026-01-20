
/*SampleRequestPacketJson*/
var obj = {"transactionId": "PISLFFYXMYICULWPCH7NF"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"transactionId": "PISLFFYXMYICULWPCH7NF"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"code\": \"200\", \n\"message\": \"ok\", \n\"success\": true\n} ";
}