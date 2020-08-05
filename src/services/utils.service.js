import * as fs from 'fs';

/**
 * Read a file asynchronously via a promise
 * @param {string} path path of the file
 * @return {Promise<string>} content of the file
 */
export const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err)
        return reject(err);
      return resolve(data);
    });
  });
}
