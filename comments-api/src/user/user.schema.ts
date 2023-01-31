import * as dynamooseDB from 'dynamoose';
export const UserSchema = new dynamooseDB.Schema({
  email: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
});
