import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRouter from './router';
import Header from './header';
import MainMenu from './menu';
import LoginForm from '../loginform';

class App extends React.Component {
  render() {
    return <AppRouter />;
  }
}

export default class Main extends React.Component {
  componentWillMount() {
    this.closeMainMenu();
    this.closeLoginForm();
  }

  openMainMenu() {
    this.setState({mainMenu: true});
  }

  closeMainMenu() {
    this.setState({mainMenu: false});
  }

  openLoginForm() {
    this.setState({
      loginForm: true,
      mainMenu: false,
    });
  }

  closeLoginForm() {
    this.setState({loginForm: false});
  }

  render() {
    let children = React.cloneElement(this.props.children);
    let title = children.props.route.title;
    let closeButton = children.props.route.closeButton !== false;
    return (
      <MuiThemeProvider>
        <div>
          <Header
            title={title}
            closeButton={closeButton}
            openMainMenu={this.openMainMenu.bind(this)}
          />
          <MainMenu
            enable={this.state.mainMenu}
            open={this.openMainMenu.bind(this)}
            close={this.closeMainMenu.bind(this)}
            openLoginForm={this.openLoginForm.bind(this)}
          />
          <LoginForm
            enable={this.state.loginForm}
            open={this.openLoginForm.bind(this)}
            close={this.closeLoginForm.bind(this)}
          />
          <MainContainer>{children}</MainContainer>
        </div>
      </MuiThemeProvider>
    );
  }
}

class MainContainer extends React.Component {
  render() {
    const style = {
      position: 'absolute',
      bottom: 0,
      right: 0,
    };
    return <main style={style}>{this.props.children}</main>;
  }
}

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));