// react libraries
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// third party libraries
import moment from 'moment';
import urlParser from 'url-parse';

// styles
import './Item.scss';

// actions
import handleFetchItem from 'actions/itemsAction';

// components
import Loader from 'common/Loader/Loader';

type Props = {
  handleFetchItem: any,
  itemId: number,
  item: any,
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
    const { item, handleFetchItem, itemId } = this.props;

    if (!item.id) {
      handleFetchItem(itemId);
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
    if (!item && !isloading) {
      return (
        <div className="hidden" />
      );
    }

    return (
      <li className="item" id={item.id}>
        {
          isloading
            ? <Loader />
            : (
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
                  to={{
                    pathname: `/item/${item.id}`,
                    state: item
                  }}
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
                    {moment.unix(item.time).fromNow()}
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

export default connect(mapStateToProps, { handleFetchItem })(Item);
