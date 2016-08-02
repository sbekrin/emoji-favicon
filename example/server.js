/**
 * Created by rumkin on 25/09/14.
 */

var emojiFavicon = require('../src/emoji-favicon.js');
var chalk = require('chalk');

var port = process.argv[2] || process.env.npm_package_config_port || 8080;
var emoji = process.argv[3]|| process.env.npm_package_config_emoji || 'thumbsup';

var connect = require('connect');

connect()
    .use(function(req, res, next){
        res.on('finish', function(){
            var isSuccess = res.statusCode >= 200 && res.statusCode < 299;
            console.log("%s %s %s", (isSuccess ? chalk.green : chalk.grey).bold(res.statusCode), req.method, req.url);
        });
        next();
    })
    .use(emojiFavicon(emoji))
    .use(function(req, res){
        res.writeHead(200, 'OK');
        res.end('<html><head></head><body><h1>Emoji  favicon</h1><p></p></body></html>');
    })
    .listen(port);

console.log('Server is started. Go to http://localhost:%s/', port);
