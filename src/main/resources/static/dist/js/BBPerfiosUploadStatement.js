
/*SampleRequestPacketJson*/
var obj = {"payload":{"vendorId": "iBankSME", "perfiosTransactionId": "ZC6B1608717879489", "financialYear": "2020", "fileName": "Chanda Nathile.pdf", "file": "v+HtcA55hWPElNdX7OkfXyp2mIxyAwgdlAZsJ/+GpPoGNkNQdfWWyR0h3Pj5oVM4f6oxpWlJQogt+TNcbGXUG7cCkPU5kooyuOHDdTDIRe9tvw9frzhS1iYrhavv+FP6vvf1bg/XMlRLRPYH3myf/0dQHFDCDpWVOEfrmYvEW8SIiSiIT0RNM826xy8fSNxMbiZo/9ly4uuAqViXfbGVmm1J2vIcUPwpsRjPwGv7GFY4pg90PBCQTrwDDEi+LTrPoxHVJxGkXSW+J2ZUql7P9x4RwKSt9Y941pZKop29Gn9y3wOh7Dc7PLwNadj2meqBvEvr7ZeaIOJNvn5R86Mpo0jAgMjM0LjI1NSAtMTk2LjY4OF0vUmVzb3VyY2VzPDwvRm9udDw8L1RUMCA2IDAgUj4+L1B3OCAwMDAwMCBuIAowMDAwMDI5MTIwIDAwMDAwIG4gCjAwMDAwMjk0MTkgMDAwMDAgbiAKMDAwMDAyOTU4MCAwMDAwMCBuIAowMDAwMDI5ODkzIDAwMDAwIG4gCjAwMDAwMzAwNTQgMDAwMDAgbiAKMDAw=="}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"payload":{"vendorId": "iBankSME", "perfiosTransactionId": "ZC6B1608717879489", "financialYear": "2020", "fileName": "Chanda Nathile.pdf", "file": "v+HtcA55hWPElNdX7OkfXyp2mIxyAwgdlAZsJ/+GpPoGNkNQdfWWyR0h3Pj5oVM4f6oxpWlJQogt+TNcbGXUG7cCkPU5kooyuOHDdTDIRe9tvw9frzhS1iYrhavv+FP6vvf1bg/XMlRLRPYH3myf/0dQHFDCDpWVOEfrmYvEW8SIiSiIT0RNM826xy8fSNxMbiZo/9ly4uuAqViXfbGVmm1J2vIcUPwpsRjPwGv7GFY4pg90PBCQTrwDDEi+LTrPoxHVJxGkXSW+J2ZUql7P9x4RwKSt9Y941pZKop29Gn9y3wOh7Dc7PLwNadj2meqBvEvr7ZeaIOJNvn5R86Mpo0jAgMjM0LjI1NSAtMTk2LjY4OF0vUmVzb3VyY2VzPDwvRm9udDw8L1RUMCA2IDAgUj4+L1B3OCAwMDAwMCBuIAowMDAwMDI5MTIwIDAwMDAwIG4gCjAwMDAwMjk0MTkgMDAwMDAgbiAKMDAwMDAyOTU4MCAwMDAwMCBuIAowMDAwMDI5ODkzIDAwMDAwIG4gCjAwMDAwMzAwNTQgMDAwMDAgbiAKMDAw=="}};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Accepted\": {\"sha1\": \"fa2be3115d73a65d7ad349599c8a8f14c913801c\"}\n} ";
}