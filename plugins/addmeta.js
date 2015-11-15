var extname = require('path').extname;
var dirname = require('path').dirname;
var basename = require('path').basename;
var parser = require('json2yaml');
var Title = require('to-title');
// var debug = require('debug')('librarian-frontoto');

var DEFAULTS = {
    extension:'.yaml',
    template: 'post.hbs'
};

function plugin(options){

    options = options || DEFAULTS;

    return function(files, lbr, done){
        setImmediate(done);

        Object.keys(files).forEach(function(filename){
            if(!txt(filename)) return;
            var data = files[filename];
            var str = data.contents.toString();
            var format = str.match(/^(---[\s]*?)?title:/m) || [];

            if(format.length) return;

            var date = makeDate(data),
                outputName = makeOutputName(filename, date, options);

            var meta = {
                title: makeTitle(filename),
                date: date,
                template: options.template,
            };

            var header = makeHeader(meta),
                contents = header +'---\n\n' + str;

            data.contents = new Buffer(contents);
            console.log(meta.title)

            delete files[filename];
            files[outputName] = data;
        });
    };
}

function makeOutputName(filename, date, options){
    var dir = dirname(filename),
        outputName = basename(filename, extname(filename)) + options.extension;

    if (!outputName.match(/^[\d]{4}-[\d]{1,2}-[\d]{2}/)) {
        outputName = date + '-' + outputName;
    }

    if(dir !== '.') outputName = dir + '/' + outputName;

    return outputName;
}

function makeDate(data){
    var date = new Date(data.stats.birthtime);
    var month = date.getMonth() + 1;
    try{
        month = month < 10 ? ('0' + month) : month;
    }catch(e){
        console.log(e);
    }
    return date.getFullYear() + '-' + month + '-' + date.getDate();
}

function makeHeader(out){
    var meta = [];
    var parsed = parser.stringify(out);
    var lines = parsed.split('\n');
    lines.forEach(function(line){
        //yaml outputs two spaces that break front-matter.
        var clean = line.trimLeft();
        //yaml outputted our date as a string, move back to object.
        if(clean.match(/date:/)) clean = clean.replace(/"/g, '');
        meta.push(clean);
    });
    return meta.join('\n');
}

function makeTitle(filename){
    return Title(basename(filename, extname(filename)));
}

function txt(filename){
    // console.log(filename);
    return true
    return /\.txt|\.md|\.yaml|\.yml/.test(extname(filename));
}

module.exports = plugin;
