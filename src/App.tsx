import * as React from 'react';
import * as Dew from 'rxjs-dew-react';
import * as Store from './Store';
import {
  Container, Dropdown,
  Header, Menu
} from 'semantic-ui-react';

export enum AppLocation {
  Home = 'Home',
  Offense = 'Offense',
  Defense = 'Defense'
}

export type AppState = {
  appLocation: AppLocation
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    appLocation: AppLocation.Home
  };

  store = Store.createStore();

  go = (to: AppLocation) => this.setState({appLocation: to});

  render() {
    return (
      <Dew.Provider store={this.store} >
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header>
              Minecraft Club
            </Menu.Item>
            <Menu.Item
              onClick={() => this.go(AppLocation.Home)}
            >
            My Heros
            </Menu.Item>
            <Dropdown item simple text="Ratings">
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => this.go(AppLocation.Offense)}
                >
                Offense
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.go(AppLocation.Defense)}
                >
                Defense
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        <Container text>
          <Header>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>
        </Container>

      </Dew.Provider>
    );
  }
}

export default App;
