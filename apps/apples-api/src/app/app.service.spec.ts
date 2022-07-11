import { Test } from '@nestjs/testing'

import { AppService } from './app.service'

describe('AppService', () => {
  let service: AppService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    service = app.get<AppService>(AppService)
  })

  describe('getApples', () => {
    it('should return "Welcome to apples-api!"', () => {
      expect(service.getApples()).toEqual([
        { character: '🍎', color: 'red' },
        { character: '🍏', color: 'green' },
      ])
    })
  })
})
