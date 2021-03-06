const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxpath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxpath, 'utf8');

module.exports = solc.compile(source,1).contracts[':Inbox'];

// function compilingPreparation() {
//     const buildPath = path.resolve(__dirname,'build');
//     fs.removeSync(buildPath);
//     return buildPath;
// }

// function createConfiguration () {
//     return {
//         language : 'Solidity',
//         sources : {
//             'Inbox.sol':{
//                 content: fs.readFileSync(path.resolve(__dirname,'contracts','Inbox.sol'),'utf8')
//             },
//         },
//         settings: {
//             outputSelection : {
//                 '*': {
//                     '*':['*']
//                 }
//             }
//         }
//     } ;
// }

// function compileSources(config ){
//     try {
//         return JSON.parse(solc.compile(JSON.stringify(config)));
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// function errorHandling(compiledSources) {
//     if (!compiledSources) {
//         console.error('>>>>>>>>>>>>>>>>>>>>>>>> ERRORS <<<<<<<<<<<<<<<<<<<<<<<<\n', 'NO OUTPUT');
//     } else if (compiledSources.errors) { // something went wrong.
//         console.error('>>>>>>>>>>>>>>>>>>>>>>>> ERRORS <<<<<<<<<<<<<<<<<<<<<<<<\n');
//         compiledSources.errors.map(error => console.log(error.formattedMessage));
//     }
// }

