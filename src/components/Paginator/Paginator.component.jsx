// react libraries
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Paginator.scss';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 0,
      more: 0,
      previous: 0
    };
  }

  componentDidMount() {
    const itemLength = this.props.items ? this.props.items.length : 0;
    const totalPages = Math.floor(itemLength / this.props.limit);
    // console.log(totalPages);
    this.setState({ totalPages });
  }

  render() {
    return (
      <div className="paginator">
        <Link
          to={`${this.props.url}?page=`}
          className="paginator__previous"
        >
          Previous
        </Link>
        <Link
          to={`${this.props.url}?page=`}
          className="paginator__more"
        >
          More
        </Link>
      </div>
    );
  }
}

export default Paginator;
