import React from 'react';
import User from './User';
import { withRouter, Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Header extends React.Component {

  logoutUser = async () => {
    try {
      await User.logout();
      this.props.history.push({ pathname: '/Toppage' });
    } catch (e) {
      this.setState({ errMessage: 'ログアウト失敗しました' });
    }
  };

  render() {
    return (
      <div className="header-test">
        <header>
          <div className="header-wrapper">
            <img alt="Header" className="header-image" src="/image/troument-logo.svg" />
            {User.isLoggedIn()
              ? 
              <button className="logout-button" onClick={this.logoutUser}>ログアウト
              <ExitToAppIcon className="logout-button-icon"/>
              </button>
              : (<ul className="nav-wrapper">
                <li className="header-nav"><Link to="/Register" className="header-nav-link">会員登録</Link></li>
                <li className="header-nav"><Link to="/Login" className="header-nav-link">ログイン</Link></li>
              </ul>)
            }
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);