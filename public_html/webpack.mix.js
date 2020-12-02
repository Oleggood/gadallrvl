const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/css/1140_flex.css',
    'resources/css/1140_basic.css',
    'resources/css/dropdown.css',
    'resources/css/jquery.fancybox.css',
    'resources/css/layout.css',
    'resources/css/media.css',
    'resources/css/owl.carousel.css',
    'resources/css/stylesheet.css'
], 'public/css/app.css');


mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);



