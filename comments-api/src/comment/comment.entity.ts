import { Expose } from 'class-transformer';

import { UserEntity } from '../user/user.entity';

@Expose()
export class CommentEntity {
  @Expose()
  public postId: string;

  @Expose()
  public id: string;

  @Expose()
  public parentId: string;

  @Expose()
  public body: string;

  @Expose()
  public type: string;

  @Expose()
  public user: Partial<UserEntity>;
}

export interface CommentKey {
  postId: string;
  id: string;
}
