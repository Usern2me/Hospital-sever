import ApiError from '../error/ApiError'
import ApiErrorNames from '../error/ApiErrorNames'
import User from '../models/user'
class UserController {
  async getUsers (ctx) {
    const list = await User
    .findAll().exec()
    ctx.body = { list }
  }
  async getUser(ctx) {
    if (Number(ctx.params.id) !== 1) {
      throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
    }
    const res = User.findOne()
      .then(res => {
      //
      }).catch(err => {
        console.log('user->getUser->error', err)
      })
    ctx.body = {res}
  }
}

export default new UserController()
