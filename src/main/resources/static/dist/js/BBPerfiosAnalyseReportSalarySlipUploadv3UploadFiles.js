
/*SampleRequestPacketJson*/
var obj = { "perfiosTransactionId": "XPJA1614170116347", "fileName": "itr.pdf", "file": "JVBERi0xLjMKJaqrrK0KNCAwIG9iago8PCAvVHlwZSAvSW5mbwovUHJvZHVjZXIgKG51bGwpID4+CmVuZG9iago2IDAgb2JqCjw8IC9MZW5ndGggMzk3MyAvRmlsdGVyIFsgIC9GbGF0ZURlY29kZSBdCiA+PgpzdHJlYW0K77ddZESDJxefbk9d9gJZwtwRa1RVmALFFr/yyyrt36B/JSJMfJBa/Ldv57q7C1uFBXIIFQPgq2mXyxPDy74Xr8Mjuyf1opSL51r4ix/w2ySO71mT1/unR6tWZu48Ee2CWjt6jlOr2p0b2aLIZmY2jDrnghAcGO56UZWYAO5ARSkOJ4aMr4d9xBovFJyRxA3A7DsMplw3jTw5i6qukhUdJ7t3Tb9pPMPPljETY41Bi8e+XXRAfSOPhHdfCoepzRcp+RCJnqvAh+UevKmN1DohHtA2KsLhXcOjRSylsEU1jdGWsl9RZUCXamxufO7q1uSlWX7CbAFv1ROfToAiva7nQsdTjQ2BMyC7+LLnE1YaE+t6G4/Nec33qb8LysYVJgyHfFD1nXZxcAKVTetIX2gbWfjauk3RZFiofHmG+b8u/5ify77z0uz1E92GaM2Vlw9pfoluhvKeYYcFYBubFvga3iURg+1kUgtuO8OOUdKy76Tip/xiKdXugX9yLc6i0Z3e3npPd9z246dmIntfrWTGo3egjLZ0OkYTEZF+QJF480KJ36f6DNWJmHXfvB+OWK" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "perfiosTransactionId": "XPJA1614170116347", "fileName": "itr.pdf", "file": "JVBERi0xLjMKJaqrrK0KNCAwIG9iago8PCAvVHlwZSAvSW5mbwovUHJvZHVjZXIgKG51bGwpID4+CmVuZG9iago2IDAgb2JqCjw8IC9MZW5ndGggMzk3MyAvRmlsdGVyIFsgIC9GbGF0ZURlY29kZSBdCiA+PgpzdHJlYW0K77ddZESDJxefbk9d9gJZwtwRa1RVmALFFr/yyyrt36B/JSJMfJBa/Ldv57q7C1uFBXIIFQPgq2mXyxPDy74Xr8Mjuyf1opSL51r4ix/w2ySO71mT1/unR6tWZu48Ee2CWjt6jlOr2p0b2aLIZmY2jDrnghAcGO56UZWYAO5ARSkOJ4aMr4d9xBovFJyRxA3A7DsMplw3jTw5i6qukhUdJ7t3Tb9pPMPPljETY41Bi8e+XXRAfSOPhHdfCoepzRcp+RCJnqvAh+UevKmN1DohHtA2KsLhXcOjRSylsEU1jdGWsl9RZUCXamxufO7q1uSlWX7CbAFv1ROfToAiva7nQsdTjQ2BMyC7+LLnE1YaE+t6G4/Nec33qb8LysYVJgyHfFD1nXZxcAKVTetIX2gbWfjauk3RZFiofHmG+b8u/5ify77z0uz1E92GaM2Vlw9pfoluhvKeYYcFYBubFvga3iURg+1kUgtuO8OOUdKy76Tip/xiKdXugX9yLc6i0Z3e3npPd9z246dmIntfrWTGo3egjLZ0OkYTEZF+QJF480KJ36f6DNWJmHXfvB+OWK" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"_body\": {\"isTrusted\": true}, \n\"status\": 0, \n\"ok\": false, \n\"statusText\": \"\", \n\"headers\":{}, \n\"type\": 3, \n\"url\": null\n} ";
}