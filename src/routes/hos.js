const hosController = require('../controllers/hosController')
export default async router => {
  router
    .get('/api/hosInfo', hosController.getHos)
    .get('/api/hosList', hosController.getHosList)
    .post('/api/addHost', hosController.addHos)
    .post('/api/updateHos', hosController.updateHos)
    .get('/api/deleteHos', hosController.deleteHos)
}
