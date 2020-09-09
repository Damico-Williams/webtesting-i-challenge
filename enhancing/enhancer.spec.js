const enhancer = require('./enhancer.js');
// test away!

item = {
    name: "sword",
    durability: 80,
    enhancment: 20
}

describe("testing the enhancer", () => {
    it("repairs", () => {
        expect(enhancer.repair(item).durability).toEqual(100)
    })

    it("succeeds", () => {
        const newItem = enhancer.success(item)
        const stockEnhancment = item.enhancment

        if(item.enhancment === 20) {
            expect(newItem.enhancment).toEqual(stockEnhancment)
        } else {
            expect(newItem.enhancment).toEqual(stockEnhancment + 1)
        }
    })

    it("fails", () => {
        expect()
    })
})