// // import userModel from "../models/userModel.js"
// // import jwt from 'jsonwebtoken'
// // import bcrypt from 'bcrypt'
// // import validator from 'validator'


// // // Create JWT token
// // const createToken = (id) => {
// //     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // };

// // // Login user
// // const loginUser = async (req, res) => {
// //     const { email, password } = req.body;

// //     try {
// //         // Check if the user exists
// //         const user = await userModel.findOne({ email });
// //         if (!user) {
// //             return res.status(400).json({ success: false, message: "Invalid email or password" });
// //         }

// //         // Compare passwords
// //         const match = await bcrypt.compare(password, user.password);
// //         if (!match) {
// //             return res.status(400).json({ success: false, message: "Invalid email or password" });
// //         }

// //         // Create and send token
// //         const token = createToken(user._id);
// //         res.json({ success: true, token });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: "Server error" });
// //     }
// // };


// // // Register user
// // const registerUser = async (req, res) => {
// //     const { name, email, password } = req.body;

// //     try {
// //         // Check if user already exists
// //         const exists = await userModel.findOne({ email });
// //         if (exists) {
// //             return res.status(400).json({ success: false, message: "User already exists" });
// //         }

// //         // Validate email format and password strength
// //         if (!validator.isEmail(email)) {
// //             return res.status(400).json({ success: false, message: "Please enter a valid email" });
// //         }

// //         if (password.length < 8) {
// //             return res.status(400).json({ success: false, message: "Please enter a strong password" });
// //         }

// //         // Hash user password
// //         const salt = await bcrypt.genSalt(10);
// //         const hashedPassword = await bcrypt.hash(password, salt);

// //         // Create and save new user
// //         const newUser = new userModel({
// //             name,
// //             email,
// //             password: hashedPassword
// //         });
// //         const user = await newUser.save();

// //         // Create and send token
// //         const token = createToken(user._id);
// //         res.json({ success: true, token });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: "Server error" });
// //     }
// // };


// // export {loginUser, registerUser}

// // import userModel from "../models/userModel.js";
// // import jwt from 'jsonwebtoken';
// // import bcrypt from 'bcrypt';
// // import validator from 'validator';

// // // Create JWT token
// // const createToken = (id) => {
// //     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // };

// // // Login user
// // const loginUser = async (req, res) => {
// //     const { email, password } = req.body;

// //     try {
// //         // Check if the user exists
// //         const user = await userModel.findOne({ email });
// //         if (!user) {
// //             return res.status(400).json({ success: false, message: "Invalid email or password" });
// //         }

// //         // Compare passwords
// //         const match = await bcrypt.compare(password, user.password);
// //         if (!match) {
// //             return res.status(400).json({ success: false, message: "Invalid email or password" });
// //         }

// //         // Create and send token
// //         const token = createToken(user._id);
// //         res.json({ success: true, token });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: "Server error" });
// //     }
// // };

// // // Register user
// // const registerUser = async (req, res) => {
// //     const { name, email, password } = req.body;

// //     try {
// //         // Check if user already exists
// //         const exists = await userModel.findOne({ email });
// //         if (exists) {
// //             return res.status(400).json({ success: false, message: "User already exists" });
// //         }

// //         // Validate email format and password strength
// //         if (!validator.isEmail(email)) {
// //             return res.status(400).json({ success: false, message: "Please enter a valid email" });
// //         }

// //         if (password.length < 8) {
// //             return res.status(400).json({ success: false, message: "Please enter a strong password" });
// //         }

// //         // Hash user password
// //         const salt = await bcrypt.genSalt(10);
// //         const hashedPassword = await bcrypt.hash(password, salt);

// //         // Create and save new user
// //         const newUser = new userModel({
// //             name:name,
// //             email:email,
// //             password: hashedPassword
// //         });
// //         const user = await newUser.save();

// //         // Create and send token
// //         const token = createToken(user._id);
// //         res.json({ success: true, token });
// //     } catch (error) {
// //         res.status(500).json({ success: false, message: "Server error" });
// //     }
// // };

// // export { loginUser, registerUser };


// import userModel from "../models/userModel.js"
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import validator from 'validator'

// const createToken = (id) => {
//     return jwt.sign({id},process.env.JWT_SECRET)
// }


// // Login user
// const loginUser = async (req, res)=>{
//     const { email, password } = req.body;

//     try {
//         // Check if the user exists
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ success: false, message: "Invalid email or password" });
//         }

//         // Compare passwords
//         const match = await bcrypt.compare(password, user.password);
//         if (!match) {
//             return res.status(400).json({ success: false, message: "Invalid email or password" });
//         }

//         // Create and send token
//         const token = createToken(user._id);
//         res.json({ success: true, token });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// }




// // Register user
// const registerUser = async (req, res)=>{
//     const {username, email, password} = req.body;
//     try {
//         const exists = await userModel.findOne({email});
//         if(exists){
//             return res.json({success:false, message:"User Already exists"})
//         } 
// //Validating email format $ strong password
//         if(!validator.isEmail(email)){
//             return res.json({success:false, message:"Please enter a valid email"})
//         }

//         if(password.length<8){
//             return res.json({success:false, message : "Please enter a strong password"})
//         }

//         // hashing user pasword
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new userModel({
//             username: username,
//             email: email,
//             password: hashedPassword
//         })
//         const user = await newUser.save()
//         const token = createToken(user._id)
//         res.json({success:true, token})

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// }


// export {loginUser, registerUser}



import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// Create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate email and password presence
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Create and send token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Register user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        // Hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save new user
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword
        });
        const user = await newUser.save();

        // Create and send token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { loginUser, registerUser };
