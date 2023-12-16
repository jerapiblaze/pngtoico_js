console.log('==== PNG TO ICO ====')
const fs = require('fs');
const toIco = require('to-ico');

console.log('Initializing...')
const fileList = fs.readdirSync('./input').filter(f => f.endsWith('.png'));

if (fileList.length <= 0){
	console.log('No file found. Exiting...');
	process.exit(0);
}

const convert = async (file) => {
	console.log(`Converting: ${file}`)
	const fileContent = fs.readFileSync(`./input/${file}`);
	toIco([fileContent],[256]).then(buf => {
		fs.writeFileSync(`./output/${file}.ico`, buf,);
	}).catch(e => {
		console.log(`Error: ${e}`);
	})
}

for (var i = 0; i < fileList.length; i++){
	convert(fileList[i]);
}

console.log('Completed.')