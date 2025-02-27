import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants')
    .get(
      RestaurantController.index)
    .post(
      // TODO: Add needed middlewares
      RestaurantController.create)

  app.route('/restaurants/:restaurantId')
    .get(RestaurantController.show)
    .put(
      // TODO: Add needed middlewares
      RestaurantController.update)
    .delete(
      // TODO: Add needed middlewares
      RestaurantController.destroy)
}
export default loadFileRoutes
