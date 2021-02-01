import User from '../models/User';

class HomeController {
  async create(req, res) {
    try {
      console.log(req.body.email);
      const user = await User.create(req.body);
      const newUser = { id: user.id, name: user.name, email: user.email };
      return res.json(newUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const user = await User.findAll({ attributes: ['id', 'email', 'name'] });
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      let user = await User.findByPk(req.userId);

      user = { id: user.id, name: user.name, email: user.email };

      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['user does not exist'],
        });
      }

      const newUser = await user.update(req.body);

      return res.json(newUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['user does not exist'],
        });
      }

      await user.destroy();

      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ erros: e.errors.map((err) => err.message) });
    }
  }
}
export default new HomeController();
