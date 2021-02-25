// test driven development

import { add, subtract } from "./math"

describe('lib/math', () => {
  describe('add', () => {
    it('returns the sum 7 of 4 + 3', () => {
        const result = add(4,3)
        expect(result).toBe(7)
    })

    it('returns the sum 3 and 0, wich is 3', () => {
        const result = add(3, 0)
        expect(result).toBe(3)
    })

    it('returns the sum of 1, 2, 3, 4, 5 (=15)', () => {
        const result = add(1,2,3,4,5)
        expect(result).toBe(15)
    })
  })
  
    describe('minus', () => {
        it('return the result of 4 - 1, wich is 1', () => {
            const result = subtract(4,3)
            expect(result).toBe(1)
        })
    })
})