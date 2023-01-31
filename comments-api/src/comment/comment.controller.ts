import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Get('')
  async list() {
    return this.commentService.getLastComments();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() comment: CommentEntity, @Request() req) {
    return await this.commentService.createComment(comment, req.user);
  }

  @Get('/post/:postId')
  async listByPost(@Param() param) {
    return await this.commentService.getCommentsByPostId(param.postId);
  }
}
