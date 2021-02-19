const {search_index } = require("../app");

let data = [1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1];

// 
describe("searchIndixe", () => {
    it("should verify the truly index", () => {
        const result = search_index(data);
        expect(result).toStrictEqual(10);
    })
})