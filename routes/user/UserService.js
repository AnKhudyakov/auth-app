import User from "../../models/User.js";

class UserService {
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }
  async getAllUsers() {
    return await User.find({}).select({ password: 0 });
  }
  async removeUser(id) {
    console.log(id);
    const user = await User.findOne({ _id: id }).select({ password: 0 });
    user.deleteOne({ _id: user._id });
    return user;
  }
}

export default new UserService();
