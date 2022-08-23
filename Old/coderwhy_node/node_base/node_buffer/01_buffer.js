const message = 'Buffer';

let buffer;
// NO.1 会报错
// buffer = new Buffer(message);
// console.log(buffer)
// No.2
buffer = Buffer.from(message);
console.log(buffer)

// 解码 utf8
console.log(buffer.toString())

// No.3 alloc
buffer = Buffer.alloc(8)
console.log(buffer)
buffer[0] = 0x42;
console.log(buffer)



