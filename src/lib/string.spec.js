import { commaSeparatedToArray, transformTitelcase } from "./string"
import { sortArrayAlphabetically } from "./string"
import { reduceDublicates } from "./string"



describe('lib/string', () => {
    describe('commaSeparatedToArray', () => {
      it('returns ["a", "b"] for text "a,b"', () => {
          const result = commaSeparatedToArray('a,b')
          expect(result).toEqual(['a', 'b'])
      })  
      it('returns ["a", "b"] for text "  a , b "', () => {
          const result = commaSeparatedToArray(' a , b  ')
          expect(result).toEqual(['a', 'b'])
      })
      it('returns ["a b", "c"] for text "a b,c"', () => {
          const result = commaSeparatedToArray('a b, c')
          expect(result).toEqual(['a b', 'c'])
      })
      it('returns ["a", "b", "c"] for text "a, b,c"', () => {
          const result = commaSeparatedToArray('a, b,c')
          expect(result).toEqual(['a', 'b', 'c'])
      })
    })
    describe('sortArrayAlphabetically', () => {
      it('returns the array in ascending alphabetical order', () => {
          const result = sortArrayAlphabetically('e,d,c,b,a')
          expect(result).toEqual(['a', 'b', 'c', 'd', 'e'])
      })
    })
    describe('reduceDublicates', () => {
      it('contains each strings only once in the resulting array', () => {
          const result = reduceDublicates('a,b,c,c,c,d,d,e,e')
          expect(result).toBe(['a','b','c','d','e'])
      })
    })
    describe('reduceDublicatesv2', () => {
        it('contains each strings only once', () => {
            const result = reduceDublicates('a,b,c,d,d,d,e,f,g,g,g')
            expect(result).toBe(['a','b','c','d','e','f','g'])
        })
    })
    describe('transformTitlecase', () => {
      it('returns all items in Titlecase', () => {
          const result = transformTitelcase('john', 'jane', 'pete')
          expect(result).toEqual(['John', 'Jane', 'Pete'])
      })
    })
})