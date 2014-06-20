Package.describe({
  name: "meteor-pathwatcher",
  version: "1.0.1"
});

Npm.depends({"pathwatcher": "1.3.2"});

Package.on_use(function (api) {
  api.add_files('pw.js', 'server');
});
