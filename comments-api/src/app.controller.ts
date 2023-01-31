import { Controller, Get } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos(): Promise<any> {
    const newUser = {
      id: 'test',
      fullName: 'toto',
      email: 'test',
      provider: 'test',
    };
    return {
      test: newUser,
    };
  }
}
