// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Paginator.scss';

// Paginator props
type Props = {
  currentPage: number,
  totalPages: number,
  url: string
}

// Paginator states
type State = {
  currentPage: number,
}


class Paginator extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentPage } = this.props;

    if (nextProps.currentPage !== currentPage) {
      this.setState({
        currentPage: nextProps.currentPage,
      });
    }
  }

  /**
   * @returns {Number} - previous page
   * @memberof Paginator
   */
  getPreviousPage() {
    const { currentPage } = this.state;
    return currentPage - 1;
  }

  /**
   * @returns {Number} - next page
   * @memberof Paginator
   */
  getNextPage() {
    const { currentPage } = this.state;
    return currentPage + 1;
  }

  /**
   * @returns {Boolean} - returns true/false if separator is to be shown
   * @memberof Paginator
   */
  showSeparator() {
    const { totalPages } = this.props;
    return this.getPreviousPage() >= 1 && this.getNextPage() <= totalPages;
  }

  render() {
    const { url, totalPages } = this.props;
    return (
      <div className="paginator">
        {
          this.getPreviousPage() >= 1
          && (
          <Link
            to={`${url}?page=${this.getPreviousPage()}`}
            className={`paginator__previous ${this.showSeparator(totalPages) && 'paginator__show-separator'}`}
          >
            Previous
          </Link>
          )
        }
        {
          this.getNextPage() <= totalPages
          && (
          <Link
            to={`${url}?page=${this.getNextPage()}`}
            className="paginator__more"
          >
            More
          </Link>
          )
        }
      </div>
    );
  }
}

export default Paginator;
