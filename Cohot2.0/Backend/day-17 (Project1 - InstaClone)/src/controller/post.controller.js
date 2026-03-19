const postModel = require("../models/posts.model");
const ImageKit = require("@imagekit/nodejs/index.js");
const { toFile } = require("@imagekit/nodejs/index.js");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostContoller = async (req, res) => {
  // console.log(req.body, req.file);

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
    user: req.user.id,
    // caption and imgUrl is directly present in req.body but we have to extract userId from token that stored in cookie
  });

  res.status(201).json({
    message: "Post created sucessfully",
    post,
  });
};

const getPostController = async (req, res) => {
  const userId = req.user.id;
  const posts = await postModel.find({ user: userId }); // finding postst with this userid
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
  const userId = req.user.id;
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
