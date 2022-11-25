const fs = require('fs');

const getDocumentFileType = async (image) => {
  // Determine header bytes
  const determineHeader = () =>
    new Promise((resolve, reject) => {
      try {
        const file = fs.readFileSync(image.path, null).buffer;
        const arr = new Uint8Array(file).subarray(0, 4);
        const header = arr.reduce(
          (result, byte) => result + byte.toString(16),
          ''
        );
        resolve(header);
      } catch (err) {
        reject(err);
      }
    });

  try {
    const header = await determineHeader();

    switch (header) {
      case '89504e47':
        return 'image/pdf';
      case '47494638':
        return 'image/doc';
      case 'ffd8ffe0':
      case 'ffd8ffe1':
      case 'ffd8ffe2':
      case 'ffd8ffe3':
      case 'ffd8ffe8':
        return 'image/docx';
      default:
        return 'unknown';
    }
  } catch (err) {
    return 'unknown';
  }
};

module.exports = getDocumentFileType;
