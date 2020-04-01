const path = require('path');
// const isProduction = process.env.NODE_ENV === 'production';
// import path from 'path';
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: '',
        ws: true,
=======
        target: 'http://oa.jinrui.kooboo.site',
>>>>>>> 9343d59503c9e7e638ecbf8fb9f41b10a83e000e
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'element-ui': 'ELEMENT'
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@c', resolve('./src/components'))
      .set('img', resolve('./src/common/images')),
      config.plugin('html').tap(args => {
        args[0].title = 'OA';
        return args;
      });
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['./src/common/style/variable.scss']
    },
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
