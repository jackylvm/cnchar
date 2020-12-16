
// let version = require('../package.json').version;
const path = require('path');

// module.exports = (env) => {
//     let plugin = env.pluginname;
//     return {
//         entry: path.resolve('./', 'src/plugin/' + plugin + '/index.js'),
//         output: {
//             path: path.resolve('./', 'dist'),
//             filename: 'cnchar.' + plugin + '.' + version + '.min.js'
//         },
//         module: {
//             rules: [{
//                 test: /(.js)$/,
//                 use: [{
//                     loader: 'babel-loader',
//                 }]
//             }]
//         }
//     };
// };
module.exports = (env) => {
    const plugin = env.pluginname;
    return {
        mode: 'production',
        entry: path.resolve('./', 'src/plugin/' + plugin + '/index.ts'),
        output: {
            path: path.resolve('./', 'npm/' + plugin),
            filename: 'cnchar.' + plugin + '.min.js',
            library: 'cnchar' + plugin[0].toUpperCase() + plugin.substr(1),
            libraryTarget: 'umd',
            umdNamedDefine: true,
            globalObject: 'this'
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        module: {
            rules: [{
                test: /(.ts)$/,
                use: {
                    loader: 'ts-loader'
                }
            }, {
                test: /(.js)$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }]
        }
    };
};