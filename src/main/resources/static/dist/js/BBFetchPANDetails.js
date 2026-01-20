
/*SampleRequestPacketJson*/
var obj = <XML><PAN>DRHPK1933B</PAN></XML>;

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = <XML><PAN>DRHPK1933B</PAN></XML>;

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = "   <XML> <UUID>PAN_20210818114655538<\/UUID> <Status>SUCCESS<\/Status> <CustDetails> <custId>558234861<\/custId> <phone\/> <status>HMOTP<\/status> <AcctDetails> <AcctId>143101502991<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558212080<\/custId> <phone\/> <status>NLOTP<\/status> <AcctDetails> <AcctId>143101502074<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <MESS>No Accounts found for CIF 558208281<\/MESS> <\/CustDetails> <CustDetails> <MESS>No Accounts found for CIF 558226474<\/MESS> <\/CustDetails> <CustDetails> <custId>558213877<\/custId> <phone\/> <status>HHOTP<\/status> <AcctDetails> <AcctId>143101502165<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558210734<\/custId> <phone\/> <status>HHOTP<\/status> <AcctDetails> <AcctId>143101501966<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558234432<\/custId> <phone\/> <status>HDOTP<\/status> <AcctDetails> <AcctId>143101502960<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558222849<\/custId> <phone\/> <status>CAOTP<\/status> <AcctDetails> <AcctId>143105000900<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <AcctDetails> <AcctId>143105000909<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <AcctDetails> <AcctId>143105000913<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <AcctDetails> <AcctId>143105000912<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558219201<\/custId> <phone\/> <status>CAOTP<\/status> <AcctDetails> <AcctId>143105000792<\/AcctId> <AcctName>RAKESH G NAYAK<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558209553<\/custId> <phone\/> <status>PSTFF<\/status> <AcctDetails> <AcctId>143101501932<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>10-06-2018<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558253291<\/custId> <phone\/> <status>MNOTP<\/status> <AcctDetails> <AcctId>143101000350<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558228669<\/custId> <phone\/> <status>HHOTP<\/status> <AcctDetails> <AcctId>143101502757<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>05-12-2017<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails> <CustDetails> <custId>558208605<\/custId> <phone\/> <status>SLOTP<\/status> <AcctDetails> <AcctId>143101501807<\/AcctId> <AcctName>WINSTON LOBO<\/AcctName> <AcctOpenDate>31-01-2018<\/AcctOpenDate> <\/AcctDetails> <\/CustDetails><\/XML>   ";
}