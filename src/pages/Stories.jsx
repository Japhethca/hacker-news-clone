// react related libraries
import * as React from 'react';
import { connect } from 'react-redux';

// thirdparty library
import qs from 'qs';


// components
import ItemList from 'components/Items/ItemList';
import Paginator from 'components/Paginator';
import DummyList from 'components/DummyList';


// actions
import handleFetchItems from 'actions/storiesActions';


type StoriesProps = {
  location: {
    search: string,
    pathname: string
  },
  story: {
    items: number[],
    location: string,
    storyName: string,
    totalPages: number
  },
  fetchItems: (x:string) => void,
};


type StoriesState = {
  limit: number,
  currentPage: number
};

class Stories extends React.Component<StoriesProps, StoriesState> {
  constructor(props) {
    super(props);
    this.state = {
      limit: 15,
      currentPage: 1
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const storyName = Stories.types[location.pathname.slice(1)];
    this.fetchStoryData(storyName);
  }

  componentWillReceiveProps(nextProps) {
    const { story } = this.props;
    const storyName = Stories.types[nextProps.location.pathname.slice(1)];
    if (nextProps.story.items !== story.items) {
      this.fetchStoryData(storyName);
    }
    this.setState({ currentPage: this.getCurrentPage(nextProps.location.search) });
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
   * @param {String} search
   * @memberof Stories
   * @returns {Number} - current page
   */
  getCurrentPage(search: string) {
    const currentPage = parseInt(
      qs.parse(search, { ignoreQueryPrefix: true }).page,
      10
    ) || 1;
    return currentPage;
  }

  /**
   * @returns {Array} - list of items to be displayed
   * @memberof Stories
   */
  getRenderedItems() {
    const { story } = this.props,
      { limit, currentPage } = this.state,
      start = (limit * (currentPage - 1)),
      finish = (limit * currentPage);
    return story.items.slice(start, finish);
  }

  /**
   * handles fetching of items based on story type eg. topstories
   * @param {String} storyName
   * @memberof TopStories
   * @returns {Null} - d
   */
  fetchStoryData(storyName) {
    const { story, fetchItems } = this.props;
    if (story.storyName !== storyName) {
      fetchItems(storyName);
    }
    if (story.items.length < 1) {
      fetchItems(storyName);
    }
  }


  render() {
    const {
      story: { items, totalPages },
      location: { pathname },
    } = this.props;
    const { currentPage, limit } = this.state;
    return (
      <React.Fragment>
        <ItemList items={this.getRenderedItems()} />
        {
          items.length
            ? (
              <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                url={pathname}
              />
            )
            : <DummyList count={limit} />
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, { location }) => {
  const storyName = Stories.types[location.pathname.slice(1)];
  return {
    story: {
      items: state.storyTypes[storyName],
      location: location.pathname,
      storyName,
      totalPages: state.pagination[storyName]
    }
  };
};

export default connect(mapStateToProps, {
  fetchItems: handleFetchItems
})(Stories);
