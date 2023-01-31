import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { plainToInstance } from 'class-transformer';

import { UserKey, UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(process.env.USER_TABLE_NAME)
    private userModel: Model<UserEntity, UserKey>,
  ) {}

  async findUserByEmail(email): Promise<UserEntity> {
    const users = await this.userModel.query('email').eq(email).limit(1).exec();

    if (!users || !users.length) {
      return null;
    }

    return users[0];
  }

  /**
   * @todo find a solution to avoid double class transformation
   * @param user
   */
  async findOrCreateUser(user: UserEntity): Promise<UserEntity> {
    const userInfo = await this.findUserByEmail(user.email);

    if (userInfo) {
      return userInfo;
    }

    const createdUser = await this.userModel.create(
      plainToInstance(UserEntity, user),
    );
    if (!createdUser) {
      return null;
    }

    return createdUser;
  }
}
