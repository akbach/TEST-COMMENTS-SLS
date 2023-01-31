import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { DatabaseModule } from './database/database.module';

const getBdConfig = () => {
  if (process.env.IS_OFFLINE) {
    return {
      local: process.env.DYNAMODB_ENDPOINT,
    };
  }
  return {};
};

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    DynamooseModule.forRoot(getBdConfig()),
    DatabaseModule,
    AuthModule,
    UserModule,
    CommentModule,
  ],
})
export class AppModule {}
