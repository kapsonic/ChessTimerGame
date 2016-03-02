#Damco Solutions - POC

To showcase this demo, **dist_offline** folder can be used, this folder contains precompiled code files.

###Technologies and tools used

* ES6
* Babel gulp extension to compile ES6 files (*you can also use bable-cli to do so, Please use babel_compile.sh to manually compile the js files*).
* gulp as task runner
* Mocha for writing unit test cases

###Build Instructions for Basic Demo without installing required tools

To build basic demo if tools like *npm, bower etc* are not to be installed, Please do

    source babel_compile.sh

This will create a new **dist_offline** folder and then **dist_offline/index.html** can be loaded to see the working app.

###Build instruction

To build js files, you can use babel_compile script. You ll need babel-cli to do so.

To build the project, following are required
* npm
* Bower
* Gulp

After installing please run the following commands:

    npm install
    bower install

Once all the dev dependencies are installed you can start the inbuilt server, to do so
    gulp build
    gulp serve

To run the unit test cases,

    gulp serve:test
