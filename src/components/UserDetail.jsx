import React from 'react';
import { connect } from 'react-redux';

import fetchUserDetail from 'actions/userAction';
import { UserType } from '../types';
import fromNow from '../helpers/fromNow';
import htmlRender from 'react-render-html';

// styles
import './UserDetails.scss';

type UserDetailProps = {
  user: UserType,
  fetchUserDetail: (string) => any,
  username: string
}

class UserDetail extends React.Component<UserDetailProps> {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const { user, fetchUserDetail, username } = this.props;

    if (!user) {
      fetchUserDetail(username);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user } = this.props;
    if (user !== nextProps.user) {
      this.setState({
        user: nextProps.user
      });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <table className="user-details">
        {user.id &&
          <tbody>
            <tr>
              <td>User</td>
              <td>{user && user.id}</td>
            </tr>
            <tr>
              <td>Joined</td>
              <td>{fromNow(user.created)}</td>
            </tr>
            <tr>
              <td>Karma</td>
              <td>{user.karma}</td>
            </tr>
            <tr>
              <td>About Me</td>
              <td>{user.about && htmlRender(user.about)}</td>
            </tr>
            <tr>
              <td>Submissions</td>
              <td>
                <a href="">{user.submitted && user.submitted.length}</a>
                {/* {user.about} */}
              </td>
            </tr>
          </tbody>
        }
      </table>
    );
  }
}
const mapStateToProps = ({ users }, { match }) => ({
  user: users[match.params.username],
  username: match.params.username
});
export default connect(mapStateToProps, { fetchUserDetail })(UserDetail);
