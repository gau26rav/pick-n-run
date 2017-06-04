/*
  Install  Grunt-cli on local system globally - npm install -g grunt-cli
  install the grunt npm package in the project structure - npm install grunt --save-dev
  Difference between Grunt-cli and grunt
  -Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt
  which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same machine simultaneously.
*/

module.exports = function(grunt){

    // Sample Tasks registration
    grunt.registerTask('speaks',function(){
        console.log('Hello Message');
    });

    grunt.registerTask('hello',function(){
        console.log('Hello hello');
    });

    // Running grunt both will run both the tasks
    grunt.registerTask('both',['speaks','hello']);

    // Running grunt will run the tasks registered in the collection
    grunt.registerTask('default',['speaks']);

    // Save this snippet as grunt-war.js and run with  "grunt --gruntfile grunt-war.js war" at the command line.
// Assumes simple layout:
// -project
// --build  (The folder where the generated grunt-magic.war file will go)
// --src    (all the source code, html, etc)
// --- index.html (The file name must match up with the webxml_welcome: property below)
    var war =   {
        target: {
            options: {
                war_verbose: true,
                    war_dist_folder: 'cart-dist/cart-war',           // Folder path seperator added at runtime.
                    war_name: 'cart-dist',            // .war will be appended if omitted
                    webxml_welcome: 'index.html',
                    webxml_display_name: 'Grunt WAR'
            },
            files: [
                {
                    expand: true,
                    cwd: 'src',
                    src: ['**'],
                    dest: ''
                }
            ]
        }
    };

    // When any task is loaded then the task will check the configuration available for it in init config method
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            // options : {separator : ';'},
            js: { src:['./src/**/*.js'],
                    dest:'cart-dist/dist/shopping-cart.js',
                },
        },

        // Plugin to uglify the javascript files. ugilify can take up both the syntax for uglification i.e using files and also using src and dest
        uglify : {
            js:{
                files:{
                    'cart-dist/dist/shopping-cart.js' : ['cart-dist/dist/shopping-cart.js']
                }
            }
        },

        // these plugin will clean all the specified files and folders and in order to avoid any file or folder
        //use this syntax(the second parameter will not be cleaned)
        // dest:['./cart-dist/dist/shopping-cart.js','!./cart-dist/dist/shopping-cart.css']
        clean:{
            dest:['./cart-dist']
        },

        cssmin:{
            minigyCss : {
                files:{
                    'cart-dist/dist/shopping-cart-css-min.css' : ['./assets/**/*.css']
                }
            }
        },

        war : war
    });

    // Load the plugins to be run
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks( 'grunt-war' );
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Register the tasks to be ran using the terminal. The tasks will be executed in the same order as they are mentioned in collection.
    grunt.registerTask('default',['clean','cssmin','concat','uglify','war']);
};