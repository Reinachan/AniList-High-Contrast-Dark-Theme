var http = require('http');
const core = require('@actions/core');
const fs = require('fs');

const themeCss = fs.readFileSync('High-Contrast-Dark-Theme.user.css', 'utf8');

const styleString = `
function addStyleString(str) {
  const node = document.createElement('style');
  node.innerHTML = str;

  document.body.appendChild(node)
}

addStyleString(
`;

const functionEnd = ');';

const convertToJs = (file) => {
	let converted = file;
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

	return converted;
};
/* eslint-disable */
const bookmarkletStart = 'javascript:(function () {';
/* eslint-enable */

const bookmarkletEnd = '})()';

const bookmarlet = (jsScript) => {
	// Replace all spaces and newlines with a space
	let converted = jsScript;
	converted = converted.replace(/[\s]+/g, ' ');

	return bookmarkletStart + '"' + converted + '"' + bookmarkletEnd;
};

// console.log(styleString + convertToJs(themeCss) + functionEnd);

const outputFile =
	styleString + '`' + convertToJs(themeCss) + '`' + functionEnd;

fs.writeFileSync('High-Contrast-Dark-Theme.js', outputFile, 'utf8');

fs.writeFileSync(
	'High-Contrast-Dark-Theme.bookmarklet.js',
	bookmarlet(convertToJs(themeCss)),
	'utf8'
);

// fs.writeFileSync('High-Contrast-Dark-Theme.js', outputFile, 'utf8');

/* fs.writeFile('High-Contrast-Dark-Theme.js', themeCss, (err) => {
	if (err) throw err;
	console.log('completed');
}); */
