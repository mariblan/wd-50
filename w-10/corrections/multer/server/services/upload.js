import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

//adds the connection to your cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// creates a storage with the cloudinary connection
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'users',
    allowedFormats: ['jpeg', 'jpg', 'png', 'gif'],
  },
});

// uses that storage for the multer and saves it into a variables that will be used as a middleware
const upload = multer({ storage });

export default upload;
