const fs = require('fs');
const path = require('path');

// Caminho do arquivo no root do repositório
const sourceFilePath = path.resolve(__dirname, './../preflight.css');

// Caminho de destino dentro de node_modules
const destinationFolderPath = path.resolve(__dirname, './../node_modules/tailwindcss/lib/css/');

// Garante que o destino existe
if (!fs.existsSync(destinationFolderPath)) {
  fs.mkdirSync(destinationFolderPath, { recursive: true });
}

// Caminho de destino do arquivo
const destinationFilePath = path.join(destinationFolderPath, 'preflight.css');

// Copia o arquivo
fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
  if (err) {
    console.error('Erro ao copiar o arquivo:', err);
  } else {
    console.log('Arquivo copiado com sucesso!');
  }
});
