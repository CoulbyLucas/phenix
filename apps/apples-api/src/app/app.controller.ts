import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { Color } from '@phenix/dtos'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApples() {
    return this.appService.getApples()
  }

  @Get('random')
  randomApple() {
    return this.appService.randomApple()
  }

  @Post()
  addApple(@Body() body: { color: Color }) {
    return this.appService.addApple(body)
  }

  @Delete('at/:index')
  removeAppleAtIndex(@Param('index') index: string) {
    return this.appService.removeAppleAtIndex(+index)
  }

  @Delete(':color')
  removeApples(@Param('color') color: Color) {
    return this.appService.removeApples(color)
  }
}
