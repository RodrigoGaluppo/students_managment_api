import Aluno from '../models/Aluno';
import Image from '../models/Image';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['name', 'id', 'surname', 'age'],
        order: [['id', 'ASC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['file_name', 'url'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      console.log(e);
      return res.send('erro');
    }
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Id is required'] });
      }

      const aluno = await Aluno.findByPk(id,
        {
          attributes: ['name', 'id', 'surname', 'age'],
          order: [['id', 'ASC'], [Image, 'id', 'DESC']],
          include: {
            model: Image,
            attributes: ['url', 'file_name'],
          },
        });

      if (!aluno) {
        return res.status(400).json({ errors: ['student does not exist'] });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Id is required'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ['student does not exist'] });
      }
      await aluno.destroy();
      return res.json({ deleted: 'true' });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['Id is required'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ['student does not exist'] });
      }

      const newAluno = await aluno.update(req.body);

      return res.json(newAluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }
}
export default new AlunoController();
