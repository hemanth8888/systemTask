import User from "./user.module";


export async function signUp(req, res) {
    try {
      const user = await User.insertMany(req.body);
      return res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  }
  
  export async function userList(req, res) {
    try {
      const user = await User.find();
      console.log("list")
      return res.status(201).json({userlist:user});
    } catch (e) {
      return res.status(500).json(e);
    }
  }
