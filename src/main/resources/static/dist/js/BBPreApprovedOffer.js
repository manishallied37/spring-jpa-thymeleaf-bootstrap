
/*SampleRequestPacketJson*/
var obj = {"applicationNumber": "170000005105", "CorpIdDealerId": "CIBNEXT0000000394", "source": "CF"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = {"applicationNumber": "170000005105", "CorpIdDealerId": "CIBNEXT0000000394", "source": "CF"};

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Table\": [{\n\"CorpIDDealerID\": \"CIBNEXT0000000394\", \n\"PAN\": \"AAHPLXXXXX\", \n\"TIN\": null, \n\"CIN\": null, \n\"GSTIN\": null, \n\"Address1\": null, \n\"Address2\": null, \n\"Address3\": null, \n\"Address4\": null, \n\"Address5\": null, \n\"City\": null, \n\"State\": null, \n\"PinCode\": null, \n\"OfferAmt\": 1000000, \n\"OfferTenure\": 60, \n\"MobileNo\": null, \n\"AccountNo\": null, \n\"DealerAssociationWithCorp\": null, \n\"NoOfChequeReturns\": 1, \n\"PaymentDelayDays12Months\": 2, \n\"BusinessVintageVintage\": null, \n\"PurchasesOf12Months\": null, \n\"DealersOverallScoreByCorp\": null, \n\"CorpRating\": null, \n\"DealerVendorFlag\": null, \n\"ConstitutionType\": \"Proprietorship\", \n\"MaxLimitPerCorp\": null, \n\"salesOf12Months\": null, \n\"Tenure\": 60, \n\"Rate\": null, \n\"BaseRate\": \"\", \n\"PreQualified\": \"\", \n\"Date\": \"\"\n}]\n} ";
}