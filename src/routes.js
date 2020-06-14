import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import EncurtarUrlController from './app/controller/EncurtarUrlController';

const routes = new Router();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: '1.0.0',
            title: 'Encurtador de Links',
            description: 'Sistema de encurtamento de links',
            contact: {
                name: 'Amazing Developer',
            },
            servers: ['http://localhost:3333'],
        },
    },
    apis: ['./src/routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * path:
 *  /encurtador:
 *    post:
 *      summary: Gera uma url encurada a partir da enviada
 *      parameters:
 *        - in: body
 *          name: user
 *          description: Url que você deseja encurtar
 *          schema:
 *            type: object
 *            required:
 *              - url
 *            properties:
 *              url:
 *                type: string
 *      responses:
 *        "404":
 *          description: Código não existe ou expirou
 *        "307":
 *          description: Redirecionamento executado com sucesso
 */
routes.post('/encurtador', EncurtarUrlController.store);

/**
 * @swagger
 * path:
 *  /{code}:
 *    get:
 *      summary: Redirecionar para url a partir do código passado
 *      parameters:
 *        - in: path
 *          name: code
 *      responses:
 *        "404":
 *          description: Código não existe ou expirou
 *        "307":
 *          description: Redirecionamento executado com sucesso
 */
routes.get('/:code', EncurtarUrlController.get);

export default routes;
