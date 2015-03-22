var fs = require('fs');
var glob = require('glob');
var path = require('path');

var Handlebars = require('handlebars');

var partials = path.join(process.env.PWD, 'templates', 'partials', '*.hbs');

function loadPartials(Handlebars){
    return function (err, files) {
        if(err) throw err;

        function loadPartial(filepath){
            return fs.readFileSync(filepath).toString();
        }

        files.forEach(function(filename){
            try {
                var template = loadPartial(filename);
                var partialName = path.basename(filename, '.hbs');
                Handlebars.registerPartial(partialName, template);
            } catch(e) {
                throw e;
            }
        });
    };
}

module.exports = function(){
    glob(partials, loadPartials(Handlebars));
};
