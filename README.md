1、多入口
2、handlebar
3、scss/less
4、原生
5、自适应（view-port)
6、handlebar变量、路径引入

参考：
https://doc.webpack-china.org/concepts/output/#%E5%A4%9A%E4%B8%AA%E5%85%A5%E5%8F%A3%E8%B5%B7%E7%82%B9
https://github.com/ai/browserslist
https://github.com/postcss/postcss/blob/master/README-cn.md


实现hbs引用图片的方式：
some ways worked fine about img label in hbs template
1、
`new CopyWebpackPlugin([
  {from: './src/assets/images', to: './images'}
]),`
2、conf `inlineRequires: '\/assets/images\/'` in webpack
3、extract-loader
    