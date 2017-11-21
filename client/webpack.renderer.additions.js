let path = require('path');
module.exports = {

	resolve: {
		alias: {
			"~": path.join(process.cwd(), 'src/renderer')
		}
	}

}