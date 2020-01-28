const fs = require('fs');
const testFolder = './logos/';
const data = require('./newItems.json');

// fs.readdir(testFolder, (err, files) => {
// 	let newItems = [];
// 	data.forEach(item => {
// 		if (files.includes(item.files[0])) {
// 			newItems.push(item);
// 		}
// 	});
// 	fs.writeFile('./newItems.json', JSON.stringify(newItems), err => {
// 		if (err) throw err;
// 		console.log('The file has been saved!');
// 	});
// });

const items = {};

data.forEach(item => {
	if (!items[item.type]) items[item.type] = [];

	items[item.type].push(item);
});

fs.writeFile('./categories.json', JSON.stringify(items), err => {
	if (err) throw err;
	console.log('The file has been saved!');
});
