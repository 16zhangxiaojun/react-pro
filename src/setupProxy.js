const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"http://m.maoyan.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}