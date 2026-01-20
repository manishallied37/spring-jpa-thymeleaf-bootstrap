
/*SampleRequestPacketJson*/
var obj = { "Authentication":   "Type": "OnDemand", "UserId": "ICICIxUAT", "Password": "Upass@IC20" }, "RequestInfo":   "SolutionSetId": 52",  "SolutionSetVersion": "1",  "ExecutionMode": 3 } ,  "Fields": [{ "Key": "ExternalApplicationId", "Value": "1609941830794" }, { "Key": "TUAdditionalData", "Value": "<TUAdditionalData> <ReferenceID/> </TUAdditionalData>" },   "Key": "Applicant",  "Value": "<Applicant> <AddressCity>CHARLOTTETOWN</AddressCity> <AddressLine1/> <AddressLine2/> <AddressPhoneNumber/> <AddressStProv>PE</AddressStProv> <AddressZipPostal>C1A1P9</AddressZipPostal> <BirthDate>09/07/1960</BirthDate> <CreditCard/> <EmployerName/> <FirstName>CLAUDIO</FirstName> <HouseNumber/> <LastName>KINSINGER</LastName> <Occupation/> <ParsedAddrAptNum/> <ParsedAddrStName>28 MAIN STREET</ParsedAddrStName> <ParsedAddrStNum/> <Email/> <SIN>745615245</SIN> </Applicant>" },  {   "Key": "messageType", "Value": "T" }  { "Key": "SessionID", "Value": "Trustev SessionId if Applicable"  }, { "Key": "Language"  "Value": "en-CA" } ]  };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "Authentication": { "Type": "OnDemand", "UserId": "ICICIxUAT", "Password": "Upass@IC20" }, "RequestInfo": { "SolutionSetId": "52", "SolutionSetVersion": "1", "ExecutionMode":   }, "Fields": [{ "Key": "ExternalApplicationId"  "Value": "1609941830794" }, { "Key": "TUAdditionalData"  "Value": "<TUAdditionalData> <ReferenceID/> </TUAdditionalData>" },  { "Key": "Applicant", "Value": "<Applicant> <AddressCity>CHARLOTTETOWN</AddressCity> <AddressLine1/> <AddressLine2/> <AddressPhoneNumber/> <AddressStProv>PE</AddressStProv> <AddressZipPostal>C1A1P9</AddressZipPostal> <BirthDate>09/07/1960</BirthDate> <CreditCard/> <EmployerName/> <FirstName>CLAUDIO</FirstName> <HouseNumber/> <LastName>KINSINGER</LastName> <Occupation/> <ParsedAddrAptNum/> <ParsedAddrStName>28 MAIN STREET</ParsedAddrStName> <ParsedAddrStNum/> <Email/> <SIN>745615245</SIN> </Applicant>" }, { "Key": "messageType", "Value": "T" }  { "Key": "SessionID", "Value": "Trustev SessionId if Applicable" }, { "Key": "Language", "Value": "en-CA" }] };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"Authentication\": { \n\"Status\": \"Success\", \n\"Token\": \"67f85afb-ab3e-4a8d-acc0-bf2d837be37c\" }, \n\"ContextData\": [{ \n\"Key\": \"AlertsRisk\", \n\"Value\": \"Low\" \n}, \n{\"Key\": \"AlertsScore\", \n\"Value\": \"0\" \n}, \n{\"Key\": \"Decision\", \n\"Value\": \"PASS\" \n},\n{\"Key\": \"EBVSIDRemarks\", \n\"Value\": \"<object>\\r\\n<UserReference>1609941830794<\/UserReference>\\r\\n<UniqueID>000000035308<\/UniqueID>\\r\\n<AMLBureau>Y<\/AMLBureau>\\r\\n<AMLDirserv>\\r\\n<\/AMLDirserv>\\r\\n<BureauHit>Y<\/BureauHit>\\r\\n<FraudFlag>N<\/FraudFlag>\\r\\n<LastName>Y<\/LastName>\\r\\n<FirstName>Y<\/FirstName>\\r\\n<MiddleName>X<\/MiddleName>\\r\\n<Civic>Y<\/Civic>\\r\\n<Street>Y<\/Street>\\r\\n<Apt>Y<\/Apt>\\r\\n<City>Y<\/City>\\r\\n<Prov>Y<\/Prov>\\r\\n<Postal>Y<\/Postal>\\r\\n<Telephone>M<\/Telephone>\\r\\n<DOB>Y<\/DOB>\\r\\n<SIN>Y<\/SIN>\\r\\n<AMLLastName>\\r\\n<\/AMLLastName>\\r\\n<AMLFirstName>\\r\\n<\/AMLFirstName>\\r\\n<AMLMiddleName>KAREEM <\/AMLMiddleName>\\r\\n<AMLCity>\\r\\n<\/AMLCity>\\r\\n<\/object>\\r\\n\"}, \n{ \n\"Key\": \"EBVSIDResult\", \n\"Value\": \"Pass\" \n}, \n{\"Key\": \"EBVSRemarks\", \n\"Value\": \"\"} , \n{\"Key\": \"EBVSResult\", \n\"Value\": \"\"}, \n{\"Key\": \"EDIRSMatch\", \n\"Value\": \"\"}, \n{\"Key\": \"EDIRSRemarks\", \n\"Value\": \"\"}, \n{\"Key\": \"ErrorCode\", \n\"Value\": \"\"}, \n{\"Key\": \"ErrorMessage\", \n\"Value\": \"\"}, \n{\"Key\": \"ExternalApplicationId\", \n\"Value\": \"1609941830794\"}, \n{\"Key\": \"HRFAAlertCode\", \n\"Value\": \"<HRFAAlertCodes\/>\"}, \n{\"Key\": \"IDMismatchAlertCode\", \n\"Value\": \"\"}, \n{\"Key\": \"OtherAlertCode\", \n\"Value\": \"\"}, \n{\"Key\": \"TEResponse\", \n\"Value\": \"\"}, \n{\"Key\": \"ApplicationId\", \n\"Value\": \"\"}], \n\"ErrorInfo\": null, \n\"ExceptionInfo\": null, \n\"ResponseInfo\":{ \n\"ApplicationId\": 626952, \n\"CurrentQueue\": null, \n\"SolutionSetInstanceId\": \"0c25635c-df63-4c0c-8c3a-3c804c27db9a\"}, \n\"Status\": \"Success\"\n} ";
}

