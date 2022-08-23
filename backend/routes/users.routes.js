const { usersController } = require("../controllers/users.controllers");
const Router = require('express')

const router = Router();

router.get('/users', usersController.getAllUsers)
router.post('/users', usersController.registerUser)
router.post('users', usersController.login)

module.exports = router;