Package.describe({
  name: 'pixto:polymer-iron-elements',
  version: '0.1.0',
  summary: 'Polymer iron elements',
  git: 'https://github.com/pixto/polymer-iron-elements',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('pixto:polymer-installer@0.1.0');
  api.addFiles('install.js', 'server');
});
