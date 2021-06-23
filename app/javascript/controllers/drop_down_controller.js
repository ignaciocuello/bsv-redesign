import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "flyout" ]

  show() {
    this.flyoutTarget.classList.remove('hidden')
  }

  hide() {
    this.flyoutTarget.classList.add('hidden')
  }
}
