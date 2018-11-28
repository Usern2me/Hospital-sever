import path from 'path'

const serverRoot = path.dirname(__dirname)
const root = path.resolve(serverRoot, '../')
const staticDir = path.join(root, 'static')
let config = {
  name: 'hospital',
  debug: false,
  host: 'localhost',
  port: 3306,
  env: 'dev',
  user: 'root',
  pass: '123456',
  dir: {
    root,
    log: path.join(__dirname, '..', 'logs'),
    server: serverRoot,
    static: staticDir,
    resource: path.join(serverRoot, 'resource'),
    upload: path.join(serverRoot, 'resource', 'upload')
  }
}

export default config
