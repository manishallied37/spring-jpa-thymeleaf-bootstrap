
/*SampleRequestPacketJson*/
var obj = {"RelationNumber": "0017010", "ProductCode": "PLSELECT"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"RelationNumber": "0017010", "ProductCode": "PLSELECT"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"NewDataSet\":{\n\"Table\":{\n\"AccountNumber\": \"00170XXXXXXXX\", \n\"UnsecuredExposure\": \"0\", \n\"PanVerifiedFlag\": \"\", \n\"AddWaiver\": \"\", \n\"IncomeProofWaiver\": \"\", \n\"MaximumLoanAmount\": \"100000\", \n\"PDDWaiver\": \"\", \n\"KYCWaiver\": \"Y\", \n\"DestProd\": \"Credit Card\", \n\"ExistingCardHolder\": \"\", \n\"BankStatmentwaiver\": \"\", \n\"EmployerName\": \"xxxxxxxx\", \n\"RelationType\": \"Bank Account\", \n\"Multiplier\": \"1400\", \n\"ResiFIWaiver\": \"\", \n\"CorporateTag\": \"\", \n\"PolicyCode\": \"\", \n\"SourceProd\": \"Liability\", \n\"MaximumTenure\": \"MaximumTenure\", \n\"BCCPolicyFlag\": \"\", \n\"AssessedIncome\": \"0\", \n\"DOB\": \"27\/11\/1981\", \n\"Mobile\": \"\", \n\"MaxEMI\": \"\", \n\"IsJointAccount\": \"IsJointAccount\", \n\"CustName\": \"ABC XYZ\", \n\"CIBILwaiver\": \"\", \n\"BankingScore\": \"BankingScore\", \n\"MEC_Score\": \"0\", \n\"OfficeFIWaiver\": \"\", \n\"SPOFlag\": \"Y\", \n\"ADB\": \"0\"\n}\n}\n} ";
}