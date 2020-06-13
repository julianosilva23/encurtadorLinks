import Url from '../model/Url';

class UrlBuilder {
    async build(url) {
        // code
        const code = UrlBuilder.code(url);

        // store
        return Url.create({
            url,
            code,
        });
    }

    /**
     *
     * @param {string} url
     *
     * Codifica a url
     */
    static code(url) {
        return url;
    }
}

export default new UrlBuilder();
