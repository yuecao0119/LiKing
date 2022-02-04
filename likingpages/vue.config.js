// // 配置跨域访问
// // 思路：配置之后，访问api还是访问的8080，但是node.js会通过代理自动转发到后端接口上
// let proxyObj = {}

// proxyObj['/'] = {
//     // websocket
//     ws: false,
//     // 目标地址  后端地址
//     target: 'http://localhost:8081',
//     // 发送请求头的host会被设置为target
//     changeOrigin: true,
//     pathReWrite: {
//         '^/': '/'
//     }
// }

// module.exports = {
//     devServer: {
//         host: 'localhost',
//         port: 8080,
//         proxy: proxyObj
//     }
// }