import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { SortOrder } from 'dynamoose/dist/General';

import { UserEntity } from '../user/user.entity';

import { CommentEntity, CommentKey } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(process.env.COMMENT_TABLE_NAME)
    private commentModel: Model<CommentEntity, CommentKey>,
  ) {}

  async createComment(comment: CommentEntity, user: UserEntity) {
    comment.user = {
      name: user.name,
      picture: user.picture,
    };
    if (comment.parentId) {
      comment.id = comment.parentId + '#' + Date.now().toString();
    } else {
      comment.id = Date.now().toString();
    }
    return this.commentModel.create(comment);
  }

  async getLastComments() {
    const dbComments = await this.commentModel
      .query('type')
      .eq('comment')
      .sort(SortOrder.ascending)
      .limit(20)
      .using('typeIndex')
      .exec();
    return this.commentModel.serializeMany(dbComments, 'article');
  }

  async getCommentsByPostId(postId: string) {
    const dbComments = await this.commentModel
      .query({
        postId: postId,
      })
      .exec();
    return this.commentModel.serializeMany(dbComments, 'article');
  }
}
