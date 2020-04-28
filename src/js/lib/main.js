
require.config({
    baseUrl: './',
    nodeRequire: require,
    paths: {
        jquery: '/node_modules/jquery/dist/jquery',
        underscore: '/node_modules/underscore/underscore',
        backbone: '/node_modules/backbone/backbone',
        moment: '/node_modules/moment/moment',
        template: '/node_modules/art-template/lib/template-web',
        text: '/node_modules/text/text',
        css: '/node_modules/require-css/css'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['js/lib/global.js'], () => require(['js/lib/router.js']));
