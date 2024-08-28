const basic = require('./templates/basic');

async function returnRenderedTemplate(template, data, options) {
	// array of allowed templates. It would be really nice to add more! Right now, basic solves all my needs.
	const allowedTemplates = ['basic'];

	if (allowedTemplates.includes(template) === false) {
		throw new Error(
			`Unknown template: ${template}. Please use a template from the list: ${allowedTemplates}`,
		);
	}

	// if we add more templates, this logic needs to be expanded.
	return await basic(data, options);
}

module.exports = returnRenderedTemplate;
module.exports.basic = basic;
