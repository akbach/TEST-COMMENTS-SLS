import * as dynamooseDB from 'dynamoose';
import { IndexType } from 'dynamoose/dist/Schema';
export const CommentSchema = new dynamooseDB.Schema(
  {
    postId: {
      type: String,
      hashKey: true,
    },
    id: {
      type: String,
      rangeKey: true,
    },
    body: String,
    user: {
      type: Object,
      schema: {
        name: { type: String, required: true },
        picture: { type: String, required: false },
      },
    },
    type: {
      type: String,
      default: 'comment',
      forceDefault: true,
      index: {
        name: 'typeIndex',
        type: IndexType.global,
      },
    },
  },
  {
    timestamps: true,
  },
);
