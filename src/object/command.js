import { Observable } from "domodel"

/**
 * @global
 */
class Command extends Observable {

	/**
	 * @param   {object}  model
	 * @param   {Binding} binding
	 */
	constructor(model, binding) {
		this._model = model
		this._binding = binding
	}

	/**
	 * @type {object}
	 */
	get model() {
		return this._model
	}

	/**
	 * @type {Binding}
	 */
	get binding() {
		return this._binding
	}

	/**
	 * @param   {object} data
	 */
	insertNode(data) {
		data.range.insertNode(data.fragment)
	}

	/**
	 * @param   {object} data
	 * @returns {boolean}
	 */
	testSelection(data) {
		return false
	}

	/**
	 * @abstract
	 * @param   {object} data
	 */
	beforeExtract(data) {}

	/**
	 * @abstract
	 * @param   {object} data
	 * @returns {BBNode}
	 */
	createBBNode(data) {}

}

export default Command
