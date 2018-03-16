const fs = require('fs');

// 抽空再研究 del 的源代码, 这个暂时放置在这里!

let emptyFolder = {
  'isFirst': true,

  clear(fileUrl) {
    let files = fs.readdirSync(fileUrl);//读取该文件夹
  
    if (files.length > 0) { // 判断递归文件夹是否为空
      this.isFirst = false;

      files.forEach((file, index) => {
        // Stats 类 大概是统计的作用
        let stats = fs.statSync(`${fileUrl}/${file}`); 
  
        if(stats.isDirectory()){ // 如果是目录, 则递归调用
          this.clear(`${fileUrl}/${file}`);
        } else { // 如果不是目录, 则删除
          fs.unlinkSync(`${fileUrl}/${file}`);
        }
      });

    } else { // 归文件夹是为空删除该目录
      if (this.isFirst === false) { // 确认是递归情况, 删除之!
        fs.rmdirSync(fileUrl);
      }
    }
  }
}

let emptyDir = (fileUrl) => {
  if (fs.existsSync(fileUrl)) {
    emptyFolder.clear(fileUrl);
  } else { // 如果不存在此文件夹, 则创建该文件夹
    fs.mkdirSync(fileUrl);
  }
}

module.exports = emptyDir;