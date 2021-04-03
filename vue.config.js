module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/base/include-media.scss";
                    @import "@/assets/styles/helpers/variables.scss";
                    @import "@/assets/styles/helpers/functions.scss";
                    @import "@/assets/styles/helpers/mixins.scss";
                    @import "@/assets/styles/helpers/extends.scss";
                    `
            }
        }
    },
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" },
        clientLogLevel: 'info',
        contentBase: ['./public'],
        hot: true,
        https: false,
        proxy: {
            '^/api': {
                target: 'https://6068426f0add49001733fe2f.mockapi.io',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api/': '/',
                }
            }
        }
    }
};
