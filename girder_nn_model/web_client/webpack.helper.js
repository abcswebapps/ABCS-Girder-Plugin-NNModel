module.exports = function (config) {
    config.module.rules.push({
        resource: {
            test: /\.js$/ // /node_modules(\/|\\)vtk\.js(\/|\\).*.js$/,
            // include: [/node_modules(\/|\\)vtk\.js(\/|\\)/]
        },
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        ]
    });
    return config;
};
