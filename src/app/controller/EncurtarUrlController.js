import { Op } from 'sequelize';
import moment from 'moment';
import UrlBuilder from '../builder/UrlBuilder';
import Url from '../model/Url';

class EncurtarUrlController {
    async store(req, res) {
        const { url } = req.body;

        if (
            String(url).trim().length === 0 ||
            (!url.includes('http://') && !url.includes('https://'))
        ) {
            return res.status(400).json('Insira uma url válida');
        }

        const { code } = await UrlBuilder.build(url.trim());

        return res.json({ newUrl: `${req.headers.host}/${code}` });
    }

    async get(req, res) {
        const url = await Url.findOne({
            where: {
                code: req.params.code,
                created_at: {
                    [Op.gte]: moment().subtract('10', 'minute').toDate(),
                },
            },
        });

        if (!url) {
            return res.status(404).json();
        }

        /**
         * fc7231 https://tools.ietf.org/html/rfc7231#page-56
         */
        return res.status(307).redirect(url.url_redirect);
    }
}

export default new EncurtarUrlController();
