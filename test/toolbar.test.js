import assert from "assert"
import { Observable } from "domodel"

import { Toolbar } from "../index.js"

describe("toolbar", () => {

	it("instance", () => {
		assert.ok(Toolbar.prototype instanceof Observable)
	})

})
