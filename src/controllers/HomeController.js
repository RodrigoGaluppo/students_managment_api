class HomeController {
  async index(req, res) {
    try {
      res.json('newStudent');
    } catch (e) {
      res.send('erro');
      console.log(e);
    }
  }
}
export default new HomeController();
