const { extendDefaultPlugins } = require('svgo')

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: process.env.BABEL_ENV === 'test' ? 'commonjs' : 'auto',
                targets: {
                    node: 'current',
                },
                exclude: ['transform-async-to-generator', 'transform-regenerator'],
            },
        ],
    ],
    plugins: [
        'react-docgen',
        '@babel/plugin-syntax-jsx',
        [
            'inline-react-svg',
            {
                svgo: {
                    plugins: extendDefaultPlugins([
                        {
                            name: 'removeTitle',
                            active: false,
                        },
                        {
                            name: 'removeViewBox',
                            active: false,
                        },
                        {
                            name: 'convertShapeToPath',
                            active: false,
                        },
                    ])
                }
            }
        ],
        [
            'module-resolver',
            {
                'root': ['./src'],
            }
        ],
    ],
}
