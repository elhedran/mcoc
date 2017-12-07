import * as React from 'react';
import * as Dew from 'rxjs-dew-react';
import { createService } from './Service';
import {
  Container, Dropdown, Menu
} from 'semantic-ui-react';
import { MyHeros } from './MyHeros';
import { style, types } from 'typestyle';
import { Rated } from './Rated';
import { offense } from './ratings';

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

  private storeMap = {
    heros: createService()
  };

  private go = (to: AppLocation) => this.setState({ appLocation: to });

  render() {
    return (
      <Dew.Provider store={this.storeMap} >
        <div style={{top: 0, left: 0, right: 0, bottom: 0, position: 'absolute'}}>
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
          <div className={style(contentStyle)}>
            {this.state.appLocation === AppLocation.Home
            ? <MyHeros />
            : null}
            {this.state.appLocation === AppLocation.Offense
            ? <Rated heroRatings={offense} title="Offense" />
            : null}
          </div>
        </div>
      </Dew.Provider>
    );
  }
}

export default App;

const contentStyle: types.NestedCSSProperties = {
  paddingTop: '4em', paddingLeft: '1em', paddingRight: '1em', paddingBottom: '1em',
  backgroundColor: '#668',
  minHeight: '100%'
};