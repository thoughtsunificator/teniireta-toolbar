import assert from "assert"

import { Observable } from "domodel"

import { Command } from "../index.js"

describe("command", () => {

	it("instance", () => {
		assert.ok(Command.prototype instanceof Observable)
	})

})
