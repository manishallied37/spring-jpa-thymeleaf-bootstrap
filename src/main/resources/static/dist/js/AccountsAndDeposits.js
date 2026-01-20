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