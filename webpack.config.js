var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				enforce: 'pre',
				use: {loader: 'eslint-loader'}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{ 
						loader: 'babel-loader',
						options: {
							presets: [ "es2015", "stage-0", "react" ],
							plugins: [ "transform-runtime"]
						}
					}
				]
			},
			{
				test:   /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}