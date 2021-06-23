import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "flyout" ]

  toggle() {
    this.flyoutTarget.classList.toggle('hidden')
  }
}
