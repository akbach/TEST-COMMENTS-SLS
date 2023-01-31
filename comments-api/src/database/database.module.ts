import { Global, Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { CommentSchema } from '../comment/comment.schema';
import { UserSchema } from '../user/user.schema';
import { commentSerializer } from '../comment/comment.serializer';
import { userSerializer } from '../user/user.serializer';
@Global()
@Module({
  imports: [
    DynamooseModule.forFeatureAsync([
      {
        name: process.env.USER_TABLE_NAME,
        useFactory: () => {
          return UserSchema;
        },
        serializers: userSerializer,
      },
      {
        name: process.env.COMMENT_TABLE_NAME,
        useFactory: () => {
          console.log('toto', process.env.NODE_ENV);
          return CommentSchema;
        },
        serializers: commentSerializer,
      },
    ]),
  ],
  exports: [DynamooseModule],
})
export class DatabaseModule {}
