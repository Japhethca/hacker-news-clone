// react libraries
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// third party libraries
import urlParser from 'url-parse';

// styles
import './Item.scss';

// actions
import handleFetchItem from 'actions/itemsAction';
import Loader from 'common/Loader/Loader';
import fromNow from 'helpers/fromNow';
import { ItemType } from '../../types';

// @flow
type Props = {
  fetchItem: (number) => void,
  itemId: number,
  item: ItemType,
  isloading: boolean
};

class Item extends React.Component<Props> {
  /**
   *Creates an instance of Item.
   * @param {*} props
   * @memberof Item
   */
  constructor(props) {
    super(props);
    this.hideItem = this.hideItem.bind(this);
  }

  /**
   * @memberof Item
   * @returns {none} - returns none
   */
  componentDidMount() {
    const { item, fetchItem, itemId } = this.props;

    if (!item.id) {
      fetchItem(itemId);
    }
  }

  /**
   * A method for hiding item in a list
   * @memberof Item
   * @returns {null} - return null
   */
  hideItem() {
    const { item } = this.props;
    const itemRef = document.getElementById(item.id);
    itemRef.style.display = 'none';
  }

  /**
   * @returns {JSXElement} -returns React Element
   * @memberof Item
   */
  render() {
    const { item, isloading } = this.props;
    return (
      <li className="item" id={item.id}>
        {
          isloading
            ? <Loader />
            : item.title && (
              <div className="item__details">
                {
            item.url
              ? (
                <a className="item__link" href={item.url}>
                  {item.title}
                  <span className="item__link__url">
                    &nbsp;
                    {`(${urlParser(item.url).host})`}
                  </span>
                </a>
              )
              : (
                <Link
                  to={`/item/${item.id}`}
                  className="item__link"
                >
                  {item.title}
                </Link>
              )
          }
                <div className="item__meta">
                  <span>
                    {`${item.score} `}
                    points by
                    {` ${item.by} `}
                    {fromNow(item.time)}
                  </span>
                  {' | '}
                  <button
                    type="button"
                    className="hide-btn"
                    onClick={this.hideItem}
                  >
                  hide
                  </button>
                  {' | '}
                  <Link
                    className="item__comments"
                    to={`item/${item.id}/comments`}
                  >
                    {item.kids ? item.kids.length : 0}
                    &nbsp;comment(s)
                  </Link>
                </div>
              </div>
            )
        }
      </li>
    );
  }
}

const mapStateToProps = (state, { itemId }) => ({
  item: state.items[itemId] || {},
  isloading: state.loader[itemId] || false
});

export default connect(mapStateToProps, { fetchItem: handleFetchItem })(Item);
