import * as React from 'react';
import { connect } from 'react-redux';

// components
import ItemList from 'components/ItemList';
import Paginator from 'components/Paginator';

// actions
import handleFetchItems from 'actions/storiesActions';

type Props = {
  location: any,
  story: any,
  handleFetchItems: any
};

type State = {
  limit: number
};
class Stories extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      limit: 15
    };
    this.fetchStoryData = this.fetchStoryData.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const storyName = Stories.types[location.pathname.slice(1)];
    this.fetchStoryData(storyName);
  }

  componentWillReceiveProps(nextProps) {
    const storyName = Stories.types[nextProps.location.pathname.slice(1)];
    this.fetchStoryData(storyName);
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

  /**
   * handles fetching of items based on story type eg. topstories
   * @author (Set the text for this tag by adding docthis.authorName to your settings file.)
   * @param {String} storyName
   * @memberof TopStories
   * @returns {Null} - d
   */
  fetchStoryData(storyName) {
    const { story, handleFetchItems } = this.props;

    if (story.storyName !== storyName) {
      handleFetchItems(storyName);
    } else if (story.items.length < 1) {
      handleFetchItems(storyName);
    }
  }

  render() {
    const { story } = this.props;
    const { limit } = this.state;
    return (
      <div>
        <ItemList items={story.items.slice(0, limit)} />
        {
          story.items
          && (
          <Paginator
            limit={15}
            url={story.location}
            items={story.items}
          />
          )
        }
      </div>
    );
  }
}

Stories.propsTypes = {

};

const mapStateToProps = (state, { location }) => {
  const storyName = Stories.types[location.pathname.slice(1)];
  return {
    story: {
      items: state.storyTypes[storyName],
      location: location.pathname,
      storyName,
    }
  };
};

export default connect(mapStateToProps, {
  handleFetchItems
})(Stories);
