const postModel = require("../models/posts.model");
const ImageKit = require("@imagekit/nodejs/index.js");
const { toFile } = require("@imagekit/nodejs/index.js");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostContoller = async (req, res) => {
  // console.log(req.body, req.file);

  // Checking unauthorized user
  const token = req.cookies.token; // Authorized(registered/loggedIn) user should have token
  if (!token) {
    // If user not have token
    return res.status(401).json({
      message: "Token is not provided, Unauthorized access",
    });
  }
  // Sever will identify which user is requesting using token

  let decoded = null; // Declare this before try-catch cause it will show scoping error if we directly decalre this in try block when we access this in catch block
  //   If .verify() throw error we Catch that error and send response
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded will store userId(We stored this userId when user registered)
  } catch (err) {
    return res.status(401).json({
      message: "User not authrized",
    });
  }
  
  // Uploading file on imagekit(cloud storage provider)
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone/posts",
  });
  //   res.send(file);

  // Storing post data in database
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
    // caption and imgUrl is directly present in req.body but we have to extract userId from token that stored in cookie
  });

  res.status(201).json({
    message: "Post created sucessfully",
    post,
  });
};

const getPostController = async (req, res) => {
  const token = req.cookies.token; // Exracting token from request
  if (!token) {
    return res.status(401).json({
      message: "Unaurthorized access",
    });
  }
  // Sever will identify which user is requesting using token

  // Verifying and exracting user's information{user's id}
  let decode;
  try {
    decode = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Token invalid",
    });
  }

  const userId = decode.id; // decode.id contain user's id
  const posts = await postModel.find({ user: userId }); // finding a posts with this userId
  if (!posts) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
};

const getPostDetailsController = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  // Sever will identify which user is requesting using token

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const userId = decoded.id;
  const postId = req.params.postId;
  // console.log(typeof(userId), typeof(postId));
  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "No post found",
    });
  }

  const isValidUserRequseting = post.user.toString() === userId;
  if (!isValidUserRequseting) {
    return res.status(403).json({
      message: "Forbidden access",
    });
  }

  res.status(200).json({
    message: "Post fetched succussfully",
    post,
  });
};

module.exports = {
  createPostContoller,
  getPostController,
  getPostDetailsController,
};
