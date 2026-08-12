const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const imageKitSongUpload = async (buffer, fileName, folder="") => {
  const file = await client.files.upload({
    file: await ImageKit.toFile(Buffer.from(buffer)),
    fileName: fileName,
    folder: folder
  })

  return file;
};

module.exports = imageKitSongUpload;
