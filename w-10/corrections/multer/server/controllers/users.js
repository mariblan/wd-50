import User from '../models/usersSchema.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    if (!user.length) {
      throw { statusCode: 404, message: 'User not found' };
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const addNewUser = async (req, res, next) => {
  const { name, email, image } = req.body;
  console.log(name, email, image);
  try {
    const image_url = req.file.path;
    console.log(image_url);
    const newUser = await User.create({
      name,
      email,
      image_url,
    });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(201).json({ message: 'User was deleted' });
  } catch (error) {
    next(error);
  }
};
