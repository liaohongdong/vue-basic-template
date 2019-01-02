const path = require('path')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue/' : '/',
  css: {
    loaderOptions: {
      css: {},
      sass: {
        // data: `@import "@/variables/var.scss";`
      },
      stylus: {
        // import: path.resolve(__dirname, './src/variable/var.styl')
      },
      less: {
        // globalVars: {
        //   color: '#ccc'
        // }
      },
      postcss: {}
    }
  },
  // configureWebpack: {
  //   plugins:[
  //
  //   ]
  // }
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      // console.log(config);
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        console.log(options);
        return options
      })
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/variable/var.styl'),
      ],
    })
}
