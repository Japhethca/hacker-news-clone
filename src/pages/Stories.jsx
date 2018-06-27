// react related libraries
import * as React from 'react';
import { connect } from 'react-redux';

// components
import ItemList from 'components/ItemList';
import Paginator from 'components/Paginator';

// actions
import handleFetchItems from 'actions/storiesActions';

// thirdparty library
import qs from 'qs';

type Props = {
  location: {
    search: string,
    pathname: string
  },
  story: any,
  fetchItems: (x:string) => void,
  totalPages: number
};

type State = {
  limit: number,
  currentPage: number
};

class Stories extends React.Component<Props, State> {
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
    const storyName = Stories.types[nextProps.location.pathname.slice(1)];
    this.fetchStoryData(storyName);
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
  getCurrentPage(search) {
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
    const { story } = this.props;
    const { limit, currentPage } = this.state;
    const start = (limit * (currentPage - 1));
    const finish = (limit * currentPage);
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
    const { currentPage } = this.state;
    return (
      <div>
        <ItemList items={this.getRenderedItems()} />
        {
          items
          && (
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            url={pathname}
          />
          )
        }
      </div>
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
