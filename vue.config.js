module.exports = {
    devServer:{
        host:'127.0.0.1',
        port:8080,
        proxy:{
            '':{
               target:"http://127.0.0.1:3999",
               changeOrigin:true,
               pathRewrite:{
                '':''
               }
            }
        }
    }
}