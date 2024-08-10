// import mongoose from 'mongoose';

// // Define the user schema
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   cartData: {
//     type: Object,
//     default: {},
//   },
 
// }, {minimize:false});

 

// // Create and export the User model
// const userModel = mongoose.models.user || mongoose.model('user', userSchema);
// export default userModel;

import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default: {},
  },
}, { minimize: false });

// Create and export the User model
const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
