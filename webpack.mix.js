const mix = require('laravel-mix');
const baseUrl = "laravel-quasar.test"

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

mix.webpackConfig(webpack => {
    return {
        module: {
            rules: [{
                test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
                use: [{
                    loader: require.resolve('file-loader'),
                    options: {
                        esModule: false
                    }
                }]
            }]
        }
    };
});

mix.disableSuccessNotifications();

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/css/quasar.variables.scss', 'public/css')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .version()

mix.browserSync({
    proxy: `https://${baseUrl}`,
    host: baseUrl,
    port: 442,
    open: 'external'
});


// mix
// .copy('quasar-barwasa/dist/spa/index.html', 'resources/views/app.blade.php')
// .copyDirectory('quasar-barwasa/dist/spa', 'public');
