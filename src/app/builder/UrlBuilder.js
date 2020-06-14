import shortId from 'shortid';

class UrlBuilder {
    async build(url) {
        const code = UrlBuilder.code();

        return {
            urlRedirect: url,
            code,
        };
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

        /**
         * possibilidade de colissão 64^10
         */
        return shortId.generate().substring(0, 10);
    }
}

export default new UrlBuilder();
