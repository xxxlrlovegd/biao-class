const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
    // publicPath: '/', // 根路径
    // outputDir: 'dist', // 构建输出目录
    productionSourceMap: false, // 打包时不生成.map文件
    lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
    css: {
        loaderOptions: {
            stylus: {
                use: [
                    poststylus([
                        pxtorem({
                            rootValue: 100,
                            propWhiteList: [],
                            minPixelValue: 1,
                            unitPrecision: 2
                        }),
                        'autoprefixer'
                    ])
                ],
                import: [
                    // resolve('./src/assets/theme.custom')
                ]
            },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('utils', resolve('src/utils'))
            .set('views', resolve('src/views'))
            .set('@', resolve('src'))
    },
    devServer: {
        // port: 3002,
        proxy: {
            '/bicweb': { // 自定义
                target: '', // 这里可以跟随项目实际部署服务器来配置
                changeOrigin: true
            },
        }
    }
}