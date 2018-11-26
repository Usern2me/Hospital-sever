import path from 'path'
import dev from './dev'
import merge from 'lodash/merge'

const serverRoot = path.dirname(__dirname)
const root = path.resolve(serverRoot, '../')
const staticDir = path.join(root, 'static')
let config = {
  app: {
    name: 'hospital',
    port: 3307
  },
  debug: false,
  env: 'production',
  database: {
    url: 'mysql://root:root@localhost:3306/hospital',
    opts: {
      user: 'root',
      pass: '12345'
    }
  },
  dir: {
    root,
    log: path.join(__dirname, '..', 'logs'),
    server: serverRoot,
    static: staticDir,
    resource: path.join(serverRoot, 'resource'),
    upload: path.join(serverRoot, 'resource', 'upload')
  }
}
config = merge(config, process.env.NODE_ENV === 'development' ?
  dev :
  require('./private.js'))

export default config
