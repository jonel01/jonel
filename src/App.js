/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import { MDBContainer } from 'mdbreact';
import { styles } from './App.css.js';
import Navbar from './layout/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends PureComponent {
  render() {
    return (
      <MDBContainer style={styles.container}>
        <Navbar />
      </MDBContainer>
    );
  }
}
export default App;
