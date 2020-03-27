const path = require('path');
// import path from 'path';
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('./src')).set('@c', resolve('./src/components')).set('img', resolve('./src/common/images')),
            config.plugin('html').tap((args) => {
                args[0].title = 'OA';
                return args;
            });
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
          'D:\\test-project\\src\\common\\style\\variable.scss'
        ]
      },
      i18n: {
        locale: 'zh',
        fallbackLocale: 'zh',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
