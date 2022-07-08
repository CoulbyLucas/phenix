import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppleListComponent } from './apple-list/apple-list.component'
import { AppleActionsComponent } from './apple-actions/apple-actions.component'

@NgModule({
  imports: [CommonModule],
  declarations: [AppleListComponent, AppleActionsComponent],
  exports: [AppleListComponent, AppleActionsComponent],
})
export class UiModule {}
