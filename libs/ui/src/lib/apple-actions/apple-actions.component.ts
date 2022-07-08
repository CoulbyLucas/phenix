import { Component, EventEmitter, Output } from '@angular/core'
import { Color } from '@phenix/dtos'

@Component({
  selector: 'phenix-apple-actions',
  templateUrl: './apple-actions.component.html',
  styleUrls: ['./apple-actions.component.scss'],
})
export class AppleActionsComponent {
  @Output() onrandomApple = new EventEmitter()
  @Output() onaddApple = new EventEmitter<Color>()
  @Output() onremoveApples = new EventEmitter<Color>()

  randomApple() {
    this.onrandomApple.emit()
  }

  addApple(color: Color) {
    this.onaddApple.emit(color)
  }

  removeApples(color: Color) {
    this.onremoveApples.emit(color)
  }
}
