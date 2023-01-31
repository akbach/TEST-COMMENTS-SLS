import { UserEntity } from '../user/user.entity';

export type AuthPayloadPromise = Promise<Partial<UserEntity>>;

export default interface AuthClient {
  verify(token: string): AuthPayloadPromise;
  support(provider: string): boolean;
}
