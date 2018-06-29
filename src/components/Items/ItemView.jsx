// react related libraries
import * as React from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

// other libs
import htmlRender from 'react-render-html';
import urlParser from 'url-parse';


// components
import Loader from 'common/Loader/Loader';


// styles
import './ItemView.scss';

// action & helpers
import handleFetchItem from 'actions/itemsAction';
import fromNow from 'helpers/fromNow';
import CommentList from '../Comments/CommentList';
import { ItemType } from '../../types';


type Props = {
  match: {
    params: any
  },
  item: ItemType,
  fetchItem: (number) => void,
  isloading: boolean
};

class ItemView extends React.Component<Props> {
  componentDidMount() {
    const { match: { params }, item, fetchItem } = this.props;
    if (!item) {
      fetchItem(params.itemId);
    }
  }

  render() {
    const { item, isloading } = this.props;
    return (
      <React.Fragment>
        <div className="item-view__loader">
          {isloading && <Loader />}
        </div>
        {
          item
          && (
            <div className="item-view">
              <h2 className="item-view__title">
                {
                  item.url
                    ? (
                      <a href={item.url}>
                        {item.title}
                        <span className="item-view__link">
                          (
                          {urlParser(item.url).host}
                          )
                        </span>
                      </a>
                    )
                    : item.title
                }
              </h2>
              <div className="item-view__meta">
                <span>
                  By
                  {` ${item.by}`}
                  {` | ${fromNow(item.time)}`}
                </span>
                {' | '}
                <Link to="#comment-list">
                  {`${item.kids ? item.kids.length : 0} `}
                  Comment(s)
                </Link>
              </div>
              <div className="item-view__content">
                {item.text && htmlRender(item.text)}
              </div>
              <React.Fragment>
                {item.kids && <CommentList comments={item.kids} commentTag="comment-list" />}
              </React.Fragment>
            </div>
          )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, { match: { params } }) => ({
  item: state.items[params.itemId],
  isloading: state.loader[params.itemId] || false
});

export default connect(mapStateToProps, { fetchItem: handleFetchItem })(ItemView);
