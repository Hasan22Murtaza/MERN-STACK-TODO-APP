const express = require('express');
const { signUp, Login, forgotPassword, resetPassword, isActivation } = require('../services/auth.js');
const routes = express.Router()


// sign up api
routes.post('/signup', signUp)
// login api
routes.post('/login', Login)
// forgot password
routes.post('/forgot-password', forgotPassword)
// reset password
routes.post('/reset-password/:id/:token', resetPassword)
// activation link
routes.post('/activate', isActivation)

module.exports = routes