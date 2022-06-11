const fs = require('fs');

const themeCSS = fs.readFileSync('gen/theme.css', 'utf8');
const metadata = fs.readFileSync('style/userscript_metadata.js', 'utf8');

const removeMozDocument = (file) => {
	// Removes @moz-document
	return file.replace(
		/\/\* no-mobile-start \*\/[\s\S]+?\/\* no-mobile-end \*\//g,
		''
	);
};

const convertToUserscriptExtension = (css, meta) => {
	return meta + 'const css = `\n' + removeMozDocument(css) + `\`;
if (typeof GM_addStyle === 'function'){
	GM_addStyle(css);
} else {
	const style = document.createElement('style');
	style.type = 'text/css';
	style.textContent = css;
	document.body.appendChild(style);
}
`;
};

fs.writeFileSync(
	'High-Contrast-Dark-Theme-Userscript.user.js',
	convertToUserscriptExtension(themeCSS, metadata),
	'utf8'
);
