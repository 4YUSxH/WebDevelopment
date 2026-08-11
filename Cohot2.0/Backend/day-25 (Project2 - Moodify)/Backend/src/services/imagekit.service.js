const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const imageKitSongUpload = async ({ title }, imageBuffer, songBuffer) => {
//   const songFile = await client.files.upload({
//     file: await ImageKit.toFile(Buffer.from(songBuffer), title),
//     fileName: title,
//   });

//   const posterFile = await client.files.upload({
//     file: await ImageKit.toFile(Buffer.from(imageBuffer), title),
//     fileName: title,
//   });
// In above code we are uploading both files sequentially, which is time taking and not optimized

  const [songFile, posterFile] = await Promise.all([
    client.files.upload({
      file: await ImageKit.toFile(Buffer.from(songBuffer), title),
      fileName: title + ".mp3",
    }),

    client.files.upload({
      file: await ImageKit.toFile(Buffer.from(imageBuffer), title),
      fileName: title + ".jpeg",
    }),
  ]);
//   Uplaoding both files simultanouesly, less time consuming and optimized

  return { songFile, posterFile };
};

module.exports = imageKitSongUpload;
