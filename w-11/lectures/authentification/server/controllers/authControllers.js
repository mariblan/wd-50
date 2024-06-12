import userCollection from '../models/usersSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const foundUser = await userCollection.findOne({ email });
    if (foundUser) return res.status(400).send('User already exists!');
    const hashedPassword = await bcrypt.hash(password, 10);
    const { _id } = await userCollection.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.status(200).json({ token });
  } catch (error) {
    // res.status(500).send(error.message);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userCollection.findOne({ email }).select('+password');
    if (!user) return res.status(404).send('User not found!');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Password and email don't match");
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await userCollection.findById(req.userId).select('+password');
    if (!user) return res.status(404).send('User not found!');
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
