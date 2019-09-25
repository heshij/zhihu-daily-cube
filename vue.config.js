var path = require('path')

function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@common', resolve('src/common'))
  },
  devServer: {
    proxy: {
      // 将http://news-at.zhihu.com映射为/api
      '/api': {
        // 接口域名
        target: 'http://news-at.zhihu.com',
        // 如果是https接口，需要配置这个参数
        secure: false,
        // 是否跨域
        changeOrigin: true,
        // 需要rewrite的
        pathRewrite: {
          '^/api': '/api/4'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
