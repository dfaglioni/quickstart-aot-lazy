var rimraf = require('rimraf');

rimraf.sync('./aot');
rimraf.sync('./dist');
rimraf.sync('./app/**/*.js');
rimraf.sync('./app/**/*.js.map');
rimraf.sync('./app/**/*.ngfactory.*');
rimraf.sync('./app/**/*.ngfactory');
rimraf.sync('./app/**/*.ngsummary.json');
