/**
 * 连接数据库的配置文件
 */
import path from 'path'

const serverRoot = path.dirname(__dirname)
const root = path.resolve(serverRoot, '../')
const staticDir = path.join(root, 'static')
let config = {
  name: 'hospital',
  debug: false,
  host: 'localhost',
  env: 'dev',
  user: '*****', // 数据库用户名
  pass: '******', // 数据库密码
  dir: {
    root,
    log: path.join(__dirname, '..', 'logs'),
    server: serverRoot,
    static: staticDir,
    resource: path.join(serverRoot, 'resource'),
    upload: path.join(serverRoot, 'resource', 'upload')
  }
}

module.exports = config
