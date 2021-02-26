import { commaSeparatedToArray} from "./string"

describe('lib/string', () => {
    describe('commaSeparatedToArray', () => {
      it('returns ["a", "b"] for text "a,b"', () => {
          const result = commaSeparatedToArray('a,b')
          expect(result).toEqual(['A', 'B'])
      })  
      it('returns ["a", "b"] for text "  a , b "', () => {
          const result = commaSeparatedToArray(' a , b  ')
          expect(result).toEqual(['A', 'B'])
      })
      it('returns ["a b", "c"] for text "a b,c"', () => {
          const result = commaSeparatedToArray('a b, c')
          expect(result).toEqual(['A b', 'C'])
      })
      it('returns ["a", "b", "c"] for text "a, b,c"', () => {
          const result = commaSeparatedToArray('a, b,c')
          expect(result).toEqual(['A', 'B', 'C'])
      })
      it('returns the array in ascending alphabetical order', () => {
          const result = commaSeparatedToArray('e,d,c,b,a')
          expect(result).toEqual(['A', 'B', 'C', 'D', 'E'])
      })
      it('returns all items in Titlecase', () => {
          const result = commaSeparatedToArray('john, jane, pete')
          expect(result).toEqual(['Jane', 'John', 'Pete'])
      })
        it('contains each strings only once in the resulting array', () => {
            const result = commaSeparatedToArray('a,b,c,c,c,d,d,e,e')
            expect(result).toStrictEqual(['A','B','C','D','E'])
        })
    })
})