/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
} from 'mdbreact';
import { styles } from '../pagesStyle/Links.css';

class Links extends PureComponent {
  render() {
    return (
      <MDBNavbar color="transparent" dark expand="md" fixed="top">

        <MDBNavbarBrand to="/">
          <MDBNavLink style={styles.navLink} exact to="/"><strong>My Portfolio</strong></MDBNavLink>
        </MDBNavbarBrand>

        <MDBNavbarNav right style={styles.pos}>
          <MDBNavItem>
            <MDBNavLink style={styles.navLink} exact to="/" activeStyle={{ color: 'yellow' }}>Profile</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink style={styles.navLink} exact to="/about" activeStyle={{ color: 'yellow' }}>About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink style={styles.navLink} exact to="/skills" activeStyle={{ color: 'yellow' }}>Skills</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink style={styles.navLink} exact to="/projects" activeStyle={{ color: 'yellow' }}>Projects</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">Activity</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem style={styles.color}><MDBNavLink style={styles.navLink} exact to="/activityRedux" activeStyle={{ color: 'yellow' }}>Redux Button</MDBNavLink></MDBDropdownItem>
                <MDBDropdownItem style={styles.color}><MDBNavLink style={styles.navLink} exact to="/activityReduxFetching" activeStyle={{ color: 'yellow' }}>Fetching Users</MDBNavLink></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>

      </MDBNavbar>
    );
  }
}

export default Links;
