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
        clientLogLevel: 'info',
        contentBase: ['./public'],
        hot: true,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://localhost:8000/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api/': '/',
                }
            }
        }
    }
};
