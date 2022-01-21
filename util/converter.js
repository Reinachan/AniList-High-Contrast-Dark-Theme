const fs = require('fs');

const themeCSS = fs.readFileSync('gen/theme.css', 'utf8');
const metadata = fs.readFileSync('style/userscript_metadata.css', 'utf8');

const removeMozDocument = (file) => {
	// Removes @moz-document
	return file.replace(
		/\/\* no-mobile-start \*\/[\s\S]+?\/\* no-mobile-end \*\//g,
		''
	);
};

const convertToUserscriptExtension = (css, meta) => {
	return meta + removeMozDocument(css);
};

const bookmarkletStart = 'javascript:(function () {';

const bookmarkletEnd = '})();';

const bookmarlet = (jsScript) => {
	let converted = jsScript;

	// Replace all spaces and newlines with a space
	converted = converted.replace(/[\s]+/g, ' ');

	// remove all spaces after { and before }
	converted = converted.replace(/{ /g, '{');
	converted = converted.replace(/ }/g, '}');
	// remove spaces after colon and semicolon
	converted = converted.replace(/(:|;|,) /g, '$1');

	return bookmarkletStart + converted + bookmarkletEnd;
};

fs.writeFileSync(
	'High-Contrast-Dark-Theme-Userscript.user.css',
	bookmarlet(convertToUserscriptExtension(themeCSS, metadata)),
	'utf8'
);
