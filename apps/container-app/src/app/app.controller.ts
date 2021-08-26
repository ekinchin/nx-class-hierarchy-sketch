import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data')
  getData() {
    return this.appService.getData();
  }

  @Get('insert:id:name')
  insert(
    @Param('id') id: string,
    @Param('name') name: string,
  ) {
    return this.appService.insert(id, name);
  }
}
