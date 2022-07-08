import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { Apple } from '@phenix/dtos'

@Component({
  selector: 'phenix-apple-list',
  templateUrl: './apple-list.component.html',
  styleUrls: ['./apple-list.component.scss'],
})
export class AppleListComponent {
  @Input() apples$: Observable<Apple[]>
  @Output() onremove = new EventEmitter<number>()

  removeAppleAtIndex(index: number) {
    this.onremove.emit(index)
  }
}
