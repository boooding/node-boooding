## cluster 模式

一个主进程和多个子进程，从而形成一个集群的概念。

### 应用

```js
const http = require('http');

/**
 * 创建 http 服务，简单返回
 */

const server = http.createServer((req, res) => {

    res.write(`hello world, start with cluster ${process.pid}`);

    res.end();

});

/**
 * 
 * 启动服务
 */
server.listen(3000, () => {
    console.log('server start http://127.0.0.1:3000');
});
console.log(`Worker ${process.pid} started`);


const cluster = require('cluster');
const instances = 2; // 启动进程数量

if (cluster.isMaster) {

    for(let i = 0;i<instances;i++) { // 使用 cluster.fork 创建子进程
        cluster.fork();
    }
} else {
    require('./app.js');
}

```

- 如果是则使用 cluster.fork 创建子进程；
- 如果不是则为子进程 require 具体的 app.js。

#### 原理

Node.js 的 cluster 是如何做到多个进程监听一个端口的

在 cluster 模式中存在 master 和 worker 的概念，**master 就是主进程**，**worker 则是子进程**

第一次 require 的 cluster 对象就默认是一个 master