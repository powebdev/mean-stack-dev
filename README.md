# mean-stack-dev
Skeletal setup for making apps using MEAN stack

##Required software
=====
1. Node.js
2. nodemon
3. node-inspector
4. webpack

##File structure
=====
.
|---<app>
|---<node_modules>
|---<public>
|  |---<img>
|  |---<scripts>
|  |---<styles>
|  |---<templates>
|  |---index.html
|---<src>
|  |---<api>
|  |  |---index.js
|  |---<models>
|  |---<scss>
|  |---database.js
|  |---server.js
|---gulpfile.js
|---package.json
|---README.md
|---webpack.config.js


##Start app
This setup utilize nodemon for auto restart server when there is a file change
in a terminal run nodemon server.js

##To start debug mode
To utilize nodemon's auto restart feature for debugging:
run node-inspector in one terminal
and run nodemon --debug-brk server.js in another terminal
the --debug-brk flag allow the node-inspector to catch the debugger flag in our server.js code

##To do list
=====
1. file structure
2. server app
3. data storage
4. frontend app
6. gulp automation
..*look for file change
..*minify css, js, html
