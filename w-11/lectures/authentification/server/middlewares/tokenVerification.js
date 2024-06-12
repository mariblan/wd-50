import jwt from 'jsonwebtoken';

export const tokenVerification = (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    console.log(authorization);
    if (!authorization) res.status(401).send('Access denied!');
    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);
    console.log(_id);
    req.userId = _id;
    next();
  } catch (error) {
    next(error);
  }
};
