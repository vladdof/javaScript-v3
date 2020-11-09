// var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: './script.js',
	output: {
	  filename: 'build.js'
	},

	watch: true,

	watchOptions: {
		aggregateTimeout: 100
	},

	mode: 'none',

	// module: {
	// 	loaders: [
	// 		{
	// 			test: /\.css$/,
	// 			  use: ExtractTextPlugin.extract({
	// 			    fallback: 'style-loader',
	// 			    use: 'css-loader'
	// 			  })
	// 		}
	// 	]
	// },
	// plugins: [
 //        new ExtractTextPlugin('bundle.css')
 //    ]
};
