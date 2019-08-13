module.exports = ctx => ({
    map: false,
    parser: ctx.file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'postcss-csso': { restructure: false }
    }
})