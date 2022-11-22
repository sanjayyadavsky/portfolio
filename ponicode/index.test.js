const rewire = require("rewire")
const index = rewire("../index")
const showSlides = index.__get__("showSlides")
// @ponicode
describe("showSlides", () => {
    test("0", () => {
        document.body.insertAdjacentHTML("afterbegin", `<div id="wrapper0"><div>
        	<div class="mySlides"></div>
        	<div class="dot"></div>
        </div>
        </div>`)
        let result = showSlides()
        expect(result).toMatchSnapshot()
        expect(document.getElementById("wrapper0")).to.matchSnapshot()
        document.body.removeChild(document.getElementById("wrapper0"))
    })
})
