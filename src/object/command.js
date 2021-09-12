import { Observable } from "domodel"

export default class extends Observable {

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
