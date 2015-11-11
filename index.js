'use strict';

var rulesConfiguration = require('eslint-plugin-angular/rules/utils/rulesConfiguration.js');
var glob = require('glob');
var _ = require('lodash');

var filePaths = glob.sync(__dirname + '/../eslint-plugin-angular/rules/*.js');

_.map(filePaths, function(filePath){ return  filePath.replace(/^.*eslint-plugin-angular\/rules\/(.*).js.*$/mg, "$1");})
    .forEach(function(rulesName){rulesConfiguration.addRule(rulesName,0);});

module.exports = rulesConfiguration.moduleExports();
