//  npm install jsonwebtoken express-jwt
const jwt = require('jsonwebtoken')
const express_jwt = require('express-jwt')

const secretKey = 'secret secret'

function login(req, res) {
  const token = jwt.sign(
      {user: "lintao"},
      secretKey,
      { expiresIn: '30s' }
  )
}

// express-jwt token => JSON OBJ
express_jwt({ secret: secretKey }).unless({ path: [/^\/api\//] })
