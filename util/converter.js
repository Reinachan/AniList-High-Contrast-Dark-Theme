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

fs.writeFileSync(
	'High-Contrast-Dark-Theme-Userscript.user.css',
	convertToUserscriptExtension(themeCSS, metadata),
	'utf8'
);
