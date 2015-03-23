var slug = require('slug-component'),
    moment = require('moment'),
    _ = require('underscore');

function appendMetadata(config) {
    return function (files, lbr, done) {
        var metadata = lbr.metadata();

        //TODO: Consolidate how we gather tags!
        //redo simple array, and metadata.collections.tags
        var tags = [];
        metadata.tags = {};

        var append = function (collectionItem, urlPrefix) {
            var slugVal = slug(collectionItem.title);
            var datePart = moment(collectionItem.date).utc().format(config.datePattern);

            collectionItem.url = urlPrefix + datePart + '/' + slugVal;

            _.each(collectionItem.tags, function (iTag) {
                tags.push(iTag);

                if(!metadata.tags.hasOwnProperty(iTag)){
                    metadata.tags[iTag] = {
                        label: iTag,
                        posts:[]
                    };
                }
                metadata.tags[iTag].posts.push(collectionItem);
            });
        };

        var BLOG_TOP_N = 3;
        var PROJECTS_TOP_N = 3;
        var i = 0;
        var j = 0;

        metadata.blog.pinned = [];
        metadata.blog.forEach(function (_post) {
            append(_post, '/blog/');

            if (i < BLOG_TOP_N) {
                ++i;
                metadata.blog.pinned.push(_post);
            }
        });

        metadata.projects.pinned = [];
        metadata.projects.forEach(function (_post) {
            append(_post, '/projects/');

            if (j < PROJECTS_TOP_N) {
                ++j;
                metadata.projects.pinned.push(_post);
            }
        });

        metadata.collections.tags = _.uniq(tags);

        done();
    };
}

module.exports = appendMetadata;