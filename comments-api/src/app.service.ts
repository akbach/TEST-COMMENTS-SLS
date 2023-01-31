import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getBlogs(): Promise<any> {
    return {
      ok: true,
    };
  }
}
