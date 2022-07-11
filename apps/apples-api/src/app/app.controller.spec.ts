import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()
  })

  describe('getApples', () => {
    it('should return "Welcome to apples-api!"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getApples()).toEqual([
        { character: '🍎', color: 'red' },
        { character: '🍏', color: 'green' },
      ])
    })
  })
})
