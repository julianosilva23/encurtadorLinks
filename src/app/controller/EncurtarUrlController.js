import { Op } from 'sequelize';
import moment from 'moment';
import UrlBuilder from '../builder/UrlBuilder';
import Url from '../model/Url';

class EncurtarUrlController {
    async store(req, res) {
        const { url } = req.body;

        if (!url || String(url).trim().length === 0) {
            return res.status(400).json({ message: 'Insira uma url válida' });
        }

        /**
         * Verifica se a url é válida
         * rfc3986
         */
        try {
            const testIsValid = new URL(url);
        } catch (_) {
            return res.status(400).json({
                message:
                    'Insira uma url válida, verifique se a url está no formato correto https://wisereducacao.com/',
            });
        }

        const urlObject = await UrlBuilder.build(url.trim());

        await Url.create(urlObject);

        return res.json({ newUrl: `${process.env.APP_URL}/${urlObject.code}` });
    }

    async get(req, res) {
        const url = await Url.findOne({
            where: {
                code: req.params.code,
                createdAt: {
                    [Op.gte]: moment()
                        .subtract(
                            process.env.EXPIRATION_TIME_MINUTES || '10',
                            'minutes'
                        )
                        .toDate(),
                },
            },
        });

        if (!url) {
            return res.status(404).json({ message: 'Url não encontrado' });
        }

        /**
         * fc7231 https://tools.ietf.org/html/rfc7231#page-56
         */
        return res.status(307).redirect(url.urlRedirect);
    }
}

export default new EncurtarUrlController();
