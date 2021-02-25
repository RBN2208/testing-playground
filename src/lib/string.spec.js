import { commaSeparatedToArray } from "./string"

describe('lib/string', () => {
    describe('commaSeparatedToArray', () => {
      it('returns ["a", "b"] for text "a,b"', () => {
          const result = commaSeparatedToArray('a,b')
          expect(result).toStrictEqual(['a', 'b'])
      })  
      it('returns ["a", "b"] for text "  a , b "', () => {
          const result = commaSeparatedToArray(' a , b  ')
          expect(result).toStrictEqual(['a', 'b'])
      })
      it('returns ["a b", "c"] for text "a b,c"', () => {
          const result = commaSeparatedToArray('a b, c')
          expect(result).toStrictEqual(['a b', 'c'])
      })
      it('returns ["a", "b", "c"] for text "a, b,c"', () => {
          const result = commaSeparatedToArray('a, b,c')
          expect(result).toStrictEqual(['a', 'b', 'c'])
      })
      it.todo('returns the array in ascending alphabetical order')
      it.todo('contains each strings only once in the resulting array')
      it.todo('returns all items in Titlecase')
    })
})
