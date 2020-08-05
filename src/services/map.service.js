import {readFile} from "./utils.service";

export default class MapService {

  /**
   * @param {string} path
   */
  constructor(path) {
    try {
      this.getJSONObject(path).then(this.parse.bind(this));
    } catch (e) {
      throw e;
    }
  }

  /**
   * Get the json object in the file
   * @param {string} filePath path to the json file
   * @return {any} JSON object
   */
  async getJSONObject(filePath) {
    try {
      return await JSON.parse(await readFile(filePath));
    } catch (e if e instanceof SyntaxError) {
      throw new SyntaxError(e.message);
    } catch (e) {
      throw new Error(`File "${filePath}" not found`);
    }
  }

  /**
   * Parse the content of the map file
   * @param {object} data data from the file
   * @return {Promise<void>} When the parsing is finished
   */
  async parse(data) {

  }
}
