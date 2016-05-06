Package.describe({
  name: 'stephenwilley:polymer-paper-elements',
  version: '0.1.0',
  summary: 'Polymer paper elements',
  git: 'https://github.com/stephenwilley/polymer-paper-elements',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('stephenwilley:polymer-installer@0.1.0');
  api.addFiles('install.js', 'server');
});
