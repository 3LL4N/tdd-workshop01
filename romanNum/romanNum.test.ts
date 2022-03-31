import convertToRoman from './romanNum-dieron'

describe('Validate MinMax Scaling', () => {
    it('Correct Conversion', () => {
        expect(convertToRoman(123)).toStrictEqual("CXXIII")
    })

    it('Large Number', () => {
        expect(convertToRoman(3234)).toStrictEqual("MMMCCXXXIV")
    })

    it('A Very Large Number', () => {
        expect(convertToRoman(33445)).toStrictEqual("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDXLV")
    })
})