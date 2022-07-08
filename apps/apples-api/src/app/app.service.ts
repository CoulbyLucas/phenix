import { Injectable } from '@nestjs/common'
import { Apple, Color } from '@phenix/dtos'

@Injectable()
export class AppService {
  private defaultApples: Apple[] = [
    { character: '🍎', color: 'red' },
    { character: '🍏', color: 'green' },
  ]

  apples: Apple[] = [...this.defaultApples]

  getApples(): Apple[] {
    return this.apples
  }

  randomApple(): Apple[] {
    const randomIndex = Math.floor(Math.random() * this.defaultApples.length)
    const randomApple = this.defaultApples[randomIndex]
    this.apples.push(randomApple)
    return this.getApples()
  }

  addApple(body: { color: Color }): Apple[] {
    const apple =
      body.color === 'red' ? this.defaultApples[0] : this.defaultApples[1]
    this.apples.push(apple)
    return this.getApples()
  }

  removeAppleAtIndex(index: number): Apple[] {
    this.apples.splice(index, 1)
    return this.getApples()
  }

  removeApples(color: 'red' | 'green'): Apple[] {
    this.apples = this.apples.filter((apple) => apple.color !== color)
    return this.getApples()
  }
}
