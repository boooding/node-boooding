/**
 * 我们的第一反应应该是流水，源源不断的流动；
 * 程序中的流也是类似的含义，我们可以想象当我们从一个文件中读取数据时，文件的二进制（字节）数据会源源不断的被读取到我们程序中；
 * 而这个一连串的字节，就是我们程序中的流；
 *
 * 直接读写文件的方式，虽然简单，但是无法控制一些细节的操作；
 * 比如从什么位置开始读、读到什么位置、一次性读取多少个字节；
 * 读到某个位置后，暂停读取，某个时刻恢复读取等等；
 * 或者这个文件非常大，比如一个视频文件，一次性全部读取并不合适；
 *
 * http模块的Request和Response对象；
 * process.stdout对象；
 * 另外所有的流都是EventEmitter的实例：
 */

const fs = require('fs')
// readable
const reader = fs.createReadStream('./file.txt', {
  start: 0,
  end: 9,
  highWaterMark: 1
})

reader.on('data', (data) => {
  console.log(data)
  // console.log(data.toString())
})

/*
const fs = require('fs');

// 传统的方式
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data);
// });

// 流的方式读取
const reader = fs.createReadStream("./foo.txt", {
  start: 3,
  end: 10,
  highWaterMark: 2
});

// 数据读取的过程
reader.on("data", (data) => {
  console.log(data);

  reader.pause();

  setTimeout(() => {
    reader.resume();
  }, 1000);
});

reader.on('open', () => {
  console.log("文件被打开");
})

reader.on('close', () => {
  console.log("文件被关闭");
})

 */
