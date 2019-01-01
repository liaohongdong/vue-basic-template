module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue/' : '/',
  css: {
    loaderOptions: {
      css: {},
      sass: {
        data: `@import "@/variables/var.scss";`
      },
      stylus: {},
      less: {},
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
  }
}
