/**
 * konscript - konni konni kon
 *
 * Copyright (c) 2014 James Elías
 * Based on dogescript by Zach Bruggeman <talkto@zachbruggeman.me> https://github.com/remixz/dogescript.git
 *
 * konscript is licensed under the MIT License.
 *
 * @package konscript
 * @author  James Elías <jamiees2@gmail.com>
 */

var beautify = require('js-beautify').js_beautify;

var parser   = require('./lib/parser');

module.exports = function (file, beauty, konMode) {
    if (konMode) var lines = file.split(/ {3,}|\r?\n/);
    else var lines = file.split(/\r?\n/);
    var script = '';

    for (var i = 0; i < lines.length; i++) {
        script += parser(lines[i]);
    }

    if (beauty) return beautify(script)
    else return script;
}
