import { Binding } from "domodel"

export default class extends Binding {

	onCreated() {

		const { editor, toolbar } = this.properties

		toolbar.listen("selection format", bbcode => {
			editor.emit("command run", bbcode)
			if (toolbar.menu !== null && toolbar.menu.opened === true) {
				toolbar.menu.emit("close")
			}
		})

		this.root.ownerDocument.addEventListener("keypress", event => {
			if (event.key === "Escape" && toolbar.menu !== null && toolbar.menu.opened === true) {
				toolbar.menu.emit("close")
			}
		})

	}

}
