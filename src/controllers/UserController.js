import ApiError from '../error/ApiError'
import ApiErrorNames from '../error/ApiErrorNames'
import User from '../models/user'
const Dao = require('../middlewares/common-dao')
class UserController {
  async getUsers(ctx) {
    const list = await Dao.findAll(User)
    ctx.body = {
      list
    }
    return true
  }
  async getUser(ctx) {
    const res = User.findOne()
      .then(res => {
        console.log('res', res)
      }).catch(err => {
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
      })
    ctx.body = {
      res
    }
  }
}

export default new UserController()
