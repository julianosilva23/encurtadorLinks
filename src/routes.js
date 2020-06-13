import { Router } from 'express';

import EncurtarUrlController from './app/controller/EncurtarUrlController';

const routes = new Router();

routes.post('/encurtador', EncurtarUrlController.store);
routes.get('/:code', EncurtarUrlController.get);

export default routes;
