import { Router } from 'express';
import ImageController from '../controllers/ImageController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ImageController.store);

export default router;
