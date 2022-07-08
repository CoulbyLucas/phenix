import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, take } from 'rxjs'
import { Apple, Color } from '@phenix/dtos'

@Injectable({
  providedIn: 'root',
})
export class AppleService {
  apples$ = new BehaviorSubject<Apple[]>([])

  constructor(private readonly http: HttpClient) {}

  fecthApples() {
    this.http
      .get<Apple[]>('/apples-api')
      .pipe(take(1))
      .subscribe((apples) => {
        this.apples$.next(apples)
      })
  }

  randomApple() {
    this.http
      .get<Apple[]>('/apples-api/random')
      .pipe(take(1))
      .subscribe((apples) => {
        this.apples$.next(apples)
      })
  }

  addApple(color: Color) {
    this.http
      .post<Apple[]>('/apples-api', { color })
      .pipe(take(1))
      .subscribe((apple) => {
        this.apples$.next(apple)
      })
  }

  removeAppleAtIndex(index: number) {
    this.http
      .delete<Apple[]>(`/apples-api/at/${index}`)
      .pipe(take(1))
      .subscribe((apples) => {
        this.apples$.next(apples)
      })
  }

  removeApples(color: Color) {
    this.http
      .delete<Apple[]>(`/apples-api/${color}`)
      .pipe(take(1))
      .subscribe((apples) => {
        this.apples$.next(apples)
      })
  }
}
