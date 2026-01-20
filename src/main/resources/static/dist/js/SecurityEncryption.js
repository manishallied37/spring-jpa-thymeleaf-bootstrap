/*SampleRequestPacketJson*/
var obj = { "MobileNumber": "9028901234", "deviceId": "84521654864312", "seqNumber": "ef1e92b4a01d4618a0eca5fdecc37ff23f3", "channelcode": "ImoXXXX" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('SampleRequestPacketJson').value;
document.getElementById('SampleRequestPacketJson').value = pretty;



/*RequestJson*/
var obj = { "MobileNumber": "9028901234", "deviceId": "84521654864312", "seqNumber": "ef1e92b4a01d4618a0eca5fdecc37ff23f3", "channelcode": "ImoXXXX" };

var pretty = JSON.stringify(obj, undefined, 2);

var ugly = document.getElementById('RequestJson').value;
document.getElementById('RequestJson').value = pretty;


document.getElementById('submitTest').onclick = function() {
	document.getElementById('ResponseJson').innerHTML = " {\n\"requestId\": \"\", \n\"service\": \"\", \n\"encryptedKey\": \"C7SDvmadwTLizYaRE4a9EJXtjZxV04OOkoZqXOa5EJRyW9JZtjyHA1l1OnQB\/u9ddfBpsLfsaG2jykaDGQjVX7jAsaQkBSt2QcG4+zqeWyMDJnqPCdwhMytnX6\/S2c5TjMYlwzt4l6pPvKbbgVszAI2ghW2N9FWOZbHEfBeM5w6UGPCiBRV3WcYAupoNgNY5Y2TwolWPKJHWAsm0OaK7k2WXxF7r2k9Ns4\/4Iqko9uASXq9r7OzcT9XuUjwlLGkolQXXVBU0g3io2X2J9jcfXpjIB9tlXPCopUWkJhElJrUv5qrBmfFsfDIybvBT6iCc01t\/NQIZFzE6FULnEpnm1ceKlXuIanQGGO5VfzQ04NcSeZO4UlXXNMAe++N3E1Jnvvi\/ gQBVLf7TA2Uxr9664AbyO1\/ zxJYZuMiE21zzXS7GV+0DsT5xq1IIytaZMKbIDPRGxHA77VS+qcmnQMHh65I5oVaNPbIhhe+GfwegrHP slCgS+8FkZ2D6nFEWgTUo1lpIE3LbP2i8da4mFWYmKQeiGAeZ9EHIj8sPXYqNOy3prZq+VibNrTAkSNjc 7xe3GnbhdWgPQyv\/\/WPYxLAz6F\/PX6BiACpe0a5+QRQ+WIcUSdRbc2v3IxzmrpVZK+5xDqsC20frzknIzvhXHwEW\/ u3CwwG4FlfnJzih54v1arA=\", \n\"oaepHashingAlgorithm\": \"NONE\", \n\"iv\": \"\", \n\"encryptedData\": \"3wjsUYmYjjXzwXz+CgpVD9e8N0sHydhSs+\/4TxnFs3LFjTxypN8lyir99N+9DbVzfgodGI+tEt2xnM7PPD Z\/Gg==\", \n\"clientInfo\": \"\", \n\"optionalParam\": \"\"\n} ";
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