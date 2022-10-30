import { Router } from 'express';
import { PoloController } from './controllers/PoloController.js';
import { StudentController } from './controllers/StudentController.js';

const routes = Router();
const studentController = new StudentController();
const poloController = new PoloController();

routes.get('/polos', poloController.list);
routes.post('/polos', poloController.create);

routes.get('/students', studentController.list);
routes.post('/students', studentController.create);
routes.get('/students/:polo_id', studentController.listByPoloId);
routes.patch('/students/:enrollment', studentController.transfer);
routes.delete('/students/:enrollment', studentController.delete);

export { routes };
