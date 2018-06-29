import * as React from 'react';
import { connect } from 'react-redux';

import htmlRender from 'react-render-html';


import fromNow from 'helpers/fromNow';
import handleFetchItem from 'actions/itemsAction';
import Loader from 'common/Loader/Loader';
import CommentList from './CommentList';
import { ItemType } from '../../types';

// styles
import './Comment.scss';

// comment props
type CommentProps = {
  comment: ItemType,
  commentId: number,
  fetchItem: (number) => any,
  isLoading: boolean
}

type CommentState = {
  comment: ItemType,
  isHidden: boolean
}

class Comment extends React.Component<CommentProps, CommentState> {
  constructor(props) {
    super(props);
    this.state = {
      comment: {},
      isHidden: false
    };
    this.showHideComment = this.showHideComment.bind(this);
  }

  componentDidMount() {
    const { comment, commentId, fetchItem } = this.props;
    if (!comment) {
      fetchItem(commentId);
    }
  }


  componentWillReceiveProps(nextProps) {
    const { comment } = this.props;
    if (comment !== nextProps.comment) {
      this.setState({ comment: nextProps.comment });
    }
  }

  showHideComment() {
    const { comment } = this.props;
    const commentRef = document.getElementById(comment.id);

    if (commentRef.style.display !== 'none') {
      commentRef.style.display = 'none';
      this.setState({ isHidden: true });
    } else {
      commentRef.style.display = 'block';
      this.setState({ isHidden: false });
    }
  }

  render() {
    const { isLoading } = this.props;
    const { comment, isHidden } = this.state;
    return (
      <div className="comment">
        {isLoading ? <Loader />
          : (
            <div className="comment__meta">
              <button
                type="button"
                className="comment__toggle"
                onClick={this.showHideComment}
              >
            [
                {isHidden ? '+' : '-'}
            ]
              </button>
              <span className="comment__meta__author">
                {comment.by}
              </span>
              <span className="comment__meta__date">
                {fromNow(comment.time)}
              </span>
              {
            isHidden
            && (
              <span>
                ,
                {` ${comment.kids ? comment.kids.length : 0} `}
                replies
              </span>
            )
          }
            </div>
          )
        }
        <div className="comment__content" id={`${comment.id}`}>
          {comment.text && htmlRender(comment.text)}
          <div className="comment__replies">
            {comment.kids && <CommentList titleHidden comments={comment.kids} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { commentId }) => ({
  comment: state.items[commentId],
  isLoading: state.loader[commentId]
});

export default connect(mapStateToProps, { fetchItem: handleFetchItem })(Comment);
