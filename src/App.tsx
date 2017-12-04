import * as React from 'react';
import {
  Container, Dropdown,
  Header, Menu
} from 'semantic-ui-react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header>
              Minecraft Club
            </Menu.Item>
            <Menu.Item>My Heros</Menu.Item>
            <Dropdown item simple text="Ratings">
              <Dropdown.Menu>
                <Dropdown.Item>Offense</Dropdown.Item>
                <Dropdown.Item>Defense</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        <Container text>
          <Header>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>
        </Container>

      </div>
    );
  }
}

export default App;
