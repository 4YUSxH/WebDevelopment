export const registerUser3 = async (req, res, next) => {
  try {
    throw new Error("Password is too weak: From error handlder middleware");
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
