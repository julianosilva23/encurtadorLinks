import request from 'supertest';
import moment from 'moment';
import app from '../src/app';
import truncate from './util/truncate';
import Url from '../src/app/model/Url';

describe('Url', () => {
    beforeEach(async () => {
        await truncate();
    });
    it('ao passar uma url válida, o sistema deve retornar a url encurtada', async () => {
        const response = await request(app).post('/encurtador').send({
            url: 'https://wisereducacao.com/',
        });

        expect(response.body).toHaveProperty('newUrl');
    });

    it('quando não é passada uma url, o sistema deve retornar o status 400 ', async () => {
        const response = await request(app).post('/encurtador').send({});

        expect(response.status).toBe(400);
    });

    it('deve retornar erro ao passar url inválida, o sistema deve retornar o status 400 ', async () => {
        const response = await request(app)
            .post('/encurtador')
            .send({ url: 'google.com' });

        expect(response.status).toBe(400);
    });

    it('deve acessar a url que foi encurtada', async () => {
        const url = 'https://wisereducacao.com/';
        await Url.create({
            urlRedirect: url,
            code: 'teste',
        });
        const response = await request(app).get('/teste').send();

        expect(response.headers.location).toBe(url);
    });

    it('deve retornar não o status 404 ao passar um código de redirecionamento inválido', async () => {
        const response = await request(app).get('/codigo_inexistente').send();

        expect(response.status).toBe(404);
    });

    it('deve retornar não encontrado ao passar um código de redirecionamento expirado', async () => {
        const url = 'https://wisereducacao.com/';
        const date = moment(new Date()).subtract('2', 'minutes').toDate();

        await Url.create({
            urlRedirect: url,
            code: 'codigo_expirado',
            createdAt: date,
        });

        const response = await request(app).get('/codigo_expirado').send();

        expect(response.status).toBe(404);
    });
});
