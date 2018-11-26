import hosController from '../controllers/hosController'
export default async router => {
  router
    .get('/api/userInfo/:id', hosController.hosInfo)
    .get('/api/userList', hosController.hosList)
}
