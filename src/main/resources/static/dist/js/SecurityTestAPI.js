
/*SampleRequestPacketJson*/
var obj = { "requestId": "", "service": "", "encryptedKey": "GRt+SSzFSp0CTzjea6wfso9OPT68hfQWJTX9pWv2/+pGquoYNKua86pJwYDYpLcskJPnsXfv++mD+6n7mZxwagF+QlrH6HuQd/ZpnsS3Wh3M+IkGE+Q8ZjBNnrEDRs0BRNWWN8tEnKHFPvPOMDBEhAFHBAHvVE4SbccfPAcUZ9Dw7VbhkTCeTK6Wqnzv5SmDjMXj8Xf/OBuEXnbR+XQlz9CBMDUzHa2tNIGeqpEGzRLF2ulPwu1srdkVBbEGNydu+HuyeM75YdZCjFSPlanZC1OfNbH79AEAq2ZC3TAN1zgWEx1RcZAUEk/wDJJ/G64Ai7Uq9cW2YuTYRaMsHqwb3tb+0LMDwQjhxkx/fAB7uEDhX5e+rk0dZdtoA5IbQP4ZH6ScpeJgSoRtWr2Wt/m/IcBsXLwqNFWTdFEGgebgSzfc7raDvN4xGPTWG8Rd9+eNM7bsg8u4/zdFrdpNQnoWTCmawY1OmOvEsHJmT7oCL3duFat3qQu3c6agyeq+PHdml/zpkOSLwqSpqgJXuc3uC9/lFxWp5UfgrnmDHAl6bytsq77UoILxDbD1gE7ePMNi/WRAe1TDFUfExiws6mADLthGwq5bwIPBnlnTM9GUdO0Cmf2aSnxS+nFs5N7a0MtzcJoFIFjBzJ2lpQCiF37OALcnmC1RSiO3aEwxuFsXV1c=", "oaepHashingAlgorithm": "NONE", "iv": "", "encryptedData": "qbsekt+FclCg7QN/q6NPL66AsYxNR+/vLWb9gu+JZX/7in5RaaZaxq4mw5JMQLRLpEEJj7UFHpHBX93R47X27RR3ujtJve6Wf/6siSqLUnky/viSWQ8cAbIwqGCiuMuWbx4MiX8WPbRToVr8mth8UP5jm+oTNVghcJexXQ/uyPNiztDxKmBV+alrSrLpnAJv0hRz/bozDhxS1zyEt+voQjHIZjYHK8buVfgFhQrJN5U=", "clientInfo": "", "optionalParam": "" }

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "requestId": "", "service": "", "encryptedKey": "GRt+SSzFSp0CTzjea6wfso9OPT68hfQWJTX9pWv2/+pGquoYNKua86pJwYDYpLcskJPnsXfv++mD+6n7mZxwagF+QlrH6HuQd/ZpnsS3Wh3M+IkGE+Q8ZjBNnrEDRs0BRNWWN8tEnKHFPvPOMDBEhAFHBAHvVE4SbccfPAcUZ9Dw7VbhkTCeTK6Wqnzv5SmDjMXj8Xf/OBuEXnbR+XQlz9CBMDUzHa2tNIGeqpEGzRLF2ulPwu1srdkVBbEGNydu+HuyeM75YdZCjFSPlanZC1OfNbH79AEAq2ZC3TAN1zgWEx1RcZAUEk/wDJJ/G64Ai7Uq9cW2YuTYRaMsHqwb3tb+0LMDwQjhxkx/fAB7uEDhX5e+rk0dZdtoA5IbQP4ZH6ScpeJgSoRtWr2Wt/m/IcBsXLwqNFWTdFEGgebgSzfc7raDvN4xGPTWG8Rd9+eNM7bsg8u4/zdFrdpNQnoWTCmawY1OmOvEsHJmT7oCL3duFat3qQu3c6agyeq+PHdml/zpkOSLwqSpqgJXuc3uC9/lFxWp5UfgrnmDHAl6bytsq77UoILxDbD1gE7ePMNi/WRAe1TDFUfExiws6mADLthGwq5bwIPBnlnTM9GUdO0Cmf2aSnxS+nFs5N7a0MtzcJoFIFjBzJ2lpQCiF37OALcnmC1RSiO3aEwxuFsXV1c=", "oaepHashingAlgorithm": "NONE", "iv": "", "encryptedData": "qbsekt+FclCg7QN/q6NPL66AsYxNR+/vLWb9gu+JZX/7in5RaaZaxq4mw5JMQLRLpEEJj7UFHpHBX93R47X27RR3ujtJve6Wf/6siSqLUnky/viSWQ8cAbIwqGCiuMuWbx4MiX8WPbRToVr8mth8UP5jm+oTNVghcJexXQ/uyPNiztDxKmBV+alrSrLpnAJv0hRz/bozDhxS1zyEt+voQjHIZjYHK8buVfgFhQrJN5U=", "clientInfo": "", "optionalParam": "" }

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;



/*submitTest*/
document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"requestId\": \"\",\n\"service\": \"\",\n\"encryptedKey\":\"EzBAAMIFLIPl3r1iBHFBctQP+59y26taDK\/UQqMZSSP03IDD64MyItABf\/oS6\/p7wFYHU2ABJ6AoT8br8zY1uvdAX3iNowsisxxcG5X+lLVkUltE1GUABOtUmm1knNHfefafbtqHIWWOtJnYtan5NVt+S09dvwW85Di5HJqM\/1eEtisP0EfDp1dVyJuinvZLOTNhkmwcyCxFS16g6Rt5mu4RZmudu\/\/qduuVM10cIsJZjuximMEWLOgWRIcNPQ9iB7NvSOgNJD6YGhR\/vylPuwrLuho7u31h052jzW76FXw0VPIYYExfPxEVxtMQRzzxB84CZhV08EuflrDUgdS0jxbLHn2jZuSodVb6yBWTAdm4hKmS+ksDjs+263I4fh+lzzrBH9W9ZwHFK+xto7oWfrYfotSRpq1by1aaSxSj5M2cNLWJNEs355Cq6M2AKY5iSUz9D55WoqJi19wKVtsKQ\/asEovukhtEuQaGG3Mbq9x+rZ5MA8OtcOzj\/LjHmpW6ko63h12qv0d37iFqdowVo+0eMcluVo5znZPlL9e5GH9pZ7hUx14\/IpKLSPurIoxz0zCi14XdilVgAgUT9HvwD74RQWaVKv1rLTEdjNvS6mF1i7d8XceiRJuYAJa4Au\/XeQQfrP+ztSwl8Wix+8a0Fivcz+oA7G9GxzG8K6dBRz0=\",\n\"oaepHashingAlgorithm\": \"NONE\",\n\"iv\": \"\",\n\"encryptedData\":\"O04x\/rIcqDS3APZ0NJSRcVmS2Fp48bamaITatB+1MlU46da\/BRMGIg1xQA4hh7E8i4pXpLPsDn08sQZlbQz5qSC0L4Urw3RP7Gj2yyS68raFnYR4YyiZQygRO53jszId+AQkvGQ5k44FaWyC+KPZqGR8sGpkpXw3tkHqDTRW9CCjjYqQt4HR90PrKmxM7O0uZAlElRCzPEYOS1\/mTKp\/gHBcwpfAY7edGw5EUzFNKDL+GknJptOR8KSSca3cAY9w\",\n\"clientInfo\": \"\",\n\"optionalParam\": \"\"\n} ";
}




window.onload = function () {

  function findSwaggerSpec(menus, route) {
    for (var i = 0; i < menus.length; i++) {
      var menu = menus[i];

      if (menu.route === route && menu.jsonContent) {
        return menu.jsonContent;
      }

      if (menu.children && menu.children.length > 0) {
        for (var j = 0; j < menu.children.length; j++) {
          var child = menu.children[j];
          if (child.route === route && child.jsonContent) {
            return child.jsonContent;
          }
        }
      }
    }
    return null;
  }

  var data = findSwaggerSpec(NAV_MENUS, CURRENT_ROUTE);

  if (!data) {
    document.getElementById("swagger-ui").innerHTML =
      "<h3>No Swagger spec available for this menu</h3>";
    return;
  }

  var spec = null;
  var isWadl = false;

  try {
    spec = JSON.parse(data);
  } catch (e) {}

  if (!spec) {
    try {
      spec = jsyaml.load(data);
    } catch (e) {}
  }

  if (!spec && data.trim().startsWith("<")) {
    isWadl = true;
  }

  if (isWadl) {
    var container = document.getElementById("swagger-ui");
    container.innerHTML =
      "<h3>WADL detected</h3>" +
      "<p>Swagger UI does not support WADL.</p>" +
      "<pre style='white-space: pre-wrap;'>" +
      escapeHtml(data) +
      "</pre>";
    return;
  }

  var ui = SwaggerUIBundle({
    spec: spec,
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}