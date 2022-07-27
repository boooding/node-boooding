// path模块用于对路径和文件进行处理，提供了很多好用的方法。
const path = require('path');

// Application 1: resolve
const base = '/User/path';
const file = 'filename.txt'
const filepath = path.resolve(base, file);
console.log(filepath)

// Application 2: dirname/basename/extname
// /User/path  + filename.txt + .txt
console.log(path.dirname(filepath), path.basename(filepath), path.extname(filepath))

// Application 3: join
const filepath2 = path.join(base, file);
console.log(filepath2)

// difference between
