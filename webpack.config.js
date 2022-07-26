const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: {
					loader: 'css-loader'
				},
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'public/index.html',
	})],
};
