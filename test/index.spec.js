/* global describe, it, before */

import chai from 'chai'
import FonugCharacterGenerator from './../src/index'
import Character from './../src/character'

chai.expect()

const expect = chai.expect

describe('NPC Generator', () => {
  let generator = null

  before(() => {
    generator = new FonugCharacterGenerator()
  })

  describe('generateCharacter', () => {
    let character
    before(() => {
      character = generator.generateCharacter()
    })

    it('should return an object', () => {
      expect(character.version).to.not.be.an.instanceof(Object)
    })

    it('should not return a FonugCharacterGenerator', () => {
      expect(character).to.not.be.an.instanceof(FonugCharacterGenerator)
    })

    it('should not return a NpcGenerator', () => {
      expect(character).to.not.be.an.instanceof(Character)
    })

    it('should return a valid version', () => {
      expect(character.version).to.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/)
    })
  })
})
