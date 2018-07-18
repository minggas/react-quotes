const plugins = [
    // extract vendor and webpack's module manifest
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
    }),
    // extract common modules from all the chunks (requires no 'name' property)
    new webpack.optimize.CommonsChunkPlugin({
        async: true,
        children: true,
        minChunks: 4
    })
];
