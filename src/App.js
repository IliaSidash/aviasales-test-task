import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import TicketsList from './components/TicketsList';
import Logo from './components/Logo';
import ToggleButton from './components/Sidebar/Button';

const Content = styled.main`
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <>
        <Logo />
        <ToggleButton />
        <Content>
          <Grid>
            <Row>
              <Col md={10} mdOffset={1} lg={4} lgOffset={0} xl={3} xlOffset={1}>
                <Sidebar />
              </Col>
              <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={0} xl={7}>
                <TicketsList />
              </Col>
            </Row>
          </Grid>
        </Content>
      </>
    );
  }
}

export default App;
