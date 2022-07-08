import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AppleService } from './services/apple.service'
import { Apple, Color } from '@phenix/dtos'

@Component({
  selector: 'phenix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apples$: Observable<Apple[]>

  constructor(private readonly appleService: AppleService) {}

  ngOnInit(): void {
    this.apples$ = this.appleService.apples$

    this.appleService.fecthApples()
  }

  randomApple() {
    this.appleService.randomApple()
  }

  addApple(color: Color) {
    this.appleService.addApple(color)
  }

  removeApples(color: 'red' | 'green') {
    this.appleService.removeApples(color)
  }

  removeAppleAtIndex(index: number) {
    this.appleService.removeAppleAtIndex(index)
  }
}
