import cardExists from './luhnAlgo-dieron'

describe('Validate Luhn Algo', () => {
    it('Accept valid and in list', () => {
        expect(cardExists("79927398713")).toBe(true)
    })

    it('Not accept letters', () => {
        expect(cardExists("7992739b713")).toBe(false)
    })

    it('Accept valid and in list', () => {
        expect(cardExists("6389369724428351")).toBe(true)
    })

    it('Not accept letters', () => {
        expect(cardExists("ansdhAJJSDlkjas")).toBe(false)
    })

    it('Card not in list', () => {
        expect(cardExists("6761277809316")).toBe(false)
    })

    it('Ignore spaces', () => {
        expect(cardExists("799 273 9871 3")).toBe(false)
    })

})