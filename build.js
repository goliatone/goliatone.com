var Librarian = require('lbr');

var collections = require('metalsmith-collections');
var tags = require('metalsmith-tags');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var snippet = require('metalsmith-snippet');
var define = require('metalsmith-define');
var appendMetadata = require('./lib/appendMetadata');
var assets = require('metalsmith-assets');
var each = require('metalsmith-each');
var css = require('metalsmith-clean-css');
var highlight = require('highlight.js');

var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');

require('./lib/hbs-partials')({
    partials:'_partials'
});


var datePattern = 'YYYY/MM/DD';

var externalWatch = require('metalsmith-external-watch');
externalWatch(build);
build();

function build(){

Librarian(__dirname)
    .source('src')
    .use(define({
        meta:{
            blog: {
                uri: 'http://goliatone.com',
                title: 'Goliatone',
                subtitle: 'Notes for self and beyond.',
                description: 'Goodbye Toto, nikko is here.'
            },
            owner: {
                uri: 'http://goliatone.com',
                name: 'Goliatone'
            }
        },
        // moment: moment
    }))

    .metadata({
        site: {
            title: "Notes",
            subtitle:"To self and beyond",
            description: "Goliatone blog on technology and rumbles"
        },
        uri:"http://goliatone.com",
        googleAnalytics:'UX-1234567-A'
    })
    .use(each(function(file, filename){
        if(filename.indexOf('txt') !== -1) return filename.replace('txt', 'md');
    }))
    .use(each(function(file, filename){
        if(file.template === 'article.html') file.template = 'post.hbs';
        if(!file.template) file.template = 'post.hbs';
    }))
    .use(each(function(file, filename){
        if(! file.hasOwnProperty('author')) file.author = 'Goliatone';
    }))
    .use(collections({
        blog: {
            pattern:'_posts/*.md',
            sortBy: 'date',
            reverse: true
        },
        projects: {
            pattern: 'projects/_posts/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(tags({
        handle  : 'tags',
        path    : 'blog/tags',
        template: './blog/tag.hbs',
        sortBy  : 'date',
        reverse : true
    }))

    .use(appendMetadata({
        datePattern: datePattern
    }))

    .use(markdown({
        gfm: true,
        tables: true,
        langPrefix:'hljs lang-',
        highlight: function(code, lang){
            if(!lang) return code;
            try {
                return highlight.highlight(lang, code).value;
            } catch(e){
                console.error('ERROR', e);
                return code;
            }
        }
    }))
    .use(permalinks({
        pattern: ':collection/:date/:title',
        date: datePattern
    }))
    .use(snippet({
        maxLength: 250,
        suffix   : '...'
    }))

    .use(templates('handlebars'))
    //metalsmith-static
    .use(assets({
        source: './public',
        destination: './assets'
    }))

    .use(css({
        files: '**/*.css',
        cleanCSS: {
            rebase: true
        }
    }))

    // .use(watch({
    //     pattern : '**/*',
    //     livereload: true
    // }))
    .use(serve({
        port: 9494,
        verbose: true
    }))

    .clean(true)
    .destination('./site')
    .build(function(err){
        if(err) throw err;
    });
}
