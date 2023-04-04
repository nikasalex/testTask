import { AppDataSource } from '../data_source';
import { Reply } from '../entity/Reply';

export const replyRepository = AppDataSource.getRepository(Reply).extend({
  findByCommentId(id: number) {
    return this.find({
      relations: {
        comment: true,
      },
      where: {
        comment: {
          id,
        },
      },
    });
  },
});
