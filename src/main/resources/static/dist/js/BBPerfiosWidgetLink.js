
/*SampleRequestPacketJson*/
var obj = {"uuid": "0cf0451d-7bb9-4e9c-9be9-9ab6376523e6"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"uuid": "0cf0451d-7bb9-4e9c-9be9-9ab6376523e6"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"msg\": \"Success response will be in HTML format\"\n} ";
}