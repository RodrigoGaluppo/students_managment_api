import dotenv from 'dotenv';
import './src/database';
import { resolve } from 'path';

dotenv.config();
import expres from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import imageRoutes from './src/routes/imageRoutes';

class App {
  constructor() {
    this.app = expres();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(expres.urlencoded({ extended: true }));
    this.app.use(expres.json());
    this.app.use(expres.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use(('/'), homeRoutes);
    this.app.use(('/users'), userRoutes);
    this.app.use(('/token'), tokenRoutes);
    this.app.use(('/alunos'), alunoRoutes);
    this.app.use(('/files'), imageRoutes);
  }
}

export default new App().app;
