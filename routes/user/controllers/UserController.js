import UserService from "../UserService.js";

class UserController {
  async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      if (!users) {
        return res.status(404).json({ message: "DB is empty" });
      }
      return res.status(200).json(users);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }
  async removeUser(req, res) {
    try {
      const user = await UserService.removeUser(req.params.id)
      return res.status(200).json(user)
    }
    catch (e) {
      console.log(e);
      res.status(500).json({ message: "Server error" });
    }
  }
}

export default new UserController();
