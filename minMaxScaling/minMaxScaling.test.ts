import minMaxScaling from './minMaxScaling-dieron'

describe('Validate MinMax Scaling', () => {
    it('Correct Conversion', () => {
        expect(minMaxScaling([5, 8, 4, 7, 3])).toStrictEqual([0.4, 1, 0.2, 0.8, 0])
    })

    it('Correct Conversion', () => {
        expect(minMaxScaling([43, 5, 6, 7, 8])).toStrictEqual([ 1, 0, 0, 0.1, 0.1 ])
    })

    it('Returns emtpy list if empty', () => {
        expect(minMaxScaling([])).toStrictEqual([])
    })

    it('Returns list if all are equal', () => {
        expect(minMaxScaling([1, 1, 1])).toStrictEqual([1, 1, 1])
    })
})