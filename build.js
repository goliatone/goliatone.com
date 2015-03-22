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

var Handlebars = require('handlebars');
var moment = require('moment');
Handlebars.registerHelper('shortDate', function(date){
    return moment(date).utc().format('MMM D, YYYY');
});

require('./lib/hbs-partials')();


var datePattern = 'YYYY/MM/DD';

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
            pattern: 'projects/_posts/*.html',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(tags({
        handle  : 'tags',
        path    : 'blog/tags',
        template: './blog-tag.hbs',
        sortBy  : 'date',
        reverse : true
    }))

    .use(appendMetadata({
        datePattern: datePattern
    }))

    .use(markdown())
    .use(permalinks({
        pattern: ':collection/:date/:title',
        date: datePattern
    }))
    .use(snippet({
        maxLength: 250,
        suffix   : '...'
    }))

    .use(templates('handlebars'))

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

    .clean(true)
    .destination('./site')
    .build(function(err){
        if(err) throw err;
    });
