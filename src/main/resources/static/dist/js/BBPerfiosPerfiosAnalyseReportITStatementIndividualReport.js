
/*SampleRequestPacketJson*/
var obj = {"transactionId": "PIZWZEK2IBBOEYBV8CXFZ", "reportFormat": "xml", "reportType": "itrv"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"transactionId": "PIZWZEK2IBBOEYBV8CXFZ", "reportFormat": "xml", "reportType": "itrv"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = "  <ITRVInfo> <ITRV fy=\"2018-19\" ay=\"2019-20\" formNo=\"ITR-4\" originalOrRevised=\"NA\"AO=\"ITO WARD 1(1), NAGPUR\" ackNo=\"951289940290819\" dateOfSubmission=\"2019-08-29\"> <PersonalDetails name=\"XYZ \" address=\"PLOT NO A-14 WATER TANK,RAM NAGAR,HILL MAHARASHTRA 440010\"pan=\"BEFPN6666D\" status=\"Individual\" aadhaarNo=\"NA\"\/> <IncomeDetails grossTotalIncome=\"501015\" deductionsUnderChapter6A=\"0\" totalIncome=\"501020\" currentYearLoss=\"0\"netTaxPayable=\"10612\" interestPayable=\"10612\" totalTaxAndInterestPayable=\"10612\" advanceTaxPaid=\"0\" tdsPaid=\"10612\" tcsPaid=\"0\"selfAssessmentTaxPaid=\"0\" totalTaxPaid=\"10612\" taxPayable=\"0\" refund=\"0\"agricultureExemptIncome=\"0\" otherExemptIncome=\"0\"\/> <\/ITRV><\/ITRVInfo> ";
}