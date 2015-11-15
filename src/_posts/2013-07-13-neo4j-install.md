---
title: "Neo4j Install"
date: 2013-07-12
template: "post.hbs"
---

INstall:
```
brew update
brew install neo4j
neo4j start && open http://localhost:7474/webadmin/ 
```


To enable `node_auto_index`:
Add the following to the neo4j.properties file 
`/usr/local/Cellar/neo4j/community-1.9.1-unix/libexec/conf/neo4j.properties`

Modify and uncomment
```
# Autoindexing

# Enable auto-indexing for nodes, default is false
node_auto_indexing=true

# The node property keys to be auto-indexed, if enabled
node_keys_indexable=name, age, id
```

Create the auto index for nodes, go to [shel](http://localhost:7474/webadmin/#/console/shell)

neo4j-sh (0)$ index --create node_auto_index -t Node
Check if they exist

neo4j-sh (0)$ index --indexes
Should return

Node indexes:
node_auto_index


We can add sample data from [data](http://www.neo4j.org/develop/example_data)
If we run neo4j info we can find out where is installed, and from there we need to find the data dir:
`/usr/local/Cellar/neo4j/community-1.9-unix/libexec/data/graph.db`


We can use (neo4j gists)[http://gist.neo4j.org/] to share our work. Also, we can see some examples [here](https://github.com/neo4j-contrib/graphgist/wiki)


### Sublime Text 2 
There are two packages we can use:
*Cypher*, we use [package manager](http://wbond.net/sublime_packages/package_control/installation) to install.

To execute queries from withing SBT2, install [Sublime neo4j](https://github.com/sqlcook/Sublime-Neo4j), no package manager bundle so we have to do it old school way.



### Getting started
Tons of resources on the site. 
http://docs.neo4j.org/chunked/snapshot/tutorials.html
http://docs.neo4j.org/chunked/snapshot/cypher-query-lang.html
http://docs.neo4j.org/chunked/milestone/rest-api.html