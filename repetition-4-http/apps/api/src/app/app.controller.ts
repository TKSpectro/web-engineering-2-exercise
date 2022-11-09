import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('count/:count')
  getCount(@Param('count') count: number): number[] {
    return this.appService.getCount(count);
  }
}
