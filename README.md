# Mobile Page: webpack + handlebars + postcss

------

> * webpack multiple entries
> * handlebars template
> * postcss
> * mobile page adapt with viewport(vw, vh, max-vw, max-vh, aspect-ratio )
> * better SEO

## Ways worked fine about reference pics in handlebars template 
- [x] use CopyWebpackPlugin
`new CopyWebpackPlugin([
  {from: './src/assets/images', to: './images'}
]),`  
- [x] conf `inlineRequires: '\/assets/images\/'` in webpack  
- [x] extract-loader
    
## Rough(坑)
1、Warning Existed: postcss-viewport-units adapted mobile native browsers by adding content property in cascading style sheets.
And when used Font Icon, generally, pseudo classed ::after or ::before had a content property.
so it warn pseudo classed already has a 'content' property, give up to overwrite it.
We can use SVG replace Font Icon certainly.    

2、@font-face url()

## Need to be optimized
- [ ] webpack-dev-server recompiled very slowly
- [ ] webpack env donot define
- [ ] compression
- [ ] code spliting
- [ ] Few handlebars helper
- [ ] add jquery 
- [ ] ....