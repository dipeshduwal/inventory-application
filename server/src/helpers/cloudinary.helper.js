const process = require('node:process');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.handleUpload = async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: 'auto',
      folder: 'Inventory_App', // Add the 'folder' option here
    });
    return res;
  }
  catch (error) {
    console.error('Error uploading image to cloudinary: ', error);
  }
};

exports.handleDelete = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  }
  catch (error) {
    console.error('Error deleting image from cloudinary: ', error);
  }
};