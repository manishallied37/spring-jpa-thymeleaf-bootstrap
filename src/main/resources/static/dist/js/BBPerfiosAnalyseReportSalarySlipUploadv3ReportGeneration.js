
/*SampleRequestPacketJson*/
var obj = { "transactionId": "PIZWZEK2IBBOEYBV8CXFZ", "reportFormat": "xml", "reportType": "itrv" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "transactionId": "PIZWZEK2IBBOEYBV8CXFZ", "reportFormat": "xml", "reportType": "itrv" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"ITRVInfo\": {\"ITRV\": {\"PersonalDetails\" : {\"_name\": \"XYZ \",\n\"_address\": \"PLOT NO A-14 WATER TANK,RAM NAGAR,HILL MAHARASHTRA 440010\",\n\"_pan\": \"BEFPN6666D\",\n\"_status\": \"Individual\",\n\"_aadhaarNo\": \"NA\"},\n\"IncomeDetails\": {\"_grossTotalIncome\": \"501015\",\n\"_deductionsUnderChapter6A\": \"0\",\n\"_totalIncome\": \"501020\",\n\"_currentYearLoss\": \"0\",\n\"_netTaxPayable\": \"10612\",\n\"_interestPayable\": \"10612\",\n\"_totalTaxAndInterestPayable\": \"10612\",\n\"_advanceTaxPaid\": \"0\",\n\"_tdsPaid\": \"10612\",\n\"_tcsPaid\": \"0\",\n\"_selfAssessmentTaxPaid\": \"0\",\n\"_totalTaxPaid\": \"10612\",\n\"_taxPayable\": \"0\",\n\"_refund\": \"0\",\n\"_agricultureExemptIncome\": \"0\",\n\"_otherExemptIncome\": \"0\"},\n\"_fy\": \"2018-19\",\n\"_ay\": \"2019-20\",\n\"_formNo\": \"ITR-4\",\n\"_originalOrRevised\": \"NA\",\n\"_AO\": \"ITO WARD 1(1), NAGPUR\",\n\"_ackNo\": \"951289940290819\",\n\"_dateOfSubmission\": \"2019-08-29\"}\n}\n} ";
}