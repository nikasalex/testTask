import { Router } from 'express';
import { Comments } from '../controllers/commentsController';

const router = Router();
const commentController = new Comments()

router.get('/', commentController.getCommentsWithReplies );
router.post('/', commentController.sendComment)
router.post('/:commentId', commentController.sendReply)





export = router;
