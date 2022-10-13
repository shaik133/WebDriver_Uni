const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: '"cypress/cucumber-json"',
	reportPath: 'cypress/Report/Final_HTML_Report.html',
	metadata:{
        browser: {
            name: 'Electron',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Cucumber report',
        data: [
            {label: 'Project', value: 'Custom project'},
        ]
    }
});