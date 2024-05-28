const errorHandler = (error, req, res, next) => {
  console.log(error.stack);
  res.status(500).json({ message: 'Something broke!' });
};

export default errorHandler;
