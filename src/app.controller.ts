import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getGreat(): string {
    return this.appService.getGreat();
  }

  @Post()
  isPalindrome(@Body() body: any): any {
    return this.appService.isPalindrome(body.str);
  }
}
