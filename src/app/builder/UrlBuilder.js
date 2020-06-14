import shortId from 'shortid';
import Url from '../model/Url';

class UrlBuilder {
    async build(url) {
        const code = UrlBuilder.code();

        return Url.create({
            url_redirect: url,
            code,
        });
    }

    /**
     *
     * @param {string} url
     *
     * Codifica a url
     */
    static code() {
        shortId.characters(
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZçã'
        );

        return shortId.generate();
    }
}

export default new UrlBuilder();
