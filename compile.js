const fs = require('fs');

const lastBuild = Number(fs.readFileSync('.build').toString());
const filesList = fs.readFileSync('.ls').toString().trim().split('\n');

const indexTmpl = fs.readFileSync('_dev/index-tmpl.html').toString();
const entryTmpl = fs.readFileSync('_dev/entry-tmpl.html').toString();

var getNextNum = function (num) {
    var isNumberSafe = function (num) {
        if (num.toString().match(/(64|89|251|404|451|535|604|996)/)) {
            return false;
        } else {
            return true;
        };
    };
    var n = num+1;
    while (!isNumberSafe(n)) {
        n++
    }
    return n;
};


var listHtml = filesList.map(function (fn) {
    return entryTmpl.replace(/__BUILD__/g, getNextNum(lastBuild)).replace(/__FILENAME__/g, fn);
}).join('\n');

var indexHtml = indexTmpl.replace('__LIST__', listHtml).replace('__BUILD__', getNextNum(lastBuild)).replace('__DATE__', (new Date()).toString().slice(4, 24) + ' UTC');

fs.writeFileSync('./index.html', indexHtml);
fs.writeFileSync('.build', (getNextNum(lastBuild)%1000).toString());
