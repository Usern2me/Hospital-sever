import ApiError from '../error/ApiError'
import ApiErrorNames from '../error/ApiErrorNames'
import Hos from '../models/hos'
const Dao = require('../middlewares/common-dao')

class HosController {
    // get
    async getHosList(ctx) {
        const list = await Dao.findAll(Hos)
        ctx.body = {
            list
        }
        return true
    }
    // get
    async getHos(ctx) {
        let param = ctx.query
        await Dao.findOne(Hos, {
                name: param
            })
            .then((res) => {
                ctx.body = res
            }).catch(() => {
                throw new ApiError(ApiErrorNames.HOS_NOT_EXIST)
            })
        return true
    }
}
module.exports = new HosController()
