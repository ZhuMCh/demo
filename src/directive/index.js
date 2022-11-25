import Vue from 'vue'

const files = require.context('./modules', false, /.+\.js$/)
console.log(files)
// 按模块引入
// files.keys(): 打印出来为['./focus.js','/loadmore.js']
files.keys().forEach(fileName => {
  const directiveConfig = files(fileName) // 获取指令函数

  const directiveName = fileName // 获取指令名
    .replace(/^\.\//, '') // 去除开头的'./'
    .replace(/\.\w+$/, '') // 去除文件扩展名

    console.log(directiveConfig.default,directiveName)
    
  Vue.directive(directiveName, directiveConfig.default || directiveConfig)
})