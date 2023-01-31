import { Expose } from 'class-transformer';

export class UserEntity {
  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  picture: string;
}

export interface UserKey {
  email: string;
}
