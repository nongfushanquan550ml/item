//登录
// 1.请求方法
const http = require('http')
const querystring = require('querystring')
const express = require('express')
const app = express()
//2.流处理数据
const parseBody = (request) => {
    return new Promise((resolve, reject) => {
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            resolve(querystring.parse(body))

        })
        request.on('error', (err) => {
            reject(err)
        })
    })
}
//创建服务器
app.post('/eno', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let { username, password } = await parseBody(req)
    if (username == 'yao' && password == '123') {
        res.send('success')
    } else {
        res.send('failure')
    }
})
http.createServer(app).listen(3000)
console.log('服务器启动')