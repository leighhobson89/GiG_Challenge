var HtmlReporter = require('protractor-angular-screenshot-reporter');

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	suites: {
		register:
			'register/spec.js',
		login:
			'login/spec.js'
	},
	//specs: ['scenario1.js'], //swap scenarios "scenario1.js" and "scenario2.js"
	capabilities: {
		'browserName': 'chrome'
	},
	 onPrepare: function() { 
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: './report'
      }).getJasmine2Reporter());
   }
}