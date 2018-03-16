const fs = require('fs');

/*
 * 复制文件
 * @param prevFile {String} 要复制的文件
 * @param targetFile {String} 复制到目标文件
 */
let copyFile = (prevFile, targetFile) => {
  fs.readFile(prevFile, 'utf8', (err, data) => {
    if (err) {
      console.log('\x1B[31m', `复制文件: ${prevFile} 出错, 原因: ${err}.`);
      console.log('\x1B[33m', `复制文件: ${prevFile} 出错, 原因: ${err}.`);
      console.log('\x1B[37m', `复制文件: ${prevFile} 出错, 原因: ${err}.`);
      return
    };

    fs.writeFile(targetFile, data, 'utf8', () => {
      console.log('\x1B[37m', `复制文件: ${targetFile} 完成, ------------.`);
    })
  })
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist, callback) {
  fs.access(dist, function(err){
    if(err){
      // 目录不存在时创建目录
      fs.mkdirSync(dist);
    }
    _copy(null, src, dist);
  });

  function _copy(err, src, dist) {
    if(err){
      callback(err);
    } else {
      fs.readdir(src, function(err, paths) {
        if(err){
          callback(err)
        } else {
          paths.forEach(function(path) {
            var _src = src + '/' +path;
            var _dist = dist + '/' +path;
            fs.stat(_src, function(err, stat) {
              if(err){
                callback(err);
              } else {
                // 判断是文件还是目录
                if(stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src));
                } else if(stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback)
                }
              }
            })
          })
        }
      })
    }
  }
}

module.exports = {
  'file': copyFile,
  'dir': copyDir,
}
