// react libraries
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// third party libraries
import moment from 'moment';

// styles
import './Item.scss';

//actions
import { handleFetchItem } from 'actions/itemsAction';

class Item extends React.Component {
  constructor(props){
    super(props);
    this.hideItem = this.hideItem.bind(this);
  }

  componentDidMount() {
    if (!this.props.items) {
      this.props.handleFetchItem(this.props.itemId);
    }
  }

  hideItem(event) {
    const itemRef = document.getElementById(this.props.item.id);
    itemRef.style.display = 'none';
  }

  render() {
    const item = this.props.item;
    if (!item) {
      return (
        <div className="hidden"></div>
      );
    }

    return (
      <li className="item" id={item.id}>
        <div className="item__details">
          {
            item.url
              ? <a className="item__link" href={item.url}>{item.title}</a>
              : <Link
                  to={{
                    pathname:`/item/${item.id}`,
                    state: item
                  }}
                  className="item__link"
                >
                  {item.title}
                </Link>
          }
          <div className="item__meta">
            <span>
              {item.score} points by {item.by} {moment.unix(item.time).fromNow()}
            </span> | &nbsp;
            <button className="hide-btn" onClick={this.hideItem}>hide</button> | &nbsp;
            <Link className="item__comments" to="">{item.kids ? item.kids.length : 0} comment(s)</Link>
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    item: state.items[props.itemId] || {}
  }
}

export default connect(mapStateToProps, {handleFetchItem})(Item);
