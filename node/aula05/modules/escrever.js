const fs = require('fs').promises;


module.exports = (caminho, dados) => {
   fs.writeFile(caminho, dados, {flag: 'w', encoding:'utf8'});
}
// fs.writeFile(caminhoArquivo, 'estou escrevendo neste arquivo com node.js\n', {flag: 'a', encoding: 'utf-8'});
