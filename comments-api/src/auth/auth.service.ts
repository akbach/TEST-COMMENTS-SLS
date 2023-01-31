import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { instanceToPlain } from 'class-transformer';

import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

import authenticateUser from './clients/auth.client';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(token: string, provider: string) {
    const authPayload = await authenticateUser(token, provider);
    const user = await this.userService.findOrCreateUser(
      <UserEntity>authPayload,
    );

    return {
      ...user,
      token: this.jwtService.sign(instanceToPlain(user)),
    };
  }
}
