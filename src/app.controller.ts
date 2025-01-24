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
  
  @Get('total-sales/:year')
  async getTotalSalesForYear(@Param('year') year: any, @Query('is_sort') isSort: any): Promise<number> {
    return this.appService.getTotalSalesForYear(year, isSort);
  }

  @Get('customer')
  async getListCustomers(): Promise<{ page: number, total: number, data: any }> {
    return this.appService.getListCustomers();
  }
  
}
