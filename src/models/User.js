import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: {
          len: {
            args: [3, 255],
            msg: 'Name must have more than 3 charachters and less than 255',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: {
          isEmail: {
            msg: 'Invalid e-mail',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: {
          len: {
            args: [6, 50],
            msg: 'Password must have more than 6 charachters and less than 50',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) { user.password_hash = await bcrypt.hash(user.password, 8); }
    });

    return this;
  }

  IsValidPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
