var enbBemTechs = require('enb-bem-techs'),
    borschikTech = require('enb-borschik/techs/borschik'),
    postcss=require('enb-postcss/techs/enb-postcss'),
    isProd = process.env.YENV === 'production';

module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [enbBemTechs.bemjsonToBemdecl],
            // ie9.css
            [require('enb/techs/css'), {
                target: '?.ie9.css',
                sourceSuffixes: ['css', 'ie9.css']
            }],
            // bemtree
            [require('enb-bemxjst/techs/bemtree-old'), { devMode: process.env.BEMTREE_ENV === 'development' }],
            // node.js
            [require('enb-diverse-js/techs/node-js'), { target: '?.pre.node.js' }],
            [require('enb-modules/techs/prepend-modules'), {
                source: '?.pre.node.js',
                target: '?.node.js'
            }],
            // browser.js
            [require('enb-diverse-js/techs/browser-js'), { target: '?.browser.js' }],
            [require('enb/techs/file-merge'), {
                target: '?.pre.js',
                sources: ['?.browser.bemhtml.js', '?.browser.js']
            }],
            [require('enb-modules/techs/prepend-modules'), {
                source: '?.pre.js',
                target: '?.js'
            }],
            // css
            //[require('enb-stylus/techs/css-stylus'), { target: '?.noprefix.css' }],
            // bemhtml
            [require('enb-bemxjst/techs/bemhtml-old'), { devMode: process.env.BEMHTML_ENV === 'development' }],
            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [require('enb-bemxjst/techs/bemhtml-old'), {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],
            // html
            [require('enb-bemxjst/techs/html-from-bemjson')],
            // borschik
            [borschikTech, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', freeze: true, minify: isProd }],
            [borschikTech, { sourceTarget: '?.ie9.css', destTarget: '_?.ie9.css', freeze: true, minify: isProd }],
            [borschikTech, { sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets([
            '_?.css',
            '_?.ie9.css',
            '?.bemtree.js',
            '?.node.js',
            '_?.js',
            '?.bemhtml.js',
            '?.html'
        ]);
    });

    config.nodes('*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getDesktops(config) }],
            // autoprefixer
            /*[require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['last 2 versions', 'ie 10', 'ff 24'],
                sourceTarget: '?.noprefix.css'
            }]*/
            [postcss, {
                sourcemap : true,
                plugins : require('./postcss-plugins')
            }]
        ]);
    });

    /*config.nodes('*touch-pad.bundles/!*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getTouchPads(config) }],
            // autoprefixer
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['android 4', 'ios 5'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

    config.nodes('*touch-phone.bundles/!*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getTouchPhones(config) }],
            // autoprefixer
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['android 4', 'ios 6', 'ie 10'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });*/

};

function getDesktops(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        { path: 'libs/bem-grid/common.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}

function getTouchPads(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/touch.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/touch.blocks', check: false },
        { path: 'libs/bem-components/design/touch.blocks', check: false },
        { path: 'libs/bem-components/design/touch-pad.blocks', check: false },
        'common.blocks',
        'touch.blocks',
        'touch-pad.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}

function getTouchPhones(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/touch.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/touch.blocks', check: false },
        { path: 'libs/bem-components/design/touch.blocks', check: false },
        { path: 'libs/bem-components/design/touch-phone.blocks', check: false },
        'common.blocks',
        'touch.blocks',
        'touch-phone.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}
