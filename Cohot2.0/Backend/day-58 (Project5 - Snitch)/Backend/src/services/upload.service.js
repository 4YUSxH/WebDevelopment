import ImageKit, { toFile } from "@imagekit/nodejs";
import { config } from "../config/config.js";

const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

export const uploadImage = async (image, name, folder = "/Snitch") => {
  const response = await client.files.upload({
    file: await toFile(Buffer.from(image.buffer), "file"),
    fileName: name,
    folder: folder,
  });

  return response;
};
