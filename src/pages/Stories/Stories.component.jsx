import React from 'react';
import { connect } from 'react-redux'

// components
import ItemList from 'components/ItemList/ItemList.component';
import Paginator from 'components/Paginator/Paginator.component';

// actions
import { handleFetchItems } from 'actions/storiesActions';

// thirdparty libraries
import _ from 'lodash';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 15
    }
    this.fetchStoryData = this.fetchStoryData.bind(this);
  }

  static get types() {
    return {
      top: 'topstories',
      ask: 'askstories',
      show: 'showstories',
      jobs: 'jobstories',
      new: 'newstories',
      best: 'beststories',
      comments: 'comments'
    };
  }

  componentDidMount() {
    const storyName = Stories.types[this.props.location.pathname.slice(1)];
    this.fetchStoryData(storyName);
  }

  componentWillReceiveProps(nextProps) {
    const storyName = Stories.types[nextProps.location.pathname.slice(1)];
    this.fetchStoryData(storyName);
  }

  /**
   * handles fetching of items based on story type eg. topstories
   * @author (Set the text for this tag by adding docthis.authorName to your settings file.)
   * @param {String} storyName
   * @memberof TopStories
   */
  fetchStoryData(storyName) {
    if (this.props.story.storyName !== storyName) {
      this.props.handleFetchItems(storyName);
    }
    else if (this.props.story.items.length < 1) {
      this.props.handleFetchItems(storyName);
    }
  }

  render() {
    return (
      <div>
        <ItemList items={this.props.story.items.slice(0,this.state.limit)}/>
        {
          this.props.story.items
          &&
            <Paginator
              limit={15}
              url={this.props.story.location}
              items={this.props.story.items}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const storyName = Stories.types[props.location.pathname.slice(1)]
  return {
    story: {
      items: state.storyTypes[storyName],
      location: props.location.pathname,
      storyName,
    }
  }
}

export default connect(mapStateToProps, {
  handleFetchItems
})(Stories);
