import { Observable } from "domodel"

export default class extends Observable {

	constructor() {
		super()
		this._menu = null
		this._buttons = []
	}

	/**
	 * @param {Button} button
	 */
	addButton(button) {
		this.buttons.push(button)
	}

	/**
	 * @type {Menu}
	 */
	get menu() {
		return this._menu
	}

	set menu(menu) {
		this._menu = menu
	}

	/**
	 * @type {Button[]}
	 */
	get buttons() {
		return this._buttons
	}

}
