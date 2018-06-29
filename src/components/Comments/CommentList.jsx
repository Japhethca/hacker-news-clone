import React from 'react';

import Comment from './Comment';
import { ItemType } from '../../types';

type CommentListProps = {
  comments: ItemType[],
  titleHidden: boolean,
  commentTag?: string
}

const CommentList = ({ comments, titleHidden, commentTag }: CommentListProps) => (
  <div className="comment-list" id={commentTag}>
    { !titleHidden
    && (
      <h4>
        Comments
      </h4>
    )
    }
    {
      comments.map(commentID => <Comment key={commentID} commentId={commentID} />)
    }
  </div>
);

CommentList.defaultProps = {
  commentTag: ''
};

export default CommentList;
