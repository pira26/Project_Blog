const path = require("path");

module.exports = {
	// entry file for your bundle
	entry: path.join(__dirname, 'client/src/App.jsx'),

	// result of the bundle
	output: {
		path: path.join(__dirname, 'client/dist/build'),
		filename: "bundle.js"
	},
	module: {
		// apply loaders to files that meet given conditions
		rules: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'client/src'),
				use: {
						loader: 'babel-loader',
						query: {
								presets: ["react", "es2015"]
						}
				},
			},
            {
            	test: /\.s?css$/,
            	include: path.join(__dirname, 'client/src/static/css'),
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "sass-loader" // compiles Sass to CSS
	            }]
	        },
	        {
	        	test: /\.(jpe?g|png|gif|svg)$/i, 
	        	use: {
	        		loader: "file-loader?name=/client/src/static/assets/[name].[ext]"
	        	}
	        }
		],

	},
}