/**
 * 定义整个项目的全局配置
 */

'use strict';

// 约定优于配置
// 我可以提供尽量多的配置, 但尽量不要太个性化, 接口的路径/名称/格式之类的
// 遵循统一的规范, 好维护, 交给其他人也比较简单

module.exports = {
  name: 'OOXX管理后台',  // 项目的名字
  favicon: 'http://jxy.me/favicon.ico',  // 设置网页的favicon, 可以是外链, 也可以是本地
  footer: '<a target="_blank" href="http://jxy.me">foolbear</a>版权所有 © 2015-2099',  // footer中显示的字, 可以嵌入html标签

  debug: true,  // 是否开启debug模式, 不会请求后端接口, 使用mock的数据
  log: {
    level: 'info',  // 日志级别, 类似slf4j中的root logger, 目前支持debug/info/warn/error 4种级别
    // 除了root logger以外, 也可以为每个logger单独设置级别
    debug: [],
    info: [],
    warn: [],
    error: ['loggerA', 'loggerB'],  // 示例, 对于loggerA和loggerB使用error级别, 其他logger使用默认的info级别
  },

  api: {  // 对后端请求的相关配置
    host: 'http://localhost:12345',  // 调用ajax接口的地址, 默认值空, 如果是跨域的, 服务端要支持CORS
    path: '/api',  // ajax请求的路径
    timeout: 15000,  // 请求的超时时间, 单位毫秒
  },
}