import ApiError from '../error/ApiError'
import ApiErrorNames from '../error/ApiErrorNames'
import User from '../models/user'
const Dao = require('../middlewares/common-dao')
class UserController {
  // get
  async getUsers(ctx) {
    const list = await Dao.findAll(User)
    ctx.body = {
      list
    }
    return true
  }
  // get
  async getUserByPhone(ctx) {
    let phone_query = ctx.query
    await Dao.findOne(User, {
      phone: phone_query
    })
      .then(res => {
        console.log('phone->res', res)
        ctx.body = res
      }).catch(() => {
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
      })
    return true
  }
  // post 这个传的参也有问题
  async addUser(ctx) {
    let user_query = ctx.request.body
    await Dao.create(User, user_query)
      .then(() => {
        ctx.body = true
      }).catch(() => {
        throw new ApiError(ApiErrorNames.ADD_USER_ERROR)
      })
    return true
  }
  // post 这个update方法传的参数有点问题
  async updateUser(ctx) {
    let user_query = ctx.request.body
    await Dao.update(User, user_query)
      .then(() => {
        ctx.body = true
      }).catch(() => {
        throw new ApiError(ApiErrorNames.UPDATE_USER_ERROR)
      })
    return true
  }
  // get 传用户的手机号
  async deleteUser(ctx) {
    let user_query = ctx.query
    await Dao.destroy(User, {
      phone: user_query
    })
      .then(() => {
        ctx.body = true
      }).catch(() => {
        throw new ApiError()
      })
  }
}

export default new UserController()
