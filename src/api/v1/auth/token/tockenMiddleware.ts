import exp from 'constants';
import Token from '../../../../db/models/Tokens';
import User from '../../../../db/models/User';
const jwt = require('jsonwebtoken');
require('dotenv').config();


const generateAccessToken  = (user: { id: number; createdAt:Date; username: string; email: string }) => {
    return jwt.sign(
      { id: user.id, createdAt: user.createdAt, username: user.username, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' } 
    );
  };


const generateRefreshToken = (user:{id: number; createdAt:Date; username: string; email: string }) => {
  return jwt.sign(
    { id: user.id, createdAt: user.createdAt, username: user.username, email: user.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '24h' }
  );
}
export  {generateAccessToken, generateRefreshToken};