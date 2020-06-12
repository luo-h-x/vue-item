module.exports = {
  devServer: {
    // proxy: 'http://news-at.zhihu.com/api/4'
    proxy: {
      '/dy': {
        target: 'https://www.iesdouyin.com/web/api/v2',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/dy': ''
        }
      },
      '/news': {
        target: 'http://news-at.zhihu.com/api/4/news',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/news': ''
        }
      }
    }
  },
  publicPath: './'
}
