// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Paginator.scss';


type Props = {
  items: any[],
  limit: number,
  url: string
}

type State = {
  totalPages: number,
  more: number,
  previous: number
}


class Paginator extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 0,
      more: 0,
      previous: 0
    };
  }

  componentDidMount() {
    const { items, limit } = this.props;
    const itemLength = items ? items.length : 0;
    const totalPages = Math.floor(itemLength / limit);
    // console.log(totalPages);
    this.setState({ totalPages });
  }

  render() {
    const { url } = this.props;
    return (
      <div className="paginator">
        <Link
          to={`${url}?page=`}
          className="paginator__previous"
        >
          Previous
        </Link>
        <Link
          to={`${url}?page=`}
          className="paginator__more"
        >
          More
        </Link>
      </div>
    );
  }
}

export default Paginator;
