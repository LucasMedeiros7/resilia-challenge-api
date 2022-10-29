import { Router } from 'express';
import { StudentController } from './controllers/StudentController.js';

const routes = Router();
const studentController = new StudentController();

routes.post('/students', studentController.create);
routes.get('/students/:polo_id', studentController.listByPoloId);
routes.get('/students', studentController.list);
routes.patch('/students/:enrollment', studentController.update);
routes.delete('/students/:enrollment', studentController.delete);

export { routes };
