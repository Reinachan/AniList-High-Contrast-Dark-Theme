const fs = require('fs');

const themeLess = fs.readFileSync('gen/theme.css', 'utf8');

const styleString = `
function addStyleString(str) {
  const node = document.createElement('style');
  node.innerHTML = str;

  document.body.appendChild(node);
}

addStyleString(
`;

const functionEnd = ');';

const convertToJs = (file) => {
	let converted = file;

	// Remove stuff not needed on mobile to make it shorter
	converted = converted.replace(
		/\/\* no-mobile-start \*\/[\s\S]+?\/\* no-mobile-end \*\//g,
		''
	);
	converted = converted + ':root {font-size:12px;}';

	// Remove comments
	converted = converted.replace(/\/\*(.|n)*?\*\//gs, '');
	converted = converted.replace(/(?<!:)\/\/.+/g, '');
	// Remove the submission manual
	converted = converted.replace(
		/@-moz-document domain\("submission-manual\.anilist\.co"\)[\s\S]+$/g,
		''
	);
	// Remove the moz-document
	/* converted = converted.replace(
		/@-moz-document domain\("anilist\.co"\) {[\s\S]+?(?<! )}/g,
		'$1'
	); */
	// Convert " to '
	converted = converted.replace(/"/g, "'");

	const start = styleString.replace(/\n/g, ' ') + '`';
	return start + converted + '`' + functionEnd;
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
	'High-Contrast-Dark-Theme.bookmarklet.js',
	bookmarlet(convertToJs(themeLess)),
	'utf8'
);
