import { Query } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data')
  getData() {
    return this.appService.getData();
  }

  @Get('insert')
  insert(
    @Query() query: { id: string, name: string },
    // @Param('id') id: string,
    // @Param('name') name: string,
  ) {
    console.log(query);
    return this.appService.insert(query?.id, query?.name);
  }
}
