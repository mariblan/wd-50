const getOnlyMiddleware = (req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    res.send('Wrong method');
  }
};
 export default getOnlyMiddleware;
