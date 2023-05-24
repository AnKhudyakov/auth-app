import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
  }
  async createUser(user, password) {
    const date = new Date().toISOString().slice(0, 10);
    const newUser = new User({
      user_name: user.user_name,
      email: user.email,
      password,
      date_reg: date,
      date_log: date,
      status: "active",
    });
    await newUser.save();
  }
  async validateUser(passwordBD, password) {
    return bcrypt.compareSync(passwordBD, password);
  }
  createToken(email) {
    return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1h" });
  }
}

export default new AuthService();
