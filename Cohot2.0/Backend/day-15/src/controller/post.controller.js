const postModel = require("../models/posts.model")
const ImageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const createPostContoller = async (req, res) => {
    console.log(req.body, req.file);

    // Uploading file on imagekit(cloud storage provider)
    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test"
    })

    res.send(file)
}

module.exports = {
    createPostContoller
}