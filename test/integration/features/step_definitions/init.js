/* jshint node:true */
'use strict';

var apickli = require('apickli');
var request = require('request');
var qs = require("querystring");
var Promise = require("bluebird");

module.exports = function () {
    this.Before(function (scenario, callback) {
        var api_domain_name="metrobank-nonprod-dev.apigee.net";        
        this.apickli = new apickli.Apickli("https", api_domain_name + identityApi);
        callback();
    });
};

