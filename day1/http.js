const {createServer}=require('http')

//创建服务器的方法
//request 请求头和请求体  前端给后端的
// response 响应头和响应体 后端给前端的
const server=createServer((request,response)=>{
    //编写响应头
    response.writeHead('200',{
        //设置编码为utf-8
        'Content-Type':'text/html;charset=utf-8'
    })
    //编写响应体
    response.write('世海cs')
    //后端完成写完了
    response.end()
})
//提供一个端口给前端服务
server.listen(3000)
console.log('启动服务器')