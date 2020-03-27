const path = require('path');
// import path from 'path';
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias.set('@',resolve('./src')).set('@c',resolve('./src/components')).set('img',resolve('./src/common/images')),
        config.plugin('html').tap((args) => {
            args[0].title = 'OA';
            return args;
        });
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
            path.resolve(__dirname, 'src/common/style/variable.scss'),
        ]
      }
    }
}
