# mean-stack-dev
Skeletal setup for making apps using MEAN stack

##Required software
=====
1. Node.js
2. Mocha
3. nodemon
4. node-inspector

##File structure
=====
.
|---app
|  |---models
|  |  |---model.js <database model for CRUD operation>
|  |---routes.js
|---config
|  |---db.js
|---node_modules
|---public <front end stuff>
|  |---css
|  |---js
|  |---img
|  |---views
|  |---index.html
|---scss <sass stuff>
|  |---styles.scss
|---.bowerrc
|---bower.json
|---package.json
|---gulpfile.js
|---server.js


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
5. testing
6. gulp automation
..*look for file change
..*compile css
..*minify css, js, html
..*testing?
