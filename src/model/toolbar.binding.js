import { Binding } from "domodel"

/**
 * @global
 */
class ToolbarBinding extends Binding {

	/**
	 * @param {object}  properties
	 * @param {Editor}  properties.editor
	 * @param {Toolbar} properties.toolbar
	 */
	constructor(properties) {
		super(properties)
	}

}

export default ToolbarBinding
