import * as config from './../package.json'
import Character from './../src/character'

/**
 * The class defining the character generator
 * Instanciate it whith the contentProvider wanted, are use the default ones
 * The generate random generate characters that will use the given content providers
 * @export
 * @class FonugGenerator
 */
export default class FonugCharacterGenerator {
  constructor () {
    this.version = config.version
  }

  /**
   * Generate a new random Character
   * @returns Object The character generated
   * @memberof FonugGenerator
   */
  generateCharacter () {
    const character = new Character()

    return Object.assign({}, character, {
      version: this.version
    })
  }
}
